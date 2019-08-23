import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super() 
    this.state = {
      count: 0
    }
    this.handleAdd = this.handleAdd.bind(this)
    this.handleSubtract = this.handleSubtract.bind(this)
  }
  
  handleAdd() {
    this.setState((prevState => {
      return {
        count: prevState.count + 1
      }
    })
  )
}

handleSubtract() {
  this.setState((prevState => {
    return {
      count: prevState.count - 1
    }
  })
)
}

  render() {
    return (
      <div className="counter">
        <h3>Click on the button to add or subtract by 1.</h3>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleAdd}>Add me!</button>
        <button onClick={this.handleSubtract}>Subtract me!</button>
      </div>
    )
  }
}

export default App;
