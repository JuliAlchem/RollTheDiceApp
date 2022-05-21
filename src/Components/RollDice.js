import React, { Component} from 'react';
import Die from './Die';
import "../Styles/rolldice.css";



class RollDice extends Component{
  static defaultProps ={
    sides: ['one', 'two', 'three','four', 'five','six']
  };

  constructor(props){
    super(props);
    this.state = {
                  die1:'one', 
                  die2:'two',
                  isRolling: false
                };
    this.roll = this.roll.bind(this);
  }
  

  roll(){
    console.log(this.props.sides.length)

     const newDie1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
     const newDie2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]

     console.log(newDie1, newDie2);
     
    this.setState({die1: "d6", die2: "d6", isRolling: true});
    // settimer
    setTimeout(()=>this.setState({die1: newDie1, die2: newDie2, isRolling: false}), 1000)
  }


  render(){
    return (
      <main className="rolldice">
      <section className="dice">      
          <Die face={this.state.die1} animation = {this.state.isRolling}/>
          <Die face={this.state.die2} animation = {this.state.isRolling}/>
        </section>
      
        <section className="text">
          <p className="result">Lorem Ipsum</p>
          <button className="roll-btn" onClick= {this.roll} disabled={this.state.isRolling}> 
          { this.state.isRolling ? 'Rolling...' : 'Roll Dice !'}
        </button>
        </section>
      </main>
    )
  }
}


export default RollDice;