import React,{useEffect, useState} from "react";
import Web3 from "web3";
import './startstop.css'
import { ElectionAbi } from "../Election";
import { Electabi } from "../deployElection";
const web3 = new Web3(Web3.givenProvider)
const contractAddress = "0x5221d12e1796CC4eec3418073E4790CFE637b3AE"; 
const ElectionContract = new web3.eth.Contract (ElectionAbi, contractAddress);
const ElectionContract2= new web3.eth.Contract (Electabi, contractAddress);
const Startstop=()=>{
    const[started,setStarted]=useState();
    const[stoped,setStooped]=useState();
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

      
    })
    const handleStart= async()=>{
      const  isStarted =  await ElectionContract.methods.isStarted().call();
      if(isStarted===true)
      {
          console.log ("election is already strated")
          setStarted(true)
          setStooped(false)
      }
      else {
         const accounts = await web3.eth.getAccounts()
          const account =accounts[0]
          const gas =  await ElectionContract.methods.startelection().estimateGas()
          const start= await ElectionContract.methods.startelection().send({from:account,gas})
          setStarted(true)
          setStooped(false)
      }

    }
    const handleStop= async ()=>{

        const  isStopped =  await ElectionContract.methods.isStoped().call();
        if(isStopped===true)
        {
            console.log ("election is already strated")
            setStooped(true)
            setStarted(false)
        }
        else {
           const accounts = await web3.eth.getAccounts()
            const account =accounts[0]
            const gas =  await ElectionContract.methods.stopelection().estimateGas()
            const start= await ElectionContract.methods.stopelection().send({from:account,gas})
            setStooped(true)
            setStarted(false)
        }
  
    } 
    let button ;
    if(started){
      button=  <input type="button" value="stop" onClick={handleStop} className="button-2" role="button"/>
     }
     else{
     button =<input type="button"  value ="start"onClick={handleStart} className="button-1" role="button"/>
     }
    return (
        <div>
            <div className="style1">           <div>
                <h4>Start/Stop the election.</h4>
            </div>
  
           {button}
           </div>
            
        </div>
    )
}
export default Startstop;