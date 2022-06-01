import  React, { useState } from 'react'
import Web3 from "web3";
import { ElectionAbi } from "../Election";
const web3 = new Web3(Web3.givenProvider)
 const contractAddress = "0xa14A4Ea3354dFDFFAe6727C466816ca64c8cf5a3"; 
 const ElectionContract = new web3.eth.Contract (ElectionAbi, contractAddress);
const VoterCreate =()=>{
    const[name,setName]=useState('');
    const [age ,setAge] = useState();
    const[citizNo,setCitizenNo]=useState('')
    const[gender,setGender]=useState('');
    const[picUrl,setPicUrl]=useState('');
    const handleSumbit =async()=>{
        console.log(web3)
        const accounts = await web3.eth.getAccounts();
        console.log(accounts)
        const account = accounts[0];
        console.log(account)
        
        const gas = await ElectionContract.methods.addVoter(picUrl,name,age,citizNo,gender).estimateGas()
        try{
        const result = await ElectionContract.methods.addVoter(picUrl,name,age,citizNo,gender).send({from:account,gas});
        console.log("done")
        console.log(result)
    }
    catch(err){
        var errorMessageInJson = JSON.parse(
            err.message.slice(58, err.message.length - 2)
          );
  
          var errorMessageToShow = errorMessageInJson.data.data[Object.keys(errorMessageInJson.data.data)[0]].reason;
  
          alert(errorMessageToShow);
          return; 
    }

    }
    return(
        <div>
            <label>Name:</label><br/>
            <input type="text" name="voterName"                         onChange={e => setName(e.target.value)} className="InputFeild"
/><br/>
            <label>age:</label><br/>
            <input type="text" name="voterAge"                         onChange={e => setAge(e.target.value)} className="inputfeild"
/><br/>
            <label >citizNo:</label><br/>
            <input type="text" name="voterCitizen"                        onChange={e => setCitizenNo(e.target.value)} className="inputfeild"
 /><br/>
            <label>gender</label><br/>
            <input type="text" name="Gender"                        onChange={e => setGender(e.target.value)} className="inputfeild"
/><br/>
            <label>Photo</label><br/>
            <input type="file" name="PhotoFile "                        onChange={e => setPicUrl(e.target.value)} className="inputfeild"
/>
            <br/>
            <input type="button" value="createvoter" onClick={handleSumbit}  className="sumbitbtn"/>



        </div>
    )


}
export default VoterCreate;