import  React, { useState } from 'react'
import Web3 from "web3";
import { ElectionAbi } from "../Election";
const web3 = new Web3(Web3.givenProvider)
 const contractAddress = "0xd071b7e64e766c5948EE3b7947865ac63c669276"; 
 const ElectionContract = new web3.eth.Contract (ElectionAbi, contractAddress);
const VoterCreate =()=>{
    const[name,setName]=useState('');
    const [age ,setAge] = useState();
    const[citizNo,setCitizenNo]=useState()
    const[gender,setGender]=useState('');
    const[picUrl,setPicUrl]=useState('');
    const handleSumbit =async()=>{
        console.log(web3)
        const accounts = await web3.eth.getAccounts();
        console.log(accounts)
        const account = accounts[0];
        
        const gas = await ElectionContract.methods.addVoter(picUrl,name,age,citizNo,gender).estimateGas()
        const result = await ElectionContract.methods.addVoter(picUrl,name,age,citizNo,gender).send({from:account,gas});
        console.log("done")
        console.log(result)
    }
    return(
        <div>
            <label>Name:</label><br/>
            <input type="text" name="voterName"                         onChange={e => setName(e.target.value)}
/><br/>
            <label>age:</label><br/>
            <input type="text" name="voterAge"                         onChange={e => setAge(e.target.value)}
/><br/>
            <label >citizNo:</label><br/>
            <input type="text" name="voterCitizen"                        onChange={e => setCitizenNo(e.target.value)}
 /><br/>
            <label>gender</label><br/>
            <input type="text" name="Gender"                        onChange={e => setGender(e.target.value)}
/><br/>
            <label>Photo</label><br/>
            <input type="file" name="PhotoFile "                        onChange={e => setPicUrl(e.target.value)}
/>
            <br/>
            <input type="button" value="createvoter" onClick={handleSumbit}/>



        </div>
    )


}
export default VoterCreate;