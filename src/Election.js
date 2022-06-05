 export const ElectionAbi=
	
	
 [
  {
    "constant": true,
    "inputs": [],
    "name": "votercount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x28ec1018"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "numCandidates",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x5216509a"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "winnerindex",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x851fec76"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "candidatelist",
    "outputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "addr",
        "type": "address"
      },
      {
        "name": "Citizennumber",
        "type": "string"
      },
      {
        "name": "votecount",
        "type": "uint256"
      },
      {
        "name": "party",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x911eb81d"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "name": "voters",
    "outputs": [
      {
        "name": "newuser",
        "type": "bool"
      },
      {
        "name": "photo",
        "type": "string"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "age",
        "type": "uint256"
      },
      {
        "name": "adharno",
        "type": "string"
      },
      {
        "name": "gender",
        "type": "string"
      },
      {
        "name": "voted",
        "type": "bool"
      },
      {
        "name": "vote",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xa3ec138d"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "election_status",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xca743ea9"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "admin",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xf851a440"
  },
  {
    "inputs": [
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "place",
        "type": "string"
      },
      {
        "name": "createraddress",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor",
    "signature": "constructor"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "candidatename",
        "type": "string"
      },
      {
        "name": "citizenno",
        "type": "string"
      },
      {
        "name": "Candidate_address",
        "type": "address"
      },
      {
        "name": "partyName",
        "type": "string"
      }
    ],
    "name": "addCandidate",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x07b25535"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getNumOfCandidates",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0xe8685ba1"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "candidateId",
        "type": "uint256"
      }
    ],
    "name": "getCandidate",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x35b8e820"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getallcandidates",
    "outputs": [
      {
        "components": [
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "addr",
            "type": "address"
          },
          {
            "name": "Citizennumber",
            "type": "string"
          },
          {
            "name": "votecount",
            "type": "uint256"
          },
          {
            "name": "party",
            "type": "string"
          }
        ],
        "name": "",
        "type": "tuple[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x0626d9a7"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "photo",
        "type": "string"
      },
      {
        "name": "name",
        "type": "string"
      },
      {
        "name": "age",
        "type": "uint256"
      },
      {
        "name": "adharno",
        "type": "string"
      },
      {
        "name": "gender",
        "type": "string"
      }
    ],
    "name": "addVoter",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xd16de3ce"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "id",
        "type": "address"
      }
    ],
    "name": "getvoter",
    "outputs": [
      {
        "components": [
          {
            "name": "newuser",
            "type": "bool"
          },
          {
            "name": "photo",
            "type": "string"
          },
          {
            "name": "name",
            "type": "string"
          },
          {
            "name": "age",
            "type": "uint256"
          },
          {
            "name": "adharno",
            "type": "string"
          },
          {
            "name": "gender",
            "type": "string"
          },
          {
            "name": "voted",
            "type": "bool"
          },
          {
            "name": "vote",
            "type": "uint256"
          }
        ],
        "name": "",
        "type": "tuple"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x7436f306"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "proposal",
        "type": "uint256"
      }
    ],
    "name": "vote",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x0121b93f"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "isStarted",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x544736e6"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "isStoped",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x191797df"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "startelection",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0xddf33f06"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "stopelection",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function",
    "signature": "0x311a7f78"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "winnername",
    "outputs": [
      {
        "name": "",
        "type": "string"
      },
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x497487f5"
  }
]