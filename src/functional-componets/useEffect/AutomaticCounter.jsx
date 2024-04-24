import React, { useEffect, useState } from "react";

const AutomaticCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    //setup the interval once because of empty dependency array
    const interval = setInterval(() => {
      // This form of setCount receives the previous state as an argument,
      // ensuring that the state updates correctly even if the state changes between scheduling and execution of the setInterval callback.
      setCount((count) => count + 1);
    }, 1000);

    return () => {
      //clear the interval once when component will unmount
      // this clean up code will run only once because the dependency array is empty
      console.log("return");
      clearInterval(interval);
    };
  }, []);

  //   useEffect(() => {
  //     const interval = setInterval(() => {
  //       // the count variable captured in the closure of the setInterval
  //       setCount(count + 1);
  //     }, 1000);
  //     return () => {
  //       console.log("return");
  //       clearInterval(interval);
  //     };
  //   }, [count]);

  return (
    <div>
      <h1>Automatic Counter</h1>
      <h3>count:{count}</h3>
    </div>
  );
};

export default AutomaticCounter;
