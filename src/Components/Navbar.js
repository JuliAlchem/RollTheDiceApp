import React from "react";
import { useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

import {useNavigate} from 'react-router-dom';
import swal from "sweetalert";
import axios from "axios";

function Navbar(){
    const navRef = useRef();
    const navigate = useNavigate();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    const LogoutSubmit = (e) => {
        e.preventDefault();

        axios.post('/api/logout').then(res => {
            if(res.data.status === 200)
            {
                localStorage.removeItem('auth_token');
                localStorage.removeItem('auth_name');
                swal('Success', res.data.message, "success");
                navigate('/');
            }
        });
    }

    var AuthButtons = '';
    if(!localStorage.getItem('auth_token'))
    {
        AuthButtons = (
           
            <a href='login'>Login</a>  
            
        );
    }
    else
    {
        AuthButtons = (
            <React.Fragment> 
            <a href='#'>Statistics</a>
            <a href='rolldice'>Play</a>
            <button type='button' onClick={LogoutSubmit} className="logout">Logout</button>
            </React.Fragment> 
        );
    }

    return (
        <header>
            <div className="logo-name">
            <img className="logo"
            src={require("../Images/rollingdice.png")}
            alt="logo"/>
            <h3>Roll The Dice</h3>
            </div>

            <nav ref={navRef}>
                <a href='/'>Home</a> 
                  
               {AuthButtons}
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
    );
}

export default Navbar;