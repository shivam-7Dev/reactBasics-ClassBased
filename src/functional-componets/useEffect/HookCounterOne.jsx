import React, { useEffect, useState } from "react";

const HookCounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  //Now on change of this count goal is to update the document tile with count value which is a side effect
  //The count vaule changes so we need to pass it in the dependency array

  useEffect(() => {
    console.log("ran");
    //document.title = count;

    document.title = `You clicked ${count} times`;

    return () => {
      console.log("effect return ran");
    };
  }, [count]);

  return (
    <div>
      <h1>Hook counter One</h1>
      <h3>count:{count}</h3>
      <button onClick={() => setCount((count) => count + 1)}>
        Increment count
      </button>
      <div>
        Enter your Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
    </div>
  );
};

export default HookCounterOne;

/**
 * useEffect is a hook in React that allows you to perform side effects in function components
 * Side effects are operations that affect the outside world, such as fetching data, subscriptions, or manually changing the DOM.
 * useEffect takes two parameters: a function and an optional array of dependencies.
 * The function passed to useEffect is the side effect itself, and it will be executed after the component renders.
 *The optional array of dependencies is used to tell React when to re-run the effect.
 * If any of the values in the dependency array change between renders, the effect will be re-executed.
 * By default, useEffect runs both after the first render and after every update. (componentDidMount+componentDidUpdate)
 * The above behavior mimics componentDidMount and componentDidUpdate lifecycle methods in class components. 
 * you can control when the effect runs by providing a second argument - the dependency array.
 * If you pass an empty dependency array ([]), the effect will only run once after the initial render, similar to componentDidMount.
 * If you pass dependencies, the effect will run after the initial render and after any subsequent render if any of the dependencies have changed.
        If you don't provide dependencies, the effect will run after every render.



        
 * The function returned from useEffect can be used for cleanup operations. 
 * * The cleanup function inside the useEffect hook will run only once when the component mounts, and it won't run again on re-renders if dependency array [] is empty.
 * Since there are no dependencies in the dependency array, the effect doesn't rely on any state or props changes, so it won't be re-executed on re-renders. Therefore, the cleanup function won't run again on re-renders.
 * The useEffect hook takes a second argument, an array of dependencies. This array tells React when to re-run the effect (the code inside the useEffect function).
 * An empty dependency array tells React that this effect should only run once, after the initial render.
 * Since the effect runs only once (during the initial render), there's no need to clean up before subsequent re-renders.
 
 
 NOTE: Default behaviout of useEffect is to run after every render i.e first render and any other rerender(componentDidMount+componentDidUpdate)
        Achieve componentDidMount  ie run side effect only once after fist mount by passing dependenciy array
   ***  conditionally running and effect=>   what to run effect on change of some prop or state? pass the prop or state into the dependency array
 */
