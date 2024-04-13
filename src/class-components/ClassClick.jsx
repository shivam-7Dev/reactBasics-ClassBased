import React, { Component } from "react";

class ClassClick extends Component {
  handleClick1() {
    console.log(this); // this value is undefined here
    console.log("function called");
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick1}> class component click me </button>
      </div>
    );
  }
}

export default ClassClick;
