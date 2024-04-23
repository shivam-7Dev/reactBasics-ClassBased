import React, { Component } from "react";

export default class ClickCounterTwo extends Component {
  render() {
    const { count, handleIncrementCount } = this.props;

    return (
      <div>
        <h1>Click Count: {count} </h1>
        <button onClick={handleIncrementCount}>Increment</button>
        <hr />
      </div>
    );
  }
}
