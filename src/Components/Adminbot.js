import React from 'react'
import './Votingbot.css'
import info from'./information-sign-svgrepo-com.svg'
import reg from './register.svg'
import vote from './voting.svg'
import res from './result.svg'

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Startstop from './startstopelection'
import CandidateForm from './CandidateForm'

import Welcome from './WelcomeAdmin'
const Adminbot=()=>{

    return(  
        <Router>
 <div className='main'>
        
    <div className="dargs">
      
    
        <Link to='/admin'>
        <div className="information" style={{ textDecoration: 'none' }}>
            <button className="dash-button">
            <span className="svgs">
            <img className="svg" src={info}/> 
            Admin
            </span>
            </button>
            
        </div>
        </Link>
        <Link to='/Addcandidate' style={{ textDecoration: 'none' }}>
        <div className="Candidatereg">
            <button className="dash-button" >
                <span className="svgs">
                <img className="svg" src={reg}/>
                
                Candidate Registeration
                </span>
                </button>
            
        </div>
        </Link>
        <Link to="/Startstop" style={{ textDecoration: 'none' }}>
        <div className="startstop">
                <button className="dash-button">
                    <span className="svgs">
                        <img className="svg" src={vote} />
                      
                             Handle election
                             </span></button>
                            
        </div>
        </Link>
        

    </div>
    <div className='Container'>
      <Routes>
     <Route path="/admin"  exact element={<Welcome/>}/>
        
  
        <Route path="/AddCandidate" exact element={<CandidateForm/>}/>
      
        <Route path="/Startstop" exact element={<Startstop/>}/>

      
      
        </Routes>
    </div>
</div>


</Router>
)
}
export default Adminbot