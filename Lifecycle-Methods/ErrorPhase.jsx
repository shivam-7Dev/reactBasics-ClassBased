import React, { Component } from "react";

/**
 * These methods are executed when there is an error during the rendering,in a lifecycle method, or in the constructor of any child component
 * 
 * static getDerivedStateFromError(error):
    When it runs: This static method is called after an error has been thrown during rendering, in the error handling phase.
        What to do:
            Update state to indicate that an error has occurred, which can trigger a fallback UI to display an error message to users.
    What not to do:
        Avoid performing complex operations or side effects in this method, as it's primarily intended for updating state to handle the error gracefully.

 * componentDidCatch(error, info):
    When it runs: This method is called after an error has been thrown during rendering, in the error handling phase.
        What to do:
            Perform additional error handling, logging, or reporting, such as sending error information to a logging service or displaying a generic error message to the user.
        What not to do:
            Avoid causing additional errors within this method, as it could lead to an infinite loop of error handling.

 *During the error phase, these methods provide hooks for catching and handling errors that occur during rendering, 
    allowing you to gracefully handle errors and prevent them from crashing your entire application.
 */

export default class ErrorPhase extends Component {
  render() {
    return <div>error</div>;
  }
}
