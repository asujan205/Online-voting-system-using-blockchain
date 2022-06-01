import logo from './logo.svg';
import './App.css';

import VoterBot from './Components/Voterbot';
import Adminbot from './Components/Adminbot';
import Verify from './Components/verifyVoter';
const showVoter = () => {
  if (window.location.pathname === "/") {
    return <VoterBot/>
  }
}

const showAdmin = () => {
  if (window.location.pathname === "/admin") {
    return <Adminbot />
  }
}

function App() {
  return (
    <div className="App">
  {showVoter()}
      {showAdmin()} 
      

   </div>
  );
}

export default App;
