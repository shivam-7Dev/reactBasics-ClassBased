import React, { useState } from "react";

const ObjectDemo = () => {
  const [name, setName] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <div>
      <h1>useState() with object</h1>
      <h3> Name: {JSON.stringify(name)} </h3>
      <div>
        Enert firstName
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
      </div>
      <div>
        Enert firstName
        <input
          type="text"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
      </div>
    </div>
  );
};

export default ObjectDemo;

/**
 * useState do not automatically merge and update the object
 * This is key difference between setstate and setter function provided by useState hook
 * setState will merge the state while useState setter function will not merge the state
 *** make a copy of previous state and override the filed you want to update {...state,someField:newValue}
 */

/**
 * Three steps to make a state using useState hook
 1.import the useState hook
 2. call the useState Hook passing the inital value.
    They return the returs an array with 2 elements
 3. use the return value of useState() call in the jsx
 Note:The very first time the componet reders a state variable is create  and initialized with with the default value
       The default value is never used on rerenders

 4. The useState hook lets you add state in the functional components
 5.In classes the state isalways an object
 6.with the useState hook, the state can be string, number, object or array
 7.The useState hook returs an array with 2 elements
 8. The first value is the current value of the state, 
  and the second element is a state setter function.
 9. when dealing with objects or arrays, always make sure to spread your state variable
    i.e make a copy of the state variable and the call the setter fuction
 */
