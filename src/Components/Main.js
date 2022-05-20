import React from "react";
import "../Styles/start.css";

function Main(){
   
    return (
       <div className="container-main">
            <img
           className="image-rolling-dice"
           src={require("../Images/rollingdice.png")} 
           alt="Rolling Dice Cup"/>
            <div className="container-text">
                <p className="title">Lorem Ipsum</p>
                <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Donec consequat ultrices fringilla. Suspendisse ac tincidunt nisl. 
                Phasellus vestibulum neque quis neque porta, vel lacinia eros pellentesque. 
                Vivamus euismod malesuada tortor, ac porta felis laoreet sed. 
                Integer sollicitudin velit non leo convallis vehicula ac a dui.
                 Fusce a venenatis mauris.</p>
            </div>
        </div>
       
    );
}

export default Main;