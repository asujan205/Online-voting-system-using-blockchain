import logo from './logo.svg';
import './App.css';
import VoterCreate from './Components/registervoter';
import Voting from './Components/voting';
import Startstop from './Components/startstopelection';

function App() {
  return (
    <div className="App">
    <Voting />
    <Startstop/>
   </div>
  );
}

export default App;
