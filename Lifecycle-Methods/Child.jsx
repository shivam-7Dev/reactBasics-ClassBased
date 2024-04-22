import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    console.log("constructor Child");
    super(props);
    this.state = {
      name: "",
    };
  }

  static getDerivedStateFromProps() {
    //@react-refresh:267 Warning: `Child` uses `getDerivedStateFromProps` but its initial state is undefined.
    // This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `Child`.
    //s This ensures that `getDerivedStateFromProps` arguments have a consistent shape.
    console.log("getDerivedStateFromProps Child");

    return null;
  }

  componentDidMount() {
    //mounting pase method
    console.log("componentDidMount Child ");
  }

  shouldComponentUpdate(nextProps, nextState) {
    //You can compare the new state and previous state and return true or false to stop rerendering of the component
    console.log("shouldComponentUpdate Child");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate Child");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate Child");
  }

  render() {
    console.log("render Child");
    return <div>child</div>;
  }
}
