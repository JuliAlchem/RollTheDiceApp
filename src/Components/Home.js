import React from "react";
import "../Styles/home.css";

function Home(){
   
    return (
       <div className="container-main">
            <img
           className="image-rolling-dice"
           src={require("../Images/rollingdice.png")} 
           alt="Rolling Dice Cup"/>
            <div className="container-text">
                <p className="title">Rules</p>
                <p className="text">What's about the rules? That's simple! Get 7 in total and you win! Is it clear now? Good luck then! </p>
            </div>
        </div>
       
    );
}

export default Home;