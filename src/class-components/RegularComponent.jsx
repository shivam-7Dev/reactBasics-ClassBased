import React, { Component } from "react";

/**
 * A regular component does not implement the shouldComponentUpdate method.
 * It always returns true by default
 * A pure component on other hand implements shouldComponentUpdate with a shallow props and state comparison.
 * It is a good idea to ensure that all the xhildren components are also pure to aboid unexpected behaviour
 * Never mutate the state. Always return a new object that reflects the new state.
 */

class RegularComponent extends Component {
  render() {
    console.log("regular reRendered");
    return <div>Regular Component {this.props.name}</div>;
  }
}

export default RegularComponent;
