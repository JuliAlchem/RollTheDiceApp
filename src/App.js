
import './App.css';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import React from 'react';


function App() {
  return (
    <React.Fragment>
      
      <Navbar/>
      <div className='container-principle'>
      <Register/>
      </div>
    </React.Fragment>
  );
}

export default App;
