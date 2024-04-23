import React from "react";

/**
 * HOC is a pattern where a function takes a component as an argument and return a new component with extended functionality
 *  They are a powerful pattern for code reuse and abstraction in React applications.
 
 * How HOCs Work:
        Accepts a Component: HOCs function take a React component as an argument.
        Adds Extra Functionality: Inside the HOC, additional props or behavior are added to the original component.
        Returns a New Component: Finally, the HOC returns a new component with the added functionality.

 * When Are They Useful:
        Code Reusability: HOCs help in abstracting out common functionalities like data fetching, authentication, or styling and apply them to multiple components.
        Cross-Cutting Concerns: They are useful for handling cross-cutting concerns such as logging, error handling, or performance tracking.
        Composition: HOCs enable composition of multiple behaviors onto a component, allowing for cleaner and more maintainable code.
        Third-party Libraries Integration: HOCs can be used to integrate third-party libraries or frameworks with React components seamlessly.
 
 *Useful Tips:
        Keep Them Pure: Ensure that HOCs are pure functions without any side effects. They should only enhance the component and not change its behavior unexpectedly.
        Pass Through Props: Forward all props to the composed component to maintain compatibility and flexibility.
        Compose HOCs: You can compose multiple HOCs together to create complex behaviors while keeping the individual HOCs simple and focused.
        Use Memoization: Consider memoizing HOCs using techniques like React.memo or memoization libraries to prevent unnecessary re-renders.
        Clear Naming: Name HOCs clearly to reflect the functionality they provide and make the code more readable.

 *Gotchas:
        Props are passed to hoc and not to the wrapped component so you need to manually pass in all the props from hoc to the wrapped component using spread operator
        Prop Clashing: Be cautious about naming conflicts between props added by the HOC and existing props of the wrapped component.
        Component Identity: HOCs create new component instances on each render. This can cause issues with shouldComponentUpdate or useMemo hooks if not handled properly.
        Debugging Complexity: Debugging can become challenging with multiple layers of HOCs. Consider using tools like React DevTools for better insight into component hierarchies.
        Performance Overhead: Excessive use of HOCs can lead to performance issues due to unnecessary component re-renders. Profiling is essential to identify and optimize performance bottlenecks.

*/

const withCounter = (WrappedComponent, incrementNumber) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    handleIncrement = () => {
      this.setState((prev) => ({ count: prev.count + incrementNumber }));
    };
    handleDecrement = () => {
      this.setState((prev) => ({ count: prev.count - 1 }));
    };
    handleReset = () => {
      this.setState({ count: 0 });
    };

    render() {
      return (
        <WrappedComponent
          handleDecrement={this.handleDecrement}
          handleIncrement={this.handleIncrement}
          handleReset={this.handleReset}
          count={this.state.count}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
