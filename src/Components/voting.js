import React, {useEffect, useState} from "react";
import Web3 from "web3";
import { ElectionAbi } from "../Election";
import { Electabi } from "../deployElection";
const web3 = new Web3(Web3.givenProvider)
const contractAddress = "0xa14A4Ea3354dFDFFAe6727C466816ca64c8cf5a3"; 
const ElectionContract = new web3.eth.Contract (ElectionAbi, contractAddress);
const Voting =()=>{
   // const[index,setIndexValue]=useState();
    const[candidatelist,setCandidatelist]=useState([]);
    const[isvoter,setIsvoter]=useState(false)
    const [isStarted,setElectionstart]=useState(false);
   useEffect(async()=>{
    const accounts = await web3.eth.getAccounts();
   const account =accounts[0]
    const voterdetails= await ElectionContract.methods.getvoter(account).call()
    setIsvoter(voterdetails.newuser)
    //console.log(voterdetails.newuser)
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
   if(isvoter ==true){
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
   }
   else {
     output= <div>
       voter is not register yet
     </div>
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