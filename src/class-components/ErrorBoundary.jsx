import React, { Component } from "react";

/**
 * Run time errors during rendering can put our application in broken state
 * React bacially unmount whole react component tree
 * Error boundaries are used to catch the error anywhere in component tree and display a fallback UI
 * Error boundaries: A class component that implements either one or both of the lifecyle methods
    getDerivedStateFromError or componentDidCatch becomes an error boundary.   
 * The static method getDerivedStateFromError is used to render a fallback UI after an error is trown 
    and the componentDidCatch method is used to log the error information.

 *Error boundaies do not catch the error  inside the event handlers, for that one has to use the try catch block
 */

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hadError: false,
    };
  }

  static getDerivedStateFromError(error) {
    //within in the body you will return new state object
    return {
      hadError: true,
    };
  }

  componentDidCatch(error, info) {
    // this method is used to log the error
    console.log(error);
    console.log(info);
  }

  render() {
    if (this.state.hadError) return <h1> somthing went wrong</h1>;

    //this.props.children refers to the componet we are refering
    return this.props.children;
  }
}
