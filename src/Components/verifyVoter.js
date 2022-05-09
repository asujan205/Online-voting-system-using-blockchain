import React, { useEffect ,useState} from 'react'
import Webcam from "react-webcam";
import Web3 from "web3";
import { ElectionAbi } from "../Election";
import { Electabi } from "../deployElection";
const web3 = new Web3(Web3.givenProvider)
const contractAddress = "0xa14A4Ea3354dFDFFAe6727C466816ca64c8cf5a3"; 
const ElectionContract = new web3.eth.Contract (ElectionAbi, contractAddress);
const Verify=()=>{
    const [voterDetails,setVoterDetails]=useState([])
    useEffect(async()=>{
        const accounts = await web3.eth.getAccounts();
     const   account= accounts[0]
     console.log(account)
       let voter= await ElectionContract.methods.getvoter(account).call()
        console.log(voter.newuser)
    // setVoterDetails[voter]
    },[])
    //console.log(voterDetails.newUser)
  
    return (
        <div>
               {/* <Webcam
              audio={false}
           
              screenshotFormat="image/jpeg"
              height={350}
              width={400}
            /> */}
        </div>
    )
}
export default Verify