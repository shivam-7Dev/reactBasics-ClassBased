import React, { Component } from "react";

/**
 *Refs in React provide a way to access and interact with DOM elements or React components directly.
 *They allow you to reference a DOM element or a class component instance and perform imperative actions like..
 * focusing an input, accessing its value, or triggering animations
 *
 */

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.cbRef = null;
  }

  /**
   * focusing on the input element as soon as the page loads=> 3 step process
   * step1=> create the ref using React.createRef()
   * step2=> Attach this ref to the input element in the render method using the ref attibute
   * step3=> call the focus method on this input element
   * you can feth the input vaulue using the ref
   */

  componentDidMount() {
    console.log(this.inputRef);
    this.inputRef.current.focus();
  }

  handleClick = () => {
    console.log(this.inputRef.current.value);
    //No need for current
    console.log(this.cbRef.value);
  };

  // Callback function to set the ref
  setRef = (element) => {
    this.cbRef = element;
  };

  render() {
    return (
      <div>
        <h1>Refs Demo</h1>
        <hr />
        <input type="text" ref={this.inputRef} />

        <input type="text" ref={this.setRef} />

        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default RefsDemo;
