
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import RollDice from './Components/RollDice';

import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; // for navigate


function App() {
  return (
    <Router>
      <React.Fragment> 
        <Navbar/>
        <main className='container-principle'> {/*  Change */}
          <Routes>
            <Route path='/' element={<Home/>}></Route>

            <Route path='register' element={<Register/>}></Route>
            <Route path='login' element={<Login/>}></Route>

            <Route path='rolldice' element={<RollDice/>}></Route>
          </Routes>
        </main>
      </React.Fragment>
    </Router>
  );
}

export default App;
