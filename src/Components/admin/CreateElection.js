import React, { useState } from "react";
 import Web3 from "web3";
import { ElectionAbi } from "../Election";
import { Electabi } from "../deployElection";
import DoElection from './DoElection';
 const web3 = new Web3(Web3.givenProvider)
 const contractAddress = "0xa14A4Ea3354dFDFFAe6727C466816ca64c8cf5a3"; 
 const ElectionContract = new web3.eth.Contract (ElectionAbi, contractAddress);
 const ElectionContract2= new web3.eth.Contract (Electabi, contractAddress);
const Election = ()=>{
    const[electionName,setElectionName]= useState('');
    const[placeOfelection,setPlace] = useState('');
 const handleSumbit=()=>{
   const election=DoElection(electionName,placeOfelection,web3,ElectionContract,ElectionContract2);
   console.log(election);


 }
    return(<div>
  <input type="text" 
                label='Election Name'
                 placeholder='Enter election name'
                 value={electionName}
                 onChange={e => setElectionName(e.target.value)}
                   fullWidth required/>
                 <br />
                 <br />
                <input type="text"
                label='Election Place'
                 placeholder='Enter placeofelection' 
                  value={placeOfelection}
                  onChange={e => setPlace(e.target.value)}
                    fullWidth required/>
                    <br/>
                    <br/>
                <button type='submit' color='primary' variant="contained"  onClick={handleSumbit}
                fullWidth >Create</button>
    </div>)
}
 export default Election;