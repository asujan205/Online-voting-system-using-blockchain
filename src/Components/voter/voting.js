import React, {useEffect, useState} from "react";
import Web3 from "web3";
import { ElectionAbi } from "../Election";
import { Electabi } from "../deployElection";
const web3 = new Web3(Web3.givenProvider)
const contractAddress = "0xd071b7e64e766c5948EE3b7947865ac63c669276"; 
const ElectionContract = new web3.eth.Contract (ElectionAbi, contractAddress);
const Voting =()=>{
   // const[index,setIndexValue]=useState();
    const[candidatelist,setCandidatelist]=useState([]);
    const [isStarted,setElectionstart]=useState(false);
   useEffect(async()=>{
    const list=await  ElectionContract.methods.getallcandidates().call()
     const check=await ElectionContract.methods.isStarted().call();
     if (check === true){
         setElectionstart(true)
     }
    setCandidatelist(list)
   },[])
   const handleVote=async(props)=>{
     
    console.log(props);
     const  accounts = await web3.eth.getAccounts();
    const   account =accounts[0];
    let index=0;
      const gas = await ElectionContract.methods.vote(props).estimateGas();
      const giveVote = await ElectionContract.methods.vote(props).send({from:account,gas})
 console.log(giveVote)

}
const handleIndex=()=>{

}
   let output
 if(isStarted===true){
      output= <div>
             
     {candidatelist.map((value,index) => (
         <div key={index}>
             
       <p >  {value.name}</p>
       
       <input type="checkbox" name="VoteCheck" required />By clicking on the vote you are responsible for everydamage done by the person in yours country<br/>
       <input type="button"  value="Vote" onClick={()=>handleVote(index)}/>
       </div>
       
     ))}
     </div>
 }
 else {
      output =<div>election not started yet</div>
 }
      
 

    return(
        <>
        <div>
        {output}
        </div>
        </>
    )
}
export default Voting;