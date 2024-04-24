import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const inputRef = useRef("");
  const timerId = useRef("");
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    inputRef.current.focus();

    const intervalId = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);

    timerId.current = intervalId;

    return () => {
      clearInterval(intervalId);
      console.log("clean up");
    };
  }, []);

  return (
    <div>
      <h2> useRef Demo</h2>
      <input type="text" ref={inputRef} />
      <h3>timer:{timer}</h3>
      <button
        onClick={() => {
          clearInterval(timerId.current);
        }}
      >
        clear Hook timer
      </button>
      <hr />
    </div>
  );
};

export default UseRef;

/**
 * useRef makes it possible to acces the dom nodes directly in the functional componet
 * refs are used for getting the value on node directly
 * or focusing on certain element
 * attach a ref to a element or compont by using the ref attribute
 * although useRef is used to store a reference to dom node but it can store any state value
 * here we are stoing the value of intervalid sp that we can use that id to clear timer on button click
 * what is great about the useRef value is that the value will persist throughout the rerender also not causing any rerender when its value changes
 */
