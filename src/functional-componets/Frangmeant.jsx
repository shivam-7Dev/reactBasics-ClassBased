import React from "react";

/**
 * Fragments are a way to group multiple elements together without adding extra nodes to the DOM.
 * Fragments can be declared using a shorthand syntax <></> or using the <React.Fragment> syntax. 
 * With the shorthand syntax, you don't need to import React.
 * The <React.Fragment> syntax gives you more flexibility and options, such as providing keys or attributes.

 */

const Columns = () => {
  return (
    <>
      <td>Name</td>
      <td>Shivam</td>
    </>
  );
};

const Frangmeant = () => {
  return (
    <table>
      <thead>
        <tr>
          <td>Field</td>
          <td>Value</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <Columns />
        </tr>
      </tbody>
    </table>
  );

  //   return (
  //     <>
  //       <h1>Hello</h1>
  //       <p>This is a paragraph</p>
  //     </>
  //   );
};

export default Frangmeant;
