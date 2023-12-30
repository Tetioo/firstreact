import { useState } from "react"

export default function Todo(){
    const [todo, setTodo] = useState("") //set what is being input to todo
    const handleChange=(event) => {
        setTodo(event.target.value)
    }
    return <div> 
        <form>
            <input value={todo} onChange={handleChange} type="text"></input>
            <button type="submit"> Add </button>
        </form>
    </div>
}