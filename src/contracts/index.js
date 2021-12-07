// The contract address and ABI here
export const dtwitterContract = {
    address: "0xad82a7548fd162674f500af72dc52fe5b479a240",
    abi: [
		{
			"constant": false,
			"inputs": [
				{
					"name": "text",
					"type": "string"
				}
			],
			"name": "sendMessage",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "function"
		},
		{
			"inputs": [],
			"payable": false,
			"stateMutability": "nonpayable",
			"type": "constructor"
		},
		{
			"anonymous": false,
			"inputs": [
				{
					"indexed": true,
					"name": "id",
					"type": "uint256"
				},
				{
					"indexed": true,
					"name": "sender",
					"type": "address"
				},
				{
					"indexed": false,
					"name": "text",
					"type": "string"
				},
				{
					"indexed": false,
					"name": "created_at",
					"type": "uint256"
				}
			],
			"name": "MessageSent",
			"type": "event"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "id",
					"type": "uint256"
				}
			],
			"name": "getMessage",
			"outputs": [
				{
					"name": "",
					"type": "uint256"
				},
				{
					"name": "",
					"type": "address"
				},
				{
					"name": "",
					"type": "string"
				},
				{
					"name": "",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [],
			"name": "getMessages",
			"outputs": [
				{
					"name": "",
					"type": "uint256[20]"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		},
		{
			"constant": true,
			"inputs": [
				{
					"name": "",
					"type": "uint256"
				}
			],
			"name": "messages",
			"outputs": [
				{
					"name": "sender",
					"type": "address"
				},
				{
					"name": "text",
					"type": "string"
				},
				{
					"name": "created_at",
					"type": "uint256"
				}
			],
			"payable": false,
			"stateMutability": "view",
			"type": "function"
		}
	]
}