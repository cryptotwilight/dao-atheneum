iDAOAtheneumAbi = [
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_daoName",
				"type": "string"
			}
		],
		"name": "addUserDAO",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_added",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "deleteMedia",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_deleted",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_downloadFee",
				"type": "uint256"
			}
		],
		"name": "download",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "mediaType",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "categories",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "terms",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "ownerDAO",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "accessType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "summary",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ipfsLocation",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "uploadDate",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "mediaId",
						"type": "uint256"
					}
				],
				"internalType": "struct IDAOAtheneum.Media",
				"name": "_media",
				"type": "tuple"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_daoName",
				"type": "string"
			}
		],
		"name": "findDAO",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "daoType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "shortDescription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "detailedDescription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "memberAccessType",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "accessContract",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "paidMediaPrice",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "paymentCurrency",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "paymentWallet",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "registrationDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "registrationId",
						"type": "uint256"
					}
				],
				"internalType": "struct IDAOAtheneum.DAO",
				"name": "_dao",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_daoName",
				"type": "string"
			}
		],
		"name": "getMedia",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "mediaType",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "categories",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "terms",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "ownerDAO",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "accessType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "summary",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ipfsLocation",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "uploadDate",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "mediaId",
						"type": "uint256"
					}
				],
				"internalType": "struct IDAOAtheneum.Media[]",
				"name": "_media",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getStats",
		"outputs": [
			{
				"components": [
					{
						"internalType": "uint256",
						"name": "daosRegistered",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "mediaUploaded",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "paidMediaDownloaded",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "mediaEarnings",
						"type": "uint256"
					}
				],
				"internalType": "struct IDAOAtheneum.Stats",
				"name": "_stats",
				"type": "tuple"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getUserDAOs",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "daoType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "shortDescription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "detailedDescription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "memberAccessType",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "accessContract",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "paidMediaPrice",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "paymentCurrency",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "paymentWallet",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "registrationDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "registrationId",
						"type": "uint256"
					}
				],
				"internalType": "struct IDAOAtheneum.DAO[]",
				"name": "_dao",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "name",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "daoType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "shortDescription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "detailedDescription",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "memberAccessType",
						"type": "string"
					},
					{
						"internalType": "address",
						"name": "accessContract",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "paidMediaPrice",
						"type": "uint256"
					},
					{
						"internalType": "address",
						"name": "paymentCurrency",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "paymentWallet",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "registrationDate",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "registrationId",
						"type": "uint256"
					}
				],
				"internalType": "struct IDAOAtheneum.DAO",
				"name": "_dao",
				"type": "tuple"
			}
		],
		"name": "registerDAO",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_daoName",
				"type": "string"
			}
		],
		"name": "removeUserDAO",
		"outputs": [
			{
				"internalType": "bool",
				"name": "_removed",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_dao",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_term",
				"type": "string"
			}
		],
		"name": "search",
		"outputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "mediaType",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "categories",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "terms",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "ownerDAO",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "accessType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "summary",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ipfsLocation",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "uploadDate",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "mediaId",
						"type": "uint256"
					}
				],
				"internalType": "struct IDAOAtheneum.Media[]",
				"name": "_media",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"components": [
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "mediaType",
						"type": "string"
					},
					{
						"internalType": "string[]",
						"name": "categories",
						"type": "string[]"
					},
					{
						"internalType": "string[]",
						"name": "terms",
						"type": "string[]"
					},
					{
						"internalType": "string",
						"name": "ownerDAO",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "accessType",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "summary",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "ipfsLocation",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "uploadDate",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "status",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "mediaId",
						"type": "uint256"
					}
				],
				"internalType": "struct IDAOAtheneum.Media",
				"name": "_media",
				"type": "tuple"
			}
		],
		"name": "upload",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]