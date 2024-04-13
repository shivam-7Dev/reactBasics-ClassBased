import React from "react";

class Greet extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <h1>Hello from class component</h1>
        <h1>
          Hello this is {this.props.name} aka {this.props.heroName}
        </h1>
      </div>
    );
  }
}
export default Greet;

/**
 * class components are basically ES6 classes
 * A class component can optionly recieve props as an input, manage its private internal state and return some jsx
 * For a class to become a react component there are two simple steps
 * 1. class should extend React.Component
 * 2. it should implement the render method whith should return some jsx of null
 *
 * In this example, the Greet component is a class component that extends React.Component.
 * It has a constructor method that calls the super() method to initialize the parent class.
 * The render method returns a JSX element, which is a div containing an h1 element with the text "Hello from class component".
 * The Greet component is exported as the default export of the module.
 */
