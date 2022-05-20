
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      
      <Navbar/>
      <div className='container-principle'>
      <Home/>
      </div>
    </React.Fragment>
  );
}

export default App;
