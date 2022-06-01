import React ,{useState,useCallback,useRef}from 'react'
import Webcam from 'react-webcam'
import './voterverify.css'
import ipfs from './ipfs.js'
import Web3 from "web3";
import { ElectionAbi } from "../Election";
 import {
        BrowserRouter as Router,
        Routes,
        Route,
        Link
    } from "react-router-dom";
import Voting from './voting';
import { render } from '@testing-library/react';
const web3 = new Web3(Web3.givenProvider)
 const contractAddress = "0xc33e33D09b540e00D4B4126e92314eeBD676FE38"; 
 const ElectionContract = new web3.eth.Contract (ElectionAbi, contractAddress);
async function createUser(imgurl1, imgurl2) {
        const response = await fetch('http://localhost:5000/detect', {
          method: 'POST',
          body: JSON.stringify({ imgurl1, imgurl2 }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      
        const data = await response.json();
      
        if (!response.ok) {
          throw new Error(data.message || 'Something went wrong!');
        }
      
        return data;
      } 
const Verify=()=>{
    const webcamRef= useRef(null)
    const[screenshot,setScreenshot]=useState(null)
    const [buffer,setBuffer]=useState(null)
    const[photo,setPhoto]=useState(null)
    const [istrue,setIstrue]=useState(null)
    const[check,setCheck]=useState(null)
    const[isvoted,setVoted]=useState()
    const capture=useCallback(async()=>{
        const imageSrc = webcamRef.current.getScreenshot();const base64 = await fetch(imageSrc);

        const blob = await base64.blob();
        setScreenshot(imageSrc);
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
        //file is converted to a buffer for upload to IPFS
          const buffer = await Buffer.from(reader.result);
        //set this buffer -using es6 syntax
          setBuffer(buffer);
          console.log(buffer);
      };
      async function submit()
{
try{
  
const accounts = await web3.eth.getAccounts();
console.log(accounts[0]);

const voter =await ElectionContract.methods.getvoter(accounts[0]).call();
const isvoted=voter.voted;
setVoted(isvoted)

const imgurl1=`https://ipfs.io/ipfs/${voter.photo}`;
 setCheck(imgurl1)

const imgurl2=`https://ipfs.io/ipfs/${photo}`;


const result = await createUser(imgurl1,imgurl2);
setIstrue(result)
 
// if(result===true)
// {
//         window.alert('Matched  you may process to vote')

// render(<Voting/>)
// }
// else
// {
//         window.alert('abey saley dekh ke number dial kaar')
//   //handleOpen();
// }
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
      switch (istrue) {
        case true:
          if(isvoted===true){
          return <div>already voted</div> 
        }
          else{
            return <Voting/>
          }
          break;
        case false:
          return <div>pretenting to be someone else?</div>;
          break;
        default:

          return (
      
                <div className="contentarea">
                <h2>
                        Voter Verification
                </h2>
                <div className="camera">
                        <div className="video">
                        <Webcam
                  audio={false}
                  height={240}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  width={320}
                  videoConstraints={videoConstraints}/>
                        </div>
                        <button id="startbutton" onClick={capture}>Take photo</button>
                        <img src={screenshot}/>
                        <button id="uploadbutton" onClick={storeinipfs}>upload</button>
                </div>
                <div className="group">
                        <input type="text" required="required" /><span className="highlight"></span><span
                                className="bar"></span>
                        <label>Enter your citizenship number</label>
                </div>
                <div>
                        <button className="Verify" onClick={submit}>Verify</button>
                </div>
          </div>
              ) ;
      }

    
}
export default Verify;