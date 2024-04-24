import React, { Component } from "react";
import ComponentC from "./ComponentC";
import userContext from "../../userContext";

/**
 * Another way of consuming the context
 * assign the contextType property to the componet in which you want to consume the value
 * and inside that component the context value is available through this.context
 * consuming this way has two limitation
 * 1. it only works with class components
 * 2. you can subscribe to a single context using context type
 *
 */

export default class ComponentB extends Component {
  render() {
    return (
      <div>
        <h2>ComponentB 🅱️</h2>
        <h4>Component B context:{this.context}</h4>
        <ComponentC />
      </div>
    );
  }
}

ComponentB.contextType = { userContext };
