import React from "react";

class JsxComponent extends React.Component {
  /**
     <div>
        <h1>Hello world </h1>
        <h2>Hello world </h2>
     </div>
    */

  element = React.createElement("div", {}, [
    React.createElement("h1", {}, "hello from h1"),
    React.createElement("h2", {}, "hello from h2"),
  ]);

  render() {
    return this.element;
    // return React.createElement(
    //   "div",
    //   null,
    //   React.createElement("h1", null, "Hello from React.createElement method")
    // );
  }
}

export default JsxComponent;

/**
 * React.createElement() is a method provided by the React library that creates and returns a new React element.
 * It takes in three parameters:
 * @param {string | React.ComponentType} type - The type of the element to create.
 *  It can be a string representing an HTML tag name (e.g., "div", "h1", etc.) or a React component.
 * @param {object | null} [props=null] - The properties (or "props") to assign to the element.
 *  This can include attributes, event handlers, and other data.
 * @param {...React.ReactNode} [children] - The child elements or content to include within the element.
 * These can be other React elements, strings, or numbers.
 * @returns {React.Element} The newly created React element.
 */
