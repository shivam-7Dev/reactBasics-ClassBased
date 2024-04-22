import React, { PureComponent, Component } from "react";

/**
 *  A Pure Component is a class component that extends the React.PureComponent class instead of the regular React.Component class.
 * The main difference between a Pure Component and a regular component lies in how they handle rendering and performance optimizations.
 * Here are the key points about Pure Components:

 *Shallow Prop and State Comparison:
    Pure Components implement a shouldComponentUpdate() method that performs a shallow comparison of the component's props and state.
    React checks if the new props or state are different from the previous ones by comparing their references.
    If props or state are the same, the component is not re-rendered, potentially improving performance by avoiding unnecessary re-renders.

  * Automatic Optimization:
    Pure Components automatically implement the shouldComponentUpdate() method to perform shallow comparisons, 
    saving developers from having to manually optimize components for performance.

  *Usage:
    Pure Components can be used wherever regular components are used.
    They are useful where components rely on props or state changes but don't need to re-render unless those values change.
 */

/**
 * A regular component does not implement the shouldComponentUpdate method.
 * It always returns true by default
 * A pure component on other hand implements shouldComponentUpdate with a shallow props and state comparison.
 * It is a good idea to ensure that all the xhildren components are also pure to aboid unexpected behaviour
 * Never mutate the state. Always return a new object that reflects the new state.
 */

export default class PureComp extends PureComponent {
  render() {
    console.log("Pure reRendered");

    return <div>Pure Comp {this.props.name}</div>;
  }
}
