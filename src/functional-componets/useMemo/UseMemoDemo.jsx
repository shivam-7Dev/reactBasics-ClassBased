import React, { useState, useMemo } from "react";

const UseMemoDemo = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  //function to evaluate even or odd i.e doing some calculation on a state or prop
  //Note: here isEven is not a function now. The useMemo hook returns a memoized value of the return value of callback passed to useMemo()
  const isEven = useMemo(() => {
    console.log("ran");
    for (let i = 0; i < 1000000000; i++) {}
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <div>
      <h2>Use Memo Demo</h2>
      <hr />
      <h3>
        count one:
        {counterOne}
      </h3>
      <button onClick={incrementOne}>Increment One</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <h3>
        count Two:
        {counterTwo}
      </h3>
      <button onClick={incrementTwo}>Increment One</button>
    </div>
  );
};

export default UseMemoDemo;

/**
 * Every time state updates the component re renders and when the component rerenders the isEven() is called again
 * the expensive calculation is done again.
 * we can stop this from happening by telling react not to calculate cetain values when unnecessary, especially the one which takes a long time to compute
 * We use the useMemo hook to memoize the expensive computation.
 * The computation will only be re-executed when the dependencies in the dependency array change
 * if dependency array is empty ([]), the computation will only be executed once, during the initial render.
 * useMemo(callback,[]): the first value is a function whose value needs to be cashed
        The second value to useMemo we need to specify the dependencies out function depends on the value of counter one
        so counter one needs to be passed in this particular example.
        If the counterOne changes the react will recompute the values and not return the cashed value
 */
