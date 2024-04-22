import React, { Component } from "react";
import Child from "./Child";

/**
 * These Methods are executed when a component is being re-rendered as a result of changes to either its props or state
 * There are five methods and three are rarely used (getDerivedStateFromProps,shouldComponentUpdate,getSnapshotBeforeUpdate)
 * During the updating phase, React follows this sequence of method calls:
 *  static getDerivedStateFromProps -> shouldComponentUpdate (if it returns true) -> render -> getSnapshotBeforeUpdate -> componentDidUpdate.
 
 * static getDerivedStateFromProps(nextProps, prevState):
        Runs before every render, both during the initial mounting phase and subsequent updates.
        It runs when new props are received or when the component's state is updated.
        Allows the component to update its internal state based on changes in props.

 * shouldComponentUpdate(nextProps, nextState):
        Runs before rendering when new props or state are received.
        It allows you to control whether the component should re-render or not.
        By default, it returns true, but you can implement custom logic to optimize rendering performance.
        If it returns false, the component will not proceed with the rendering process, stopping at this point.
 * render():
        Runs during the updating phase whenever the component needs to re-render due to changes in props or state.
        Returns the JSX that represents the component's UI.

 *getSnapshotBeforeUpdate(prevProps, prevState):
        Runs right before the changes from the virtual DOM are to be reflected in the actual DOM.
        Allows the component to capture some information from the DOM before it potentially changes.
        The value returned by this method will be passed as a third parameter to componentDidUpdate().

 *componentDidUpdate(prevProps, prevState, snapshot):
        Runs after the component is re-rendered due to changes in props or state.
        Useful for performing side effects after the component has been updated.
        Receives the previous props and state as arguments and also receives the snapshot value returned by getSnapshotBeforeUpdate().
 */
export default class UpdatingPhase extends Component {
  constructor(props) {
    console.log("constructor Parent");
    super(props);

    this.state = {
      name: "",
    };
  }

  static getDerivedStateFromProps() {
    //MountiongPhase.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.
    //called for every rerender of componet
    // should be used when state depends on Props
    console.log("getDerivedStateFromProps Parent");
    return null;
  }

  componentDidMount() {
    //mounting pase method
    console.log("componentDidMount Parent ");
  }

  shouldComponentUpdate(nextProps, nextState) {
    //You can compare the new state and previous state and return true or false to stop rerendering of the component
    console.log("shouldComponentUpdate Parent");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("getSnapshotBeforeUpdate parent");
    return null;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate Parent");
  }
  handleUpdate = () => {
    this.setState({
      name: "shivam",
    });
  };

  render() {
    console.log("render Parent");
    return (
      <div>
        Updating
        <Child />
        <button onClick={this.handleUpdate}>change state</button>
      </div>
    );
  }
}
