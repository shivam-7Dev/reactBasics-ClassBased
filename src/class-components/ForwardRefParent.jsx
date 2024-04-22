import React, { Component } from "react";
import ForwardRef from "./ForwardRef";

/**
 * Forwar ref had 4 steps
 * step1=> create ref in parent component
 * step2=> Attach the ref to child component using the ref attribute
 * step3 => Forward this ref into  the input element in the child this can be achieved using forwardRef()
 
    const ForwardRef = React.forwardRef((prop,ref) => {
    return <div>
        <input type="text" />
    </div>;
    });

 *when you wrap a component in React.forwardRef() it recieves ref attributes as its second parameter

 *step4 => attach the ref in the input or some other tag
 */

export default class ForwardRefParent extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  clickHandler = () => {
    this.inputRef.current.focus();
  };

  render() {
    return (
      <div>
        Forward Ref Parent
        <hr />
        <ForwardRef ref={this.inputRef} />
        <hr />
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}
