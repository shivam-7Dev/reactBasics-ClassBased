import React, { Component } from "react";

/**
 * The term render prop refers to a technique for sharing code between React component
 * using a prop whose vaule is function
 * just check if there is any render props if yes then call it passing the props you want to give
 *
 * This componet will be the container component which will inplement the common functionality
 * and this common functionality will be passed on to the the render props funtion
 * because this functionality is requried in that component
 * NOTE: This component will not render anything of its own. 
        this will render whatever is going to be passed in render props
        and while doing so it passes the common functionality to the render props function
 */

export default class RenderPropsDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  handleIncrementCount = () => {
    this.setState((prev) => ({
      count: prev.count + 1,
    }));
  };
  render() {
    return (
      <div>
        {this.props.render &&
          this.props.render(this.state.count, this.handleIncrementCount)}
        {this.props.children &&
          this.props.children(this.state.count, this.handleIncrementCount)}
      </div>
    );
  }
}
