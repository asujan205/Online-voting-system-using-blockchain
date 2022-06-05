import React, { useState } from "react";
import Web3 from "web3";
import { ElectionAbi } from '../Election'
import './AddCandidate.css';
const web3 = new Web3(Web3.givenProvider)
const contractAddress = "0x878da272091Ca8340f08f7AE6Fe2d6a224158dDa";
const ElectionContract = new web3.eth.Contract(ElectionAbi, contractAddress);
const CandidateForm = () => {
  const [name, setCandidateName] = useState("")
  const [addrs, setCandidateAddress] = useState("")
  const [citNum, setCitzenNumber] = useState()
  const [party, setParty] = useState("");
  const [candidatelist, setCandidateList] = useState([])
  const handleSumbit = async () => {
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const gas = await ElectionContract.methods.addCandidate(name, citNum, addrs, party).estimateGas()
    const result = await ElectionContract.methods.addCandidate(name, citNum, addrs, party).send({ from: account, gas });
    //setCandidateList(result)


  }

  console.log(candidatelist)
  const handleGet = async () => {
    const accounts = await web3.eth.givenProvider.enable();
    const account = accounts[0]
    const resutl = await ElectionContract.methods.getallcandidates().call()
    setCandidateList(resutl)
    console.log(candidatelist)

  }
  return (<div>


    <div className="center">
      <div className="form">

        <h1>Candidate Form</h1>

        <div className="txt_field">
          <input type="text" required
            value={name}
            onChange={e => setCandidateName(e.target.value)}


          />
          <label>Name</label>
        </div>

        <div className="txt_field">
          <input type="text" required
            value={addrs}
            onChange={e => setCandidateAddress(e.target.value)}
          />
          <label>Account Address</label>
        </div>

        <div className="txt_field">
          <input type="text" required
            value={citNum}
            onChange={e => setCitzenNumber(e.target.value)}

          />
          <label>Citizenship</label>
        </div>

        <div className="txt_field">
          <input type="text" required
            value={party}
            onChange={e => setParty(e.target.value)}


          />
          <label>Party Name</label>
        </div>

        <input type="submit" value="Create" onClick={handleSumbit} />
      </div>
    </div>


  </div>)
}
export default CandidateForm;