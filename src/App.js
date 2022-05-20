
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import React from 'react';
import Game from './Components/Game';

function App() {
  return (
    <React.Fragment>
      
      <Navbar/>
      <div className='container-principle'>
      <Game/>
      </div>
    </React.Fragment>
  );
}

export default App;
