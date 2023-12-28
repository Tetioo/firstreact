import { useState } from "react"
export default function ConditionalComponent(){
    const [display, setDisplay] = useState(true)
   return display ? (
         <div>
            <h3>Conditional Component</h3>
        </div>
    ) : (
         <div>
            <h3>Nothing to see here</h3>
        </div>
    )
    //Conditional Rendering using elements
    /*let output   //create element variable to store the JSX 
    if(display){
        output = <h3>Conditional Component</h3>
    }else{
        output = <h3>Nothing to see here</h3>
    }
    return<div> {output} </div>*/

    //Conditional Rendering using ternary conditional
    /*if(display){
        return(
        <div> 
            <h3>Conditional Component</h3>
        </div>
        )
    } else{
        <div> 
             <h3>Nothing to see here</h3>
        </div>
    }*/
    
}