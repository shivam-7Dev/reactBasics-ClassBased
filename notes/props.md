# Props in react

1.  In React, "props" is a fundamental concept that stands for "properties." It's a mechanism for passing data from one component to another in a unidirectional flow.
2.  _Props are read-only, meaning that the receiving component cannot modify the props directly; they are immutable._
3.  **Passing Data:** Props allow you to pass data from a parent component to a child component. This is essential for building modular and reusable components in React. You can pass any type of data through props, including strings, numbers, arrays, objects, functions, or even React elements.
    `<ChildComponent name="John" age={30} />`
4.  **Accessing Props**: In the child component, props are accessed as properties of the props object. For example:

```js
const ChildComponent = (props) => {
  return (
    <div>
      {props.name} is {props.age} years old.
    </div>
  );
};
```

5. **Default Props:** You can define default values for props using the defaultProps property. This ensures that if a parent component doesn't provide a certain prop, the child component can still render with a default value

```js
ChildComponent.defaultProps = {
  age: 18,
};
```

6. **Callback Props:** Props can also be functions, allowing parent components to pass down callback functions to child components. This enables child components to communicate with parent components by invoking these callbacks. For example:

```js
const ParentComponent = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return <ChildComponent onClick={handleButtonClick} />;
};

const ChildComponent = ({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>;
};
```

7. **Passing Props Down the Component Tree:** Props can be passed down through multiple levels of component nesting. This enables you to maintain a unidirectional data flow, with data flowing from parent to child components.
