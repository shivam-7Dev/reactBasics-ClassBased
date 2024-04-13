import React, { Component } from "react";

/**
   Always make use of setState and never modify the state directly.

    Code has to be executed after the state has been updated? Place that code in the call back
    function which is the second argument to the setState method.

    When you have to update state based on the previous state value, pass in a function as an
    argument instead of the regular object.
*/

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }
  handleIncrement() {
    this.setState(
      {
        count: this.state.count + 1,
      },
      () => {
        console.log(this.state.count);
        console.log("this function will run only after the setState has run");
      }
    );
    console.log(this.state.count);
  }

  incrementFive() {
    for (let i = 0; i < 5; i++)
      //   this.setState({
      //     count: this.state.count + 1,
      //   });
      this.setState((prev) => ({
        count: prev.count + 1,
      }));
  }

  render() {
    return (
      <div>
        <h1>count:{this.state.count}</h1>
        <button onClick={() => this.handleIncrement()}>increment</button>
        <button onClick={() => this.incrementFive()}>increment 5</button>
      </div>
    );
  }
}

export default Counter;
