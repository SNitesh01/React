import React, { Component } from 'react'

export default class Countr extends Component {

  constructor(props) {
      super(props);
      console.log("initialized");
    }
    
    state={
        counter : this.props.initialValue,
        color: this.props.color,
    } 
    
    increment = () => { 
        this.setState({ counter: this.state.counter +1})
    }
    decrement = () => { 
      this.setState({ counter: this.state.counter -1})
  }

  componentWillMount() {
    console.log("Component is about to mount");
  }

  componentDidMount() {
    console.log("Componet has mounted");
  }

  componentWillUpdate() {
    console.log("Component is about to update");
  }

  componentDidUpdate() {
    console.log("Component has updated");
  }
  render() {

    return (
      <div >
        <div style={{ backgroundColor: this.state.color }}>
        <button onClick={this.increment}>+</button>
        {this.state.counter}

        <button onClick={this.decrement}>-</button>

        <button onClick={()=> handleDelete(id)}>Delete button</button>
        </div>
      </div>
    ) 
  }
}
