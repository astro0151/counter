import React, {Component} from "react";
import './Counter.css';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement= this.decrement.bind(this);
        this.reset = this.reset.bind(this)
       
    }
    reset(){
        this.setState({
            count: 0
        })
    }
    increment(){
        this.setState(
            state=>(
                {count: state.count+1}
            )
        )
    }
    decrement(){
        this.setState(
            state=>({
                count: state.count-1
            })
        )
    }
    render(){
        return (
            <div className="container">
              <div className="display-count">
                <h1> {this.state.count}</h1>
              </div>  
              <div className="btn">
              <button className="btn-inc" onClick={this.increment}>Increase</button>
                <button className="btn-dec" onClick={this.decrement}>Decrease</button>
                <button className="btn-res" onClick={this.reset}>Reset</button>
              </div>
              
            </div>
        )
    }
}
export default Counter;