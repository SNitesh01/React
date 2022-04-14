import React, { Component } from 'react'

export default class Countr extends Component {
    
    state={
        counter : 0,
        color: "red"
    } 
    
     increment = () => { 
        this.setState({ counter: this.state.counter +1})
    }
    decrement = () => { 
      this.setState({ counter: this.state.counter -1})
  }
  render() {

    return (
      <div >
        <button onClick={this.increment}>+</button>
        {this.state.counter}

        <button onClick={this.decrement}>-</button>

      </div>
    ) 
  }
}
