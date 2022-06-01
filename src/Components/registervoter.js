import  React, { useState,useCallback,useRef } from 'react'
import Web3 from "web3";
import { ElectionAbi } from "../Election";
import Webcam from 'react-webcam';
import './Registration.css'
import img from './register.svg';
import ipfs from './ipfs.js'
const web3 = new Web3(Web3.givenProvider)
 const contractAddress = "0xc33e33D09b540e00D4B4126e92314eeBD676FE38"; 
 const ElectionContract = new web3.eth.Contract (ElectionAbi, contractAddress);
// const VoterCreate =()=>{
//     const[name,setName]=useState('');
//     const [age ,setAge] = useState();
//     const[citizNo,setCitizenNo]=useState('')
//     const[gender,setGender]=useState('');
//     const[picUrl,setPicUrl]=useState('');
//     const handleSumbit =async()=>{
//         console.log(web3)
//         const accounts = await web3.eth.getAccounts();
//         console.log(accounts)
//         const account = accounts[0];
//         console.log(account)
        
//         const gas = await ElectionContract.methods.addVoter(picUrl,name,age,citizNo,gender).estimateGas()
//         try{
//         const result = await ElectionContract.methods.addVoter(picUrl,name,age,citizNo,gender).send({from:account,gas});
//         console.log("done")
//         console.log(result)
//     }
//     catch(err){
//         var errorMessageInJson = JSON.parse(
//             err.message.slice(58, err.message.length - 2)
//           );
  
//           var errorMessageToShow = errorMessageInJson.data.data[Object.keys(errorMessageInJson.data.data)[0]].reason;
  
//           alert(errorMessageToShow);
//           return; 
//     }
    

//     }
async function createUser(imgurl1, imgurl2) {
    const response = await fetch('http://localhost:5000/detect', {
      method: 'POST',
      body: JSON.stringify({ imgurl1, imgurl2 }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();
  console.log(data)
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong!');
    }
  
    return data;
  } 
  
  const VoterCreate=()=>{
  
  
     const webcamRef = React.useRef(null);
     const [screenshot,setScreenshot]=React.useState(null);
     
  
      //Gender
      const [name,setName] = useState('');
      const [age,setAge] = useState('');
      const [citizen_no,setAdharno] = useState('');
      const [buffer,setBuffer] = React.useState(null);
      const [gender, setGender] = React.useState('');
      
      const [photo, setPhoto] = useState('');
    
    
    
  
        const capture =React.useCallback(
         async () => {
         
          const imageSrc = webcamRef.current.getScreenshot();
            
            console.log(imageSrc)
  
  const base64 = await fetch(imageSrc);
    
           const blob = await base64.blob();
           setScreenshot(imageSrc);
           console.log(imageSrc)
            let reader = new window.FileReader()
   reader.readAsArrayBuffer(blob)
   reader.onloadend = () => convertToBuffer(reader)
            console.log(screenshot);
           
          },
          [webcamRef]
        );
        
         async function storeinipfs()
         {
           try{
         
          
            
            let results = await ipfs.add(buffer);
            let ipfsHash = results[0].hash;
             setPhoto(ipfsHash);
            console.log(ipfsHash);
      
           }
          catch(err){
           console.log(err);
         
           }
        }
        
        const convertToBuffer = async(reader) => {
        // //   //file is converted to a buffer for upload to IPFS
             const buffer = await Buffer.from(reader.result);
        // //   //set this buffer -using es6 syntax
          setBuffer(buffer);
           console.log(buffer);
          };
         
     
          
  async function submit()
  {
  try{
   
  
    const jsonParsed = require("./citz.json");
    let authenticated=0;
    for(let i=0;i<9;i++)
    {
        if(jsonParsed[i].citizen_no==citizen_no)
          {
             console.log("citizen_no verified");
              if(jsonParsed[i].age>=18 && jsonParsed[i].age===age)
                {
                   console.log("age verified");
                   const imgurl1=jsonParsed[i].image;
         
                    const imgurl2=`https://ipfs.io/ipfs/${photo}`;
        
                       const result = await createUser(imgurl1,imgurl2);
                        console.log(result);
                      if(result===true)
                          {
                            console.log("face matched");
                              authenticated=1;
                              break;
                            }
                      else
                            {
                              window.alert("Face not matched with data you entered");
          
                               console.log("face not matched");
                               break;
                             }
                 }
              else
                   {
                       window.alert("Your Age is not greater then 18");
          
        
                      break;
                    }
      }
     
    }
    if(authenticated==1)
        {
   
          const accounts = await web3.eth.getAccounts();
 
  
          const gas = await ElectionContract.methods.addVoter(photo,name,age,citizen_no,gender).estimateGas()
        try{
        const result = await ElectionContract.methods.addVoter(photo,name,age,citizen_no,gender).send({from:accounts[0],gas});
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
    else{
      
      window.alert("citizen no is invalid");
    
    }
  }
  catch(err)
  {
  console.log(err);
 
  }
  }
    const videoConstraints = {
        width: 50,
        height: 50,
        facingMode: "user"
      };
    return(
      <div className='main'>
          <div className="voter">
              <img className="image" src={img}/><br/><br/>
              <h3>Voter Registeration</h3>
           
                  <div className="txt_field">
                      <input className="box" type="text" placeholder="Voter Name"  onChange={e => setName(e.target.value)} required/>
                      
                  </div>
                  <div className="txt_field">
                      <input className="box" type="number" placeholder="Age"  onChange={e => setAge(e.target.value)} required/>
                  </div>
                  <div className="txt_field">
                      <input className="box" type="text" placeholder="Address"  onChange={e => setAdharno(e.target.value)}required/>
                  </div>
                  
                  <div className="txt_field">
                      <input className="box" type="text" placeholder="Gender"   onChange={e => setGender(e.target.value)}required/>
                  </div>
                  <input type="submit" value="Submit" onClick={submit}/>
              
          </div>
          <div className="upload">
              <h1>Picture</h1>
              <Webcam
        audio={false}
        height={300}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={300}
        videoConstraints={videoConstraints}/><br/>
              <span className="Picbutton">
                  <button className="buttn" onClick={capture}>Take</button>
                  <button className="buttn" onClick={storeinipfs}>Upload</button>
              </span>
              <img src={screenshot}/>
          </div>
          </div>
          
          
          
    )


}
export default VoterCreate;