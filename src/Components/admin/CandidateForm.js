import React, { useState } from "react";
import Web3 from "web3";
import { ElectionAbi } from "../Election";
const web3 = new Web3(Web3.givenProvider)
 const contractAddress = "0xd071b7e64e766c5948EE3b7947865ac63c669276"; 
 const ElectionContract = new web3.eth.Contract (ElectionAbi, contractAddress);
const CandidateForm =()=>{
    const [ name,setCandidateName]= useState("")
    const [addrs,setCandidateAddress]= useState("")
    const [citNum,setCitzenNumber]=useState(0)
    const [ party,setParty] =useState("");
    const [candidatelist,setCandidateList]=useState([])
    const handleSumbit= async()=>{
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const gas = await ElectionContract.methods.addCandidate(name,citNum,addrs,party).estimateGas()
        const result = await ElectionContract.methods.addCandidate(name,citNum,addrs,party).send({from:account,gas});
        //setCandidateList(result)


    }
    console.log(candidatelist)
    const handleGet =async ()=>{
      const accounts = await web3.eth.givenProvider.enable();
      const account = accounts[0]
      const resutl = await ElectionContract.methods.getallcandidates().call( )
      setCandidateList(resutl)
      console.log(candidatelist)

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