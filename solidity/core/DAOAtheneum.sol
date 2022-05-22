// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

import "../interfaces/IDAOAtheneum.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/IERC20.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC721/IERC721.sol";


contract DAOAtheneum is IDAOAtheneum { 


    address administrator;
    address self; 

    uint256 mediaCounter = 0; 
    uint256 daoCounter = 0; 

    uint256 daoaFee = 10;

    mapping(address=>string[]) daosByUser;

    mapping(string=>uint256[]) mediaIdByDao; 

    mapping(uint256=>Media) shortMediaById; 
    mapping(uint256=>Media) fullMediaById; 
    mapping(uint256=>bool) knownMediaId; 

    mapping(string=>bool) knownDAOName; 
    mapping(address=>bool) knownMemberAccessContract; 
    mapping(address=>DAO) daoByMemberAccessContract;
    mapping(string=>DAO) daoByName; 

    mapping(string=>uint256) countByCategory; 

    mapping(string=>mapping(string=>mapping(string=>uint256[]))) sMediaIdByTermByCategoryByDAO; 

    mapping(string=>string[]) daoNamesByCategory; 

    mapping(string=>mapping(string=>bool)) hasTermByDAO; 
    mapping(string=>mapping(string=>uint256[])) mediaIdsByTermByDAO; 
    mapping(string=>string[]) daoNamesByTerm; 

    mapping(string=>bool) knownTerm; 
    mapping(string=>uint256[]) allMediaIdsByTerm; 

    constructor(address _administrator) {
        administrator = _administrator; 
        self = address(this);
    }


    function getUserDAOs() view external returns(DAO [] memory _dao){
       return getDAOArray(daosByUser[msg.sender]);
    }




    function getStats() view external returns (Stats memory _stats){

    }

    function getTopCategories() view external returns (string [] memory _category, uint256 [] memory _uploadCount){

    }

    function search(string memory _dao, string memory _term) view external returns (Media [] memory _media){
        if(isEqual(_dao,"")) {
            require(knownTerm[_term], " unknown term ");
            return getShortMediaArray(allMediaIdsByTerm[_term]);
        }
        require(hasTermByDAO[_dao][_term], " term not found for DAO ");
        return getShortMediaArray(mediaIdsByTermByDAO[_dao][_term]);
    }

    function download(uint256 _id) view external returns (Media memory _media) {
        require(knownMediaId[_id]," unknown media id ");
        Media memory media_ = fullMediaById[_id];
        if(isEqual(media_.accessType, "FREE")){
            return _media;
        }
        require(isDaoMember(_media.ownerDAO), " not a DAO member "); 
        return _media; 
    }
    
    function download(uint256 _id, uint256 _downloadFee) payable external returns (Media memory _media){
        require(knownMediaId[_id]," unknown media id ");
        Media memory media_ = fullMediaById[_id]; 

        // pay 
        DAO memory dao_ = daoByName[media_.ownerDAO];
        uint256 price_ = dao_.paidMediaPrice; 
        require(_downloadFee >= price_, " insufficient payment ");
        IERC20 erc20 = IERC20(dao_.paymentCurrency); 
        require(erc20.allowance(msg.sender, self) >= price_, " insufficient allowance ");
        erc20.transferFrom(msg.sender, self, price_);
        // take fee and transfer
        erc20.transferFrom(self, dao_.paymentWallet, price_ - daoaFee);

        // return media
        return media_;
    }

    function upload(Media memory _media) external returns (uint256 _id){
       require(isDaoMember(_media.ownerDAO), " not a DAO member "); 
        mediaCounter++; 
        _media.mediaId = mediaCounter; 
        _media.uploadDate = block.timestamp; 
        _media.status = "LIVE";
        fullMediaById[_media.mediaId] = _media; 
        knownMediaId[_media.mediaId] = true;
        
        Media memory shortMedia_ = Media({
                                            title        : _media.title, 
                                            mediaType    : _media.mediaType,
                                            categories   : _media.categories,  
                                            terms        : _media.terms,
                                            ownerDAO     : _media.ownerDAO,
                                            accessType   : _media.accessType, 
                                            summary      : _media.summary, 
                                            description  : _media.description, 
                                            ipfsLocation : "", 
                                            uploadDate   : _media.uploadDate,
                                            status       : _media.status,  
                                            mediaId      : _media.mediaId 
                                         }); 
        shortMediaById[shortMedia_.mediaId] = shortMedia_;
        return _media.mediaId; 
    }

    function registerDAO(DAO memory _dao) external returns (uint256 _id){
        require(!knownMemberAccessContract[_dao.accessContract], " known access contract ");
        require(!knownDAOName[_dao.name], " known dao ");
        _dao.registrationDate = block.timestamp; 
        daoCounter++;
        _dao.registrationId = daoCounter; 

        daoByName[_dao.name] = _dao; 
        daoByMemberAccessContract[_dao.accessContract] = _dao; 
        knownMemberAccessContract[_dao.accessContract] = true; 
        knownDAOName[_dao.name] = true; 
        return _dao.registrationId;
    }

    function findDAO(string memory _daoName) view external returns (DAO memory _dao){
        return daoByName[_daoName];
    }


    function addUserDAO(string memory _daoName) external returns (bool _added) {
        require(isDaoMember(_daoName), " missing membership tokens from DAO ");
        daosByUser[msg.sender].push(_daoName);
        return true; 
    }

    function removeUserDAO(string memory _daoName) external returns (bool _removed) {
        string [] memory daoNames_ = daosByUser[msg.sender];

        string [] memory newDaoNames_ = new string[](daoNames_.length - 1);
        uint256 y = 0; 
        for(uint256 x = 0; x < daoNames_.length; x++) {
            string memory daoName_ = daoNames_[x];
            if(!isEqual(daoName_, _daoName)){
                newDaoNames_[y] = daoName_;
                y++;
            }
        }
        daosByUser[msg.sender] = newDaoNames_;
        return true; 
    }



    function getMedia(string memory _daoName) view external returns (Media [] memory _media){
        require(isDaoMember(_daoName), " not a DAO member "); 
        return getFullMediaArray(mediaIdByDao[_daoName]);
    }

    function deleteMedia(uint256 _id) view external returns (bool _deleted){
        Media memory media_ = fullMediaById[_id];
        require(isDaoMember(media_.ownerDAO), " not a DAO member "); 
        
        media_.status = "DELETED";
        Media memory smedia_ = shortMediaById[_id];
        smedia_.status = "DELETED";
        return true; 
    }


    //********************************* ADMIN *************************************************

    function setDAOAFee(uint256 _fee)  external returns (bool _set){
        adminOnly(); 
        daoaFee = _fee; 
        return true; 
    }

    //==================================== INTERNAL =============================================

    function getDAOArray(string [] memory _daoNames) view internal returns (DAO[] memory _daos) {
        _daos = new DAO[](_daoNames.length);
        for(uint256 x = 0; x < _daoNames.length; x++) {
            _daos[x] = daoByName[_daoNames[x]];
        }
        return _daos;
    }

    function getFullMediaArray(uint256 [] memory _ids) view internal returns (Media [] memory _media){
        _media = new Media[](_ids.length);
        for(uint256 x = 0; x < _ids.length; x++){
            _media[x] = fullMediaById[_ids[x]];
        }
        return _media; 
    }

    function getShortMediaArray(uint256 [] memory _ids) view internal returns (Media [] memory _media){
        _media = new Media[](_ids.length);
        for(uint256 x = 0; x < _ids.length; x++){
            _media[x] = shortMediaById[_ids[x]];
        }
        return _media; 
    }

    function isDaoMember(string memory _daoName) view internal returns (bool) {
        DAO memory dao_ = daoByName[_daoName];
        if(isEqual(dao_.memberAccessType, "NFT")){
            IERC721 nft = IERC721(dao_.accessContract);
            if(nft.balanceOf(msg.sender) > 1){
                return true; 
            }
            return false; 
        }
        IERC20 cryptocurrency = IERC20(msg.sender);
        if(cryptocurrency.balanceOf(msg.sender) > 0) {
            return true; 
        }
        return false; 
    }

    function adminOnly()  view internal returns (bool){
        require(msg.sender == administrator, " admin only ");
        return true; 
    }

    function isEqual(string memory a, string memory b) pure internal returns (bool){
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }

}