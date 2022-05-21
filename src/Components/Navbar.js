import { useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function Navbar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
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
                <a href='rolldice'>Play</a>
                <a href='#'>Statistics</a>
                <a href='register'>Register</a>
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