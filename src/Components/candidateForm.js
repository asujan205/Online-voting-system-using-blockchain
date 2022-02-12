import React, { useState } from "react";
import Web3 from "web3";
const candidateForm =()=>{
    const [ name,setCandidateName]= useState("")
    const [addrs,setCandidateAddress]= useState("")
    const [citNum,setCitzenNumber]=useState(0)
    const [ party,setParty] =useState("");
    const handleSumbit=()=>{

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