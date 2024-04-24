import React, { useState, useCallback } from "react";
import Child from "./Child";
import ChildB from "./ChildB";
import ChildC from "./ChildC";
import Dummy from "./Dummy";

/**
 * By default, callback functions created inside a parent component will be recreated on every render, even if the logic remains the same
 * This creates new references, breaking reference equality checks in optimized child components.

 *Most important point=> it is useful when passing callback to optimized child component
                         that rely on reference equlity to prevent unnecessary renders.  
 * Optimized Child Components:These are components specifically designed to avoid unnecessary re-renders. 
                         Techniques like React.memo or implementing shouldComponentUpdate are often used to achieve this.

 *In essence, useCallback bridges the gap between parent re-renders and optimized child components. 
 */

const UseCallbackDemo = () => {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 100);
  }, [salary]);

  return (
    <div>
      <Child text="age" data={age} />
      <ChildB incrementAge={incrementAge} />
      <Child text="salary" data={salary} />
      <ChildC incrementSalary={incrementSalary} />
      <Dummy />
    </div>
  );
};

export default UseCallbackDemo;

/**
 * Rect.memo() is HOC which prevents functional component from rerendering if its props or state do not change
 * 
 * Note: A new incrementAge and incrementSalary function is created when the parent rerender
     and when dealing with function we deal with reference equality,
     even though the two function old incrementAge and new incrementAge have same behaviour they have diffrent reference it does not mean they are equal to each other
     so the function before the rerender is diffrent after the rerender
     and since the function is prop React.meo will see the prop has changed so it will not stop is from rerender
     _
 * How do we tell rect that there is no need to create a new function for incrementAge or any other function for that matter
     Answer: useCallback()
 
 * useCallback is a hook that will return a memoized version of the callback function that only changes if one of the dependencies has changed
   it is useful when passing callback to optimized child component that rely on reference equlity to prevent unnecessary renders.  

 * other defination: It's particularly useful when passing callbacks to child components to prevent unnecessary re-renders 
                     caused by creating new function instances on each render.

 Note: The empty dependency array [] means that function will never change, effectively making it behave like a static function.
 */

/**
  * NOTE:=> IN React, when a parent component re-renders, its child components will also re-render, even if their props or state remain the same.
       This is because React follows a top-down data flow model, where any change at the higher level in the component tree triggers a re-render of the entire subtree below it.

   *However, React provides optimizations like React.memo for functional components and shouldComponentUpdate for class components
         to prevent unnecessary re-renders of child components when their props or state haven't changed.     

    *So while a child component will still re-render when its parent re-renders,
     using these optimizations can prevent the child component from re-rendering if its props or state remain the same, thereby optimizing performance.


  */

/**
 *useCallback's benefit is more significant when working with optimized child components. However, there can still be some value in using it even with non-optimized children, but to a lesser extent.

    Here's a breakdown of the scenarios:

    Optimized Child Component:
        As discussed earlier, useCallback shines here. It ensures reference equality for the callback prop, allowing the optimized child to potentially avoid unnecessary re-renders based on reference checks.
    
    Non-Optimized Child Component:
        Even though the child itself might re-render on every parent update, useCallback can still offer some benefits:

    Avoiding Unnecessary Callback Re-creation:
         Without useCallback, a new callback function instance is created on every parent re-render.
          If the callback logic itself hasn't changed, this can be wasteful. 
          useCallback prevents this by returning the same reference as long as the dependencies haven't changed.

    Potential Micro-optimizations:
         While the child might re-render entirely, useCallback can still lead to some micro-optimizations within the child. 
         If the child performs any comparisons with the callback function itself, using the same reference can avoid unnecessary checks.

    Overall Impact:
    In a non-optimized child, the impact of useCallback on performance might be subtle compared to an optimized child where it can significantly reduce unnecessary re-renders.

 */
/**
 * If the child component is not optimized, such as not being wrapped in React.memo (for functional components) or not implementing shouldComponentUpdate (for class components),
 * then the benefits of useCallback are somewhat diminished, especially in terms of preventing unnecessary re-renders of the child component due to callback reference changes.
 */
