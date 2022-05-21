import React from "react";
import "../Styles/home.css";

function Home(){
   
    return (
       <main className="home">
           <section className="img">
            <img
           className="image-rolling-dice"
           src={require("../Images/rollingdice.png")} 
           alt="Rolling Dice Cup"/>
           </section>

            <section className="text">
                <h2 className="title">Rules</h2>
                <p className="text">What's about the rules? That's simple! Get 7 in total and you win! Is it clear now? Good luck then! </p>
            </section>
            
        </main>
       
    );
}

export default Home;