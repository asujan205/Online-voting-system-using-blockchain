import React, { useState } from "react";
import Web3 from "web3";
import { ElectionAbi } from "../Election";
const web3 = new Web3(Web3.givenProvider)
 const contractAddress = "0xD4F7944864012dcc522529b6c5d7CBD6989f9d4A"; 
 const ElectionContract = new web3.eth.Contract (ElectionAbi, contractAddress);
const CandidateForm =()=>{
    const [ name,setCandidateName]= useState("")
    const [addrs,setCandidateAddress]= useState("")
    const [citNum,setCitzenNumber]=useState(0)
    const [ party,setParty] =useState("");
    const handleSumbit= async()=>{
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const gas = await ElectionContract.methods.addCandidate(name,citNum,account).estimateGas()
        const result = await ElectionContract.methods.addCandidate(name,citNum,account).send({from:account,gas});
        console.log(result)


    }
    const handleGet = ()=>{
      
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
                      <button type='submit' color='primary' variant="contained"  onClick={handleGet}
                      fullWidth >get</button>
          </div>)
}
export default CandidateForm;