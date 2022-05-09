import React, { useEffect } from "react";
import Web3  from "web3";
import { Electabi } from "../deployElection";
let web3 = new Web3(Web3.givenProvider);
const contractAddress = "0xa14A4Ea3354dFDFFAe6727C466816ca64c8cf5a3"; 
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