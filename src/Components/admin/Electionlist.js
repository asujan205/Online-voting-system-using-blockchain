import React, { useEffect } from "react";
import Web3  from "web3";
import { Electabi } from "../deployElection";
let web3 = new Web3(Web3.givenProvider);
const contractAddress = "0xd071b7e64e766c5948EE3b7947865ac63c669276"; 
const ElectionContract = new web3.eth.Contract (Electabi, contractAddress);
const ElectionList = ()=>{
    const[electionLst,setElectionLst]=useState([]);
    useEffect(()=>{
        (async function Fetchpair(){
            const list = await ElectionContract.methods.getelecdetails.call();
            setElectionLst(list)
        })

    },[])

}