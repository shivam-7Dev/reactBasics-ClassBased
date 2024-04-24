import React, { useReducer } from "react";
const initailCount = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initailCount;
    default:
      return state;
  }
};
const UseReducerCounter = () => {
  const [count, dispatch] = useReducer(reducer, initailCount);
  return (
    <div>
      <h1>Reducer Counter</h1>
      <h3>Count:{count}</h3>
      <button onClick={() => dispatch("increment")}>Increment </button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default UseReducerCounter;

/**
 * usereducer(reducer,initialState) takes two arguments most of the times
 * Two argument to the useReducer function is reducer function and intial state
 * The useReducer method returns a parir of values [state,dispatch]. dispatch is a  method which is called when you want to update the state value
 * TO the dispatch(action) method you can pass an action of  primitive value like a string/number or  an Object
 * when passing an action of type object, do specify the property  named 'type' and property called value.
 *
 *
 * The reducer function that is passed to the useReducer function also take in two parameter, current state and action.
 * the action is passed through the dispatch call
 * depending on the value of current state and the action the reducer fuction will return the new state
 *
 *
 * useReducer is best suited for managing complex state
 * Predictable State Updates: Since the state transitions are determined by the reducer function, it's easier to predict how your state will change in response to different actions,
 */
