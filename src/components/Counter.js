import { Component } from "react";

class Counter extends Component{ //base class
    constructor(){
        super() //when extended from component, a call has to be made to base class constructor
        this.state = { //set value for state
            counter: 0, 
        }
        this.increment = this.increment.bind(this)//this is accessible to increment
    }
    increment(){ //increment value of counter
        console.log(this)
        this.setState({
            counter: this.state.counter +1,
        }) //access the set state indirectly
    }
    decrement(){ //decrement value of counter
        this.setState({
            counter: this.state.counter -1,
        }) 
    }
    render(){
        return (
        <div> 
             <h3>Count value is: {this.state.counter}</h3>
        {/* <button onClick={() => this.increment()}>Increment</button> 
        <button onClick={() => this.decrement()}>Decrement</button>   */}

<button onClick={this.increment}>Increment</button>  

        </div>
        ) 
       //the div is a parent element bc it only allows one element as the parent element
       //hence could only allow the h3 only 
       //button increments the count
    }
}
export default Counter