import React, { Component } from "react";

class EventBind extends Component {
  // the value of this is undefined in event handler that's why we need to do the binding
  //1. bind the event handler in the constructor method
  //2. Approach three :Bind the event handler in the render method
  //3: Approach two : arrow function in render method
  //4. Approach four: Arrow function as class property

  constructor(props) {
    super(props);
    this.handleClick1 = this.handleClick1.bind(this);
    this.state = {
      message: true,
    };
  }

  handleClick1() {
    console.log(this);
    this.setState({
      message: !this.state.message,
    });
  }
  handleClick2() {
    console.log(this);
    this.setState({
      message: !this.state.message,
    });
  }

  handleClick3 = () => {
    console.log(this);
    this.setState({
      message: !this.state.message,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message + ""}</h1>
        <button onClick={this.handleClick1}>
          Switch (binded in constructor)
        </button>
        <button onClick={this.handleClick1.bind(this)}>
          Switch (binded in render)
        </button>{" "}
        <button onClick={() => this.handleClick2()}>
          Switch (arrow function in render method)
        </button>
        <button onClick={this.handleClick3}>
          Switch (arrow function as handler)
        </button>
      </div>
    );
  }
}

export default EventBind;
