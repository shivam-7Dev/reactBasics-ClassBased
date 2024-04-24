import React, { createContext, useEffect, useReducer } from "react";
import Hookcounter from "./useState/Hookcounter";
import ObjectDemo from "./useState/ObjectDemo";
import ListStateDemo from "./useState/ListStateDemo";
import HookCounterOne from "./useEffect/HookCounterOne";
import HookMouse from "./useEffect/HookMouse";
import AutomaticCounter from "./useEffect/AutomaticCounter";
import WindowWidth from "./useEffect/WindowWidth";
import DataFetching from "./useEffect/DataFetching";
import FetchingIndividualItem from "./useEffect/FetchingIndividualItem";
import ContextConsumer from "./useContext/ContextConsumer";
import UseReducerCounter from "./useReducer/UseReducerCounter";
import Form from "./useReducer/Form";
import ConsumerTwo from "./ConsumerTwo";

const userContext = React.createContext();
const idContext = React.createContext();

const globalValue = React.createContext();
const intialData = {
  loading: true,
  data: {},
  error: "",
};
const reducer = (state, action) => {
  const { value } = action;
  switch (action.type) {
    case "setData":
      return {
        ...state,
        data: value,
        error: false,
        loading: false,
      };
    case "setError":
      return state;
    default:
      return intialData;
  }
};

const HookDemo = () => {
  const [data, dispatch] = useReducer(reducer, intialData);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: "setData",
          value: json,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <globalValue.Provider value={{ data, dispatch }}>
      <div>
        <h1>This is parent of hook component</h1>
        <hr />
        <hr />
        {/* <Hookcounter /> */}
        {/* <ObjectDemo /> */}
        {/* <ListStateDemo /> */}
        {/* <HookCounterOne /> */}
        {/* <HookMouse /> */}
        {/* <AutomaticCounter /> */}
        {/* <WindowWidth /> */}
        {/* <DataFetching /> */}
        {/* <FetchingIndividualItem  /> */}
        {/* <userContext.Provider value="shivam">
        <idContext.Provider value="007">
          <ContextConsumer />
        </idContext.Provider>
      </userContext.Provider> */}
        {/* <UseReducerCounter /> */}
        {/* <Form /> */}
        <ConsumerTwo />
      </div>
    </globalValue.Provider>
  );
};

export { userContext, idContext, globalValue };
export default HookDemo;

/**
 * Hooks are a new feature addition in REact version 16.8 which allow you to use React features without
    having to write a class. Eg. state
 * Hooks do not work inside classes 
 * Why Hooks?
    1. hard to understand the this keyword in Javascript
    2. You have to remember to bind event hadlers in class components
    3.classes dont minify very well and make hot reloading very unrealiable
    4. There is no particular way to reuse the stategul component logic in class component though
        HOC and render prop pattern do address this problem but code is harder to reason with
    5. Hooks help use to resuse the stateful logic without rewriting the component hirerachy
    6. create componet for complex scenarios such as data fetching and  subscribing to events
    7. Realated code is not organized in one place but scattered across different life cycle methods
        eg: Data fetching is done in componentDidMount and componentDidUpdate(related code is split b/w 2 methods)
        eg: you setup Event listners in componentDidMount and unsubscrice in ComponentWillUnmount
    8. completed unrelated code end up in the same code block 
    9. Hooks rather forcing split  based on lifecyle methods, hooks let you split one component into smaller
        functions based on what  pieces are related
    10. using hooks you can avoid advance react patterns like HOC and render Props to a great extent
    11.Only call hooks at the top level
    12.Do not call hooks inside loops, conditions, or nested functions
    13.Only call hooks from react fuction and not normal functions
        
 */

/**
 * Topics to be covered
    1.useState
    2.useEffect
    3.useContext
    4.useReducer
    5.useCallback
    6.useMemo
    7.useRef
    8.useImperativeHandle
    9.useLayoutEffect
 */
