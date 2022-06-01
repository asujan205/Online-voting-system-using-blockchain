import React ,{useState,useCallback,useRef}from 'react'
import Webcam from 'react-webcam'
const verify=()=>{
    const webcamRef= useRef(null)
    const[screenshot,setScreenshot]=useState(null)
    const [buffer,setBuffer]=useState(null)
    const[photo,setPhoto]=useState(null)
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
    // async function storeinipfs()
    // {
    //   try{
    //   let results = await ipfs.add(buffer);
    //     let ipfsHash = results[0].hash;
    //     setPhoto(ipfsHash);
     
      
    //   }
    //   catch(err){
    //    console.log(err);
    //   }
    // }
    

    const convertToBuffer = async(reader) => {
        //file is converted to a buffer for upload to IPFS
          const buffer = await Buffer.from(reader.result);
        //set this buffer -using es6 syntax
          setBuffer(buffer);
          console.log(buffer);
      };

    return(
        <div>
                 <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              height={350}
              width={400}
            />
            <button onClick={capture} value="take a pictures"/>
        </div>
    )
}