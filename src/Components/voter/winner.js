import React, { useEffect, useState } from 'react'
import Web3 from "web3";
import './results.css'
import Startstop from './startstopelection';
import { ElectionAbi } from "../Election";
import { Electabi } from "../deployElection";
const web3 = new Web3(Web3.givenProvider)
const contractAddress = "0xa14A4Ea3354dFDFFAe6727C466816ca64c8cf5a3"; 
const ElectionContract = new web3.eth.Contract (ElectionAbi, contractAddress);
const Winner=()=>{
    const[isStarted,setStarted]=useState()
    const [isStoped,setStooped]=useState()
    const [winner,setWinner]=useState([])
    useEffect(async()=>{
        
        const  isStarted =  await ElectionContract.methods.isStarted().call();
        if(isStarted===true){
            setStarted(true)
            setStooped(false)
        }
        else{
            setStarted(false)
            setStooped(true)
        }
        
  
        
      },[])
 const getWinner=async()=>{
     const winner = await ElectionContract.methods.winnername().call()
     console.log(winner[0])
     console.log(winner[1])
     setWinner(winner[0])

 }
       let output
      if(isStarted===true){
      output =<div className="result">
               <p>election not ended yet</p>
               </div>
    
 }
    else{
        output = <div className="result">
        <h2>Winner is Sujan Adhakari </h2>
        <h3>Party name UML</h3>
        <h3>Votecount 30</h3>
     </div>

    }
    return(
        <div>
        <input  value="Check winner"type="button" onClick={getWinner}/>
        {output}
        <div className="res">
               <h2>Result</h2>
            </div>
         
        </div>
    )
}
export default Winner;