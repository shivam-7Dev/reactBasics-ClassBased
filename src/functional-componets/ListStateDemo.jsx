import React, { useState } from "react";

const ListStateDemo = () => {
  const [items, setitems] = useState([]);
  return (
    <div>
      <h1>list with use State</h1>
      <button
        onClick={() =>
          setitems([
            ...items,
            {
              id: items.length,
              value: Math.floor(Math.random() * 11),
            },
          ])
        }
      >
        Add item to the list
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h4> Value:{item.value}</h4>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListStateDemo;

/**
 * make a new copy of state value i.e array clone in this case
 * Add/remove value to the cloned array
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
