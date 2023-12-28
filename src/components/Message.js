import { Component } from "react";
class Message extends Component{ //inherits from component
    render(){
        // return <h1>This is a class component</h1>
        return <h1>Message: {this.props.messagecontent}</h1>
    }
}

export default Message;
