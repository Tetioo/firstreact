import { Component } from "react";

class Form extends Component{
    state ={ //set value of state
        firstname: "",
        lastname: "",
    }
    handleChange =( event) => { //define the handleChange
        this.setState({ //set value of first name
            firstname: event.target.value,
        })
        console.log(this.state.firstname )
    }
    handlelastnameChange =( event) => {
        this.setState({
            lastname: event.target.value,
        })
        console.log(this.state.lastname )
    }
    handleSubmit =( event) => { 
        event.preventDefault() //prevents refreshing page when submit is clicked
        console.log(
            {
            fname: this.state.firstname,
            lname: this.state.lastname,
            })
    }
    render(){
        return(<div>Form
            <form onSubmit={this.handleSubmit}> 
                <input onChange={this.handleChange} //handle the change
                 type="text" value={this.state.firstname}></input>
                 <input value={this.state.lastname} 
                 type= "text" onChange={this.handlelastnameChange}></input>
                 <button>Submit</button>
            </form>
        </div>)
    }
}
export default Form

//onChange-call function when the value of HTML element is changec
//onSubmit event handler that triggers when a form is submitted