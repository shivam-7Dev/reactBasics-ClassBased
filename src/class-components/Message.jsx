import React from "react";

class Message extends React.Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }
  handleClick = () => {
    console.log("clicked");
    this.setState({
      message: "thanky for subscribing!",
    });
  };
  render() {
    return (
      <div>
        <h1> {this.state.message}</h1>
        <button onClick={this.handleClick}> subscribe</button>
      </div>
    );
  }
}
export default Message;
