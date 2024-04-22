import React, { Component } from "react";
import PureComp from "./PureComp";
import RegularComponent from "./RegularComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "shivam",
    };
  }

  componentDidMount() {
    setInterval(() => {
      // setting the same  value of state after one second
      this.setState({
        name: "shivam",
      });
    }, 1000);
  }

  render() {
    console.log("parent reRendered");
    return (
      <>
        <div>Parent component</div>
        <PureComp name={this.state.name} />
        <RegularComponent name={this.state.name} />
      </>
    );
  }
}

export default ParentComponent;
