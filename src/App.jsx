import { useState } from "react";
import Greet from "./class-components/Greet";
import JsxComponent from "./JsxComponent";
import FunctionGreet from "./functional-componets/FunctionGreet";

function App() {
  //note=> props are immutable that is you can not change the value of props
  return (
    <>
      <FunctionGreet name="Shivam" heroName="Shady">
        <h5>children prop for functional comaponet</h5>
      </FunctionGreet>
      <Greet name=" class component" heroName="className" />
      <JsxComponent />
    </>
  );
}

export default App;

/**
 * A React component is a reusable piece of code that defines the structure and behavior of a UI element
 *  in a React application.
 *
 * What makes a component unique in React is its ability to manage its own state and lifecycle methods.
 * Components can have their own internal state, which allows them to store and update data.
 * They also have lifecycle methods that are called at different stages of a component's life,
 * such as when it is mounted, updated, or unmounted.
 *
 * To create a functional component in React, you can define a JavaScript function that returns JSX (JavaScript XML) code.
 * Functional components are simpler and easier to write, as they don't have their own state or lifecycle methods.
 *
 * To create a class component in React, you can define a JavaScript class that extends the React.Component class.
 *  Class components have their own state
 *  and can define lifecycle methods by overriding the methods provided by the React.Component class.
 *
 * Both functional and class components can receive props (properties) as input,
 * which allow them to customize their behavior and appearance based on the data passed to them.
 */
