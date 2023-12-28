function FunctionEvents(){
    const handleClick =() => { //arrow function that defines handle click 
        console.log("Button is clicked")
    }
    return(
        <div> 
            Functional Component
            <button onClick={handleClick}>Click</button> 
        </div> //must pass in function name
    )
}
export default FunctionEvents