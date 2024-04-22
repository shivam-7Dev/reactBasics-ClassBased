import React, { Component } from "react";

/**
 * when a component is being removed from the DOM
 * 
 * componentWillUnmount():
        When it runs: This method is called just before the component is removed from the DOM, during the unmounting phase.
        What to do:
         Perform cleanup tasks, such as:
                Removing event listeners attached in componentDidMount().
                Cancelling any timers or intervals created in componentDidMount() or componentDidUpdate().
                Cleaning up subscriptions or any other resources that might cause memory leaks if not properly handled.
                Clearing up any data that might not be necessary after the component is unmounted.
        What not to do:
                Avoid setting state in this method, as the component will not be re-rendered after this point.
                Avoid making any network requests or performing asynchronous operations, as the component will be unmounted and these operations may result in errors or memory leaks.
        
 */

export default class UnMountingPhase extends Component {
  render() {
    return <div>Unmounting</div>;
  }
}
