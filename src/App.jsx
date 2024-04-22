import { Fragment, useState } from "react";
import Greet from "./class-components/Greet";
import JsxComponent from "./JsxComponent";
import FunctionGreet from "./functional-componets/FunctionGreet";
import Message from "./class-components/Message";
import Counter from "./class-components/Counter";
import FuctionClick from "./functional-componets/FuctionClick";
import ClassClick from "./class-components/ClassClick";
import EventBind from "./class-components/EventBind";
import List from "./class-components/List";
import Form from "./class-components/Form";
import MountiongPhase from "../Lifecycle-Methods/MountiongPhase";
import UpdatingPhase from "../Lifecycle-Methods/UpdatingPhase";
import Frangmeant from "./functional-componets/Frangmeant";

function App() {
  //note=> props are immutable that is you can not change the value of props
  return (
    <>
      {/* <FunctionGreet name="Shivam" heroName="Shady">
        <h5>children prop for functional comaponet</h5>
      </FunctionGreet>
      <Greet name=" class component" heroName="className" />
      <JsxComponent /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FuctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <List /> */}
      {/* <Form /> */}
      {/* <MountiongPhase /> */}
      {/* <UpdatingPhase /> */}
      <Frangmeant />
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
 *
 * To create a class component in React, you can define a JavaScript class that extends the React.Component class.
 *  Class components have their own state
 *  and can define lifecycle methods by overriding the methods provided by the React.Component class.
 *
 * Both functional and class components can receive props (properties) as input,
 * which allow them to customize their behavior and appearance based on the data passed to them.
 */

/**
 * Most Important points to cover

  1. Lists
  2. Form Handling
  3.Life cycle methods 4 phases (Mounting, Updating, Unmounting, Error Handling)
  4.Fragments
  advance React
  5.Pure component
  6.memo
  7.refs
  8.Forwrdings refs
  9.Portals
  10.Error Boundaries
  11. Higher Order Componets
  12.Render Props
  13. Context
  14.Http
  
 */
