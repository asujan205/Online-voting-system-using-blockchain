import React,{useState} from "react";
import Web3 from "web3";
import { ElectionAbi } from "../Election";
import { Electabi } from "../deployElection";
const web3 = new Web3(Web3.givenProvider)
const contractAddress = "0xd071b7e64e766c5948EE3b7947865ac63c669276"; 
const ElectionContract = new web3.eth.Contract (ElectionAbi, contractAddress);
const ElectionContract2= new web3.eth.Contract (Electabi, contractAddress);
const Startstop=()=>{
    const[started,setStarted]=useState(false);
    const[stoped,setStooped]=useState(true);
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
      button=  <input type="button" value="stop" onClick={handleStop}/>
     }
     else{
     button =<input type="button"  value ="start"onClick={handleStart}/>
     }
    return (
        <div>
            
            <label >Click the button below to start the election<br/></label>
           {button}
            
        </div>
    )
}
export default Startstop;