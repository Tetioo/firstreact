import { useState } from "react" //create state
function FunctionalCounter(){
    const [ counter,setCounter ] = useState(0) 
     //useState is a hook that creates state for variable counter
    //ceates function setCounter that is responsible for changing value of coumter

    const increment = () =>{
        setCounter(counter + 1)
    }
    const decrement = () =>{
        setCounter(counter - 1)
    }
   
    return <div>
        <div> Counter value: {counter}</div>
        <div> 
            <button onClick={increment}> Increment</button> 
        </div>
        <div> 
            <button onClick={decrement}> Decrement</button> 
        </div>
    </div>
}
export default FunctionalCounter