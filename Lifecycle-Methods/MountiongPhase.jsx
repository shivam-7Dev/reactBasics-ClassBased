import React, { Component } from "react";
import Child from "./Child";

//The methods are called when an instance of a component is being created and inserted into the DOM
/**
 * In React, the mounting phase refers to the initial stage of a component's lifecycle.
 * During this phase, the component is being created and inserted into the DOM (Document Object Model) for the first time.
 * This phase involves several lifecycle methods that allow you to perform actions at specific points in the component's lifecycle.
 * Here are the main lifecycle methods related to the mounting phase in React:
 * 
 * During the mounting phase, React follows this sequence of method calls: constructor -> static getDerivedStateFromProps -> render -> componentDidMount.
 * 
 * constructor() :):This method is called only once when the component is initialized
                     This is the first method called during the mounting phase
                     It's used for initializing state, binding event handlers, and other setup tasks.
                     It's important to note that you should avoid causing side effects or interacting with the DOM in the constructor.

 *static getDerivedStateFromProps(): This method is called right before rendering when new props are received
                                    This method is called before every render when new props are received or when the component's state is updated. 
                                    It allows the component to update its internal state based on changes in props.
                                    It's a static method and should return an object to update the state, or null to indicate that the state doesn't need to be updated.


 *render():This is a required method in every React component
             It returns the JSX (or null) that represents the component's UI. 
            The render method should be pure, meaning it should not modify component state or interact with the DOM directly
            This method is called once during the mounting phase to generate the initial UI of the component. 
           *** right after this method  children components life cycle methods are also executed

 *componentDidMount():This method is invoked immediately after the component and all its children components has been rendered into the DOM.
                    It's commonly used for performing tasks that require interaction with the DOM or external data fetching, such as fetching data from a server using AJAX or setting up event listeners
                    This method is called once after the component has been rendered into the DOM.  It's called only once after the initial rendering.
                *** That's correct! componentDidMount() is called only once, specifically after the initial rendering of the component.
                *** It does not run again during subsequent re-renders triggered by state or prop changes.


 *During the mounting phase, React follows this sequence of method calls: constructor -> static getDerivedStateFromProps -> render -> componentDidMount.


 */
export default class MountiongPhase extends Component {
  constructor(props) {
    console.log("constructor Parent");
    super(props);

    this.state = {
      name: "",
    };
  }

  static getDerivedStateFromProps() {
    //MountiongPhase.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.
    console.log("getDerivedStateFromProps Parent");
    return null;
  }

  render() {
    console.log("render Parent");
    return (
      <div>
        Mounting
        <Child />
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount Parent ");
  }
}
