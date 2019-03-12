
import React, { Component } from 'react';
import List from "./List";
import TobuyForm from "./TobuyForm";
import './App.css';

class App extends Component {
  state = {
    tobuys: [
      { id: 1, name: "Eggs", complete: true, },
      { id: 2, name: "Milk", complete: false, },
      { id: 3, name: "Bananas", complete: false, },
      { id: 4, name: "Apples", complete: false, }
    ]
  };


  getId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  addItem = (name) => {
    const todo = { id: this.getId(), name, complete: false, };
    this.setState({ tobuys: [tobuy, ...this.state.tobuys] });
  }

  handleClick = (id) => {
    this.setState({
      todos: this.state.tobuys.map( tobuy => {
        if (tobuy.id === id) {
          return { ...tobuy, complete: !tobuy.complete, }
        }
        return tobuy;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <TobuyForm addItemFunction={this.addItem} />
        <List name="Tobuy List" items={this.state.tobuys} handleClick={this.handleClick} />
      </div>
    );
  }
}





export default App;
