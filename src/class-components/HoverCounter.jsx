import React, { Component } from "react";
import withCounter from "./WithCounter";

class HoverCounter extends Component {
  render() {
    let { count, handleIncrement, handleDecrement, handleReset, type } =
      this.props;
    return (
      <div>
        <h1>
          {type} Count:{count}
        </h1>
        <button onMouseOver={handleIncrement}>Increment 10</button>
        <button onMouseOver={handleDecrement}>Decrement count</button>
        <button onMouseOver={handleReset}>reset</button>
        <hr />
      </div>
    );
  }
}

// const withCounter = (WrappedComponent) => {
//   class WithCounter extends React.Component {
//     constructor(props) {
//       super(props);

//       this.state = {
//         count: 0,
//       };
//     }

//     handleIncrement = () => {
//       this.setState((prev) => ({ count: prev.count + 1 }));
//     };
//     handleDecrement = () => {
//       this.setState((prev) => ({ count: prev.count - 1 }));
//     };
//     handleReset = () => {
//       this.setState({ count: 0 });
//     };

//     render() {
//       return (
//         <WrappedComponent
//           handleDecrement={this.handleDecrement}
//           handleIncrement={this.handleIncrement}
//           handleReset={this.handleReset}
//           count={this.state.count}
//         />
//       );
//     }
//   }
//   return WithCounter;
// };

export default withCounter(HoverCounter, 10);
