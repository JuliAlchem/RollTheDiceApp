import logo from './logo.svg'; // Change logo
import './App.css';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      
      <Navbar/>
      <div className='container-principle'>
      <Main/>
      </div>
    </React.Fragment>
  );
}

export default App;
