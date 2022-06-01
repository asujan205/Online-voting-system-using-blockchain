import React, {useEffect, useState} from "react";
import Web3 from "web3";
import balen from './balen.jpg'
import './voting.css'
import { ElectionAbi } from "../Election";
import { Electabi } from "../deployElection";
const web3 = new Web3(Web3.givenProvider)
const contractAddress = "0xc33e33D09b540e00D4B4126e92314eeBD676FE38"; 
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
    console.log(account)
      const gas = await ElectionContract.methods.vote(props).estimateGas();
      const giveVote = await ElectionContract.methods.vote(props).send({from:account,gas})
    //   const getvoter= await ElectionContract.methods.getvoter(account).call()
    //   console.log(getvoter)
 console.log(giveVote)

}
const handleIndex=()=>{

}
   let output
 if(isStarted===true){
      output= <div>
             <div className="container1">
       <p>VOTING IS LIVE</p>
       <div className="flex-container">
   
     {candidatelist.map((value,index) => (
       <>
       
   

   
       <div>
           <div>
               <img src={balen}/>
           </div>
           <div>
               <h2>{value.name}</h2>
           </div>
           <div>
               <button className="vote-button" onClick={()=>handleVote(index)}>Click here to vote</button>
           </div>
       

      </div>
      
     
     </>
     ))}
     </div>
</div>
     </div>
 }
 else {
      output =<div className="Notstarted">election not started yet</div>
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