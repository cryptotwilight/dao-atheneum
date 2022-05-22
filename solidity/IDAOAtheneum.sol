// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;


interface IDAOAtheneum { 

    struct DAO { 
        string name;
        string daoType; 
        string shortDescription; 
        string detailedDescription; 
        string memberAccessType;
        address accessContract; 
        uint256 paidMediaPrice; 
        address paymentCurrency; 
        address paymentWallet;
        uint256 registrationDate; 
        uint256 registrationId; 
    }
    
    struct Media { 
        string title; 
        string mediaType;
        string [] categories;
        string [] terms;  
        string ownerDAO;
        string accessType; 
        string summary; 
        string description;
        string ipfsLocation; 
        uint256 uploadDate;
        string status;  
        uint256 mediaId; 
    }

    struct Stats { 
        uint256 dailyAccess; 
        uint256 totalUploadCount; 
        uint256 totalWeeklyUpload;
        uint256 mediaEarnings;
    }

    function getUserDAOs() view external returns(DAO [] memory _dao);

    function addUserDAO(string memory _daoName) external returns (bool _added);

    function removeUserDAO(string memory _daoName) external returns (bool _removed);

    function getStats() view external returns (Stats memory _stats);

    function getTopCategories() view external returns (string [] memory _category, uint256 [] memory _uploadCount);

    function search(string memory _dao, string memory _term) view external returns (Media [] memory _media);

    function download(uint256 _id, uint256 _downloadFee) payable external returns (Media memory _media);

    function upload(Media memory _media) external returns (uint256 _id);

    function registerDAO(DAO memory _dao) external returns (uint256 _id);

    function findDAO(string memory _daoName) view external returns (DAO memory _dao);

    function getMedia(string memory _daoName) view external returns (Media [] memory _media);

    function deleteMedia(uint256 _id) external returns (bool _deleted);

}