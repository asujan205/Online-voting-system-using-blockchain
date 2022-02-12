 export const Electabi=[
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "elecdetails",
      "outputs": [
        {
          "name": "name",
          "type": "string"
        },
        {
          "name": "place",
          "type": "string"
        },
        {
          "name": "elec_address",
          "type": "address"
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
      "name": "deployedElections",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "Electionname",
          "type": "string"
        },
        {
          "name": "placeofElection",
          "type": "string"
        }
      ],
      "name": "createElection",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getDeployedElections",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
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
          "name": "place",
          "type": "string"
        }
      ],
      "name": "getaddress_from_place",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getelecdetails",
      "outputs": [
        {
          "components": [
            {
              "name": "name",
              "type": "string"
            },
            {
              "name": "place",
              "type": "string"
            },
            {
              "name": "elec_address",
              "type": "address"
            }
          ],
          "name": "",
          "type": "tuple[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ]