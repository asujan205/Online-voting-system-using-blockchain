import React, { useState } from "react";
import Web3 from "web3";
const web3 = new Web3(Web3.givenProvider)
 const contractAddress = "0xD4F7944864012dcc522529b6c5d7CBD6989f9d4A"; 
 const ElectionContract = new web3.eth.Contract (ElectionAbi, contractAddress);
const candidateForm =()=>{
    const [ name,setCandidateName]= useState("")
    const [addrs,setCandidateAddress]= useState("")
    const [citNum,setCitzenNumber]=useState(0)
    const [ party,setParty] =useState("");
    const handleSumbit=()=>{
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const gas = await  ElectionContract.methods.addCandidate(name,addrs,citNum).estimateGas()
        const result = await ElectionContract.methods.addCandidate(name,addrs,citNum).send({from:account,gas});
        console.log(result)


    }
    return(<div>
        <input type="text" 
                      label='CandidateName'
                       placeholder='Enter Candidate name'
                       value={name}
                       onChange={e => setCandidateName(e.target.value)}
                         fullWidth required/>
                       <br />
                       <br />
                      <input type="text"
                      label='Candidate Adress'
                       placeholder='Candidate Adress' 
                        value={addrs}
                        onChange={e => setCandidateAddress(e.target.value)}
                          fullWidth required/>
                             <input type="text" 
                      label='Candidate CitizenShip'
                       placeholder='Enter Candidate CitizenShipNumber'
                       value={citNum}
                       onChange={e => setCitzenNumber(e.target.value)}
                         fullWidth required/>
                            <input type="text" 
                      label='Candidate party'
                       placeholder='Enter Candidate party name'
                       value={party}
                       onChange={e => setParty(e.target.value)}
                         fullWidth required/>
                          <br/>
                          <br/>
                      <button type='submit' color='primary' variant="contained"  onClick={handleSumbit}
                      fullWidth >Create</button>
          </div>)
}