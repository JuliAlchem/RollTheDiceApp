import React, { Component } from 'react';
import "../Styles/die.css";


class Die extends Component {
  render(){
    return (
      <div className= 'die'>
        <i className={`Die__dice fas fa-dice-${this.props.face} ${this.props.animation && 'shaking'}`} /> 
      </div>
    )

  }
}

export default Die;