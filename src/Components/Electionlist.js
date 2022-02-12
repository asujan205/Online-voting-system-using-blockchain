import React, { useEffect } from "react";
import Web3  from "web3";
import { Electabi } from "../deployElection";
let web3 = new Web3(Web3.givenProvider);
const contractAddress = "0xD4F7944864012dcc522529b6c5d7CBD6989f9d4A"; 
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