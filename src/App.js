import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super() 
    this.state = {
      count: 0
    }
  }
  
  handleClick() {
    this.setState()
    console.log("It works!")
  }

  render() {
  return (
    <div className="counter">
      <h1>{this.state.count}</h1>
      <button onClick={this.handleClick}>CHANGE!</button>
    </div>
  );
}
}

export default App;
