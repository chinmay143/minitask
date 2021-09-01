import React, { Component } from "react";
// import Button from "./components/Button";
import "./App.css"

export default class App extends Component {
  constructor(){
    super();
    this.state= {
      count:0
    }
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: parseInt(prevState.count) + 1
    }))
  }

  decrementCount = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  onChangeStartingPoint = e =>{
    this.setState({
      count : parseInt(e.target.value),
    })
  }

 


  render(){
    let { count } = this.state;
    return(
      <div class="container">
  
      <div className="quantity">
        <h2 className="realcount">{ count }</h2>
        
        <button className="quantity__plus" title = "-" onClick ={this.decrementCount} >-</button>
        <input className="quantity__input" onChange={this.onChangeStartingPoint} Value = {this.state.count} ></input>
        <button className="quantity__minus" title = "+" onClick={this.incrementCount}>+</button>
      </div>
      </div>
    )
  }
}
