import React from "react";
import Hookcounter from "./Hookcounter";
import ObjectDemo from "./ObjectDemo";
import ListStateDemo from "./ListStateDemo";

const HookDemo = () => {
  return (
    <div>
      <h1>This is parent of hook component</h1>
      <hr />
      <hr />
      {/* <Hookcounter /> */}
      {/* <ObjectDemo /> */}
      <ListStateDemo />
    </div>
  );
};

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
