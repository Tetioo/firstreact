const name = "Mercy"

const displayMessage = () => {
    return "I need help!"
}
function Hello(){//component
    return <h1>The message is: {displayMessage()}</h1>
}

/*const Hello = ()=><h1>Hello There</h1>*/

export default Hello;