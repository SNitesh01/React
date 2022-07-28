import React, { Component } from 'react'
import Countr from './countr';

export default class Multicounter extends Component {

  state = {
      counters: [
          {
              id: 1,
              initialValue: 10,
              color: "blue"
          },
          {
            id: 1,
            initialValue: 10,
            color: "red"
        },
        {
            id: 1,
            initialValue: 10,
            color: "green"
        },
      ],
  };

  handleDelete = id =>{
      console.log(id);
      let res = this.state.counters.filter( c => c.id != id);
      console.log(res);
      this.setState({counters: res});
  }


  render() {
    return (
      <div>
          {this.state.counters.map(counter => (
              <Countr
              key={counter.id}
              id = {counter.id}
              initialValue={counter.initialValue}
              color={counter.color}
              ondelete={this.handleDelete}
              
              />
          ))

          }
      </div>
    )
  }
}
