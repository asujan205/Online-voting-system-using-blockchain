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