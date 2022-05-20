
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import React from 'react';
import Game from './Components/Game';
import RollDice from './Components/RollDice';

function App() {
  return (
    <React.Fragment>
      
      <Navbar/>
      <div className='container-principle'>
      <RollDice/>
      </div>
    </React.Fragment>
  );
}

export default App;
