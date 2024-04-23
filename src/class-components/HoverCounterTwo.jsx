import React, { Component } from "react";

export default class HoverCounterTwo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrementCount = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hover count:{count}</h1>
        <button onClick={this.handleIncrementCount}>Increment</button>
        <hr />
      </div>
    );
  }
}
