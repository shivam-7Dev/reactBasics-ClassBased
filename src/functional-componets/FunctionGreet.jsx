import React from "react";

function FunctionGreet({ name, heroName, children }) {
  return (
    <div>
      <h1>
        Hello, {name} a.k.a {"=>"} {heroName}
      </h1>
      {children}
      <hr />
    </div>
  );
}

export default FunctionGreet;

/**
 * A functional component in React is a JavaScript function that returns JSX (JavaScript XML)
 * to define the structure and content of a component.
 * It is a simpler and more concise way to create components compared to class-based components.
 *
 * Functional components are stateless by default, meaning they do not have their own internal state.
 * They receive data and behavior through props, which are passed as arguments to the function.
 * This makes functional components easier to understand and test.
 *
 * However, with the introduction of React Hooks in React 16.8, functional components can now manage their own state
 * and have lifecycle methods.
 * Hooks are functions that allow you to use React features, such as state and lifecycle methods, in functional components.
 * The most commonly used hook is the useState hook, which allows you to add state to a functional component.
 *
 * Here's an example of a functional component using the useState hook:
 *
 * ```jsx
 * import React, { useState } from 'react';
 *
 * function FunctionGreet() {
 *     const [name, setName] = useState('');
 *
 *     return (
 *         <div>
 *             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
 *             <h1>Hello, {name}!</h1>
 *         </div>
 *     );
 * }
 *
 * export default FunctionGreet;
 * ```
 *
 * In this example, the `FunctionGreet` component uses the useState hook to add state to the component. The state variable `name` and the function `setName` are created using the useState hook. The `name` variable holds the current value of the input field, and the `setName` function is used to update the value of `name` when the input field changes.
 *
 * Functional components can also use other hooks, such as useEffect for handling side effects, useContext for accessing context, and more.
 *
 * With the introduction of hooks, functional components have become more powerful and flexible, allowing developers to write complex logic and manage state in a more concise and readable way.
 *
 * It's important to note that while functional components can now manage state with hooks, they are still a good choice for presentational or UI-focused components that don't require complex logic or lifecycle methods.
 */
