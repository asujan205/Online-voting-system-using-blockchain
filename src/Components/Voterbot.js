import React from 'react'
import './Votingbot.css'
import info from './information-sign-svgrepo-com.svg'
import reg from './register.svg'
import vote from './voting.svg'
import res from './result.svg'
import VoterCreate from './registervoter'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Startstop from './startstopelection'
import Voting from './voting'
import Winner from './winner'
import Verify from './verifyVoter'
import Info from './Information'
const VoterBot = () => {
    return (
        <Router>
            <div className='main'>

                <div className="dargs">


                    <Link to='/' style={{ textDecoration: 'none' }} >
                        
                            <button className="dash-button">

                                <img className="svg" src={info} />
                                Information

                            </button>

                        
                    </Link>
                    <Link to='/registervoter' style={{ textDecoration: 'none' }}>
                        <div className="voterreg">
                            <button className="dash-button" >

                                <img className="svg" src={reg} />

                                Voter Registeration

                            </button>

                        </div>
                    </Link>
                    <Link to="/voting" style={{ textDecoration: 'none' }}>
                        <div className="voterarea">
                            <button className="dash-button">

                                <img className="svg" src={vote} />

                                Voting Area
                            </button>

                        </div>
                    </Link>
                    <Link to='/winner' style={{ textDecoration: 'none' }}>

                        <button className="dash-button">

                            <img className="svg" src={res} />

                            Result

                        </button>


                    </Link>



                </div>
                <div className='Container'>
                    <Routes>
                        <Route path="/" element={<Info />} exact />


                        <Route path="/registervoter" exact element={<VoterCreate />} />

                        <Route path="/voting" exact element={<Voting/>} />

                        <Route path='/winner' exact element={<Winner />} />

                    </Routes>
                </div>
            </div>


        </Router>
    )
}
export default VoterBot