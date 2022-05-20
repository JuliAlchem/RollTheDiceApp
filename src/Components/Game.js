import React from "react";
import "../Styles/game.css";

function Game(){
    return (
      <div className="container-main">

      <div className="container-dice">
          <img
           className="image-dice"
           src={require("../Images/dice-1.png")} 
           alt="Dice One"/>
           <img
           className="image-dice"
           src={require("../Images/dice-3.png")} 
           alt="Dice Two"/>
       </div>

        <div className="container-text">
            <p className="result">Lorem Ipsum</p>
            <button className="roll-btn" onclick='roll()'>ROLL THE DICE</button>
        </div>

        </div>
    );
}

export default Game;