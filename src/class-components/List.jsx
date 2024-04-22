import React, { Component } from "react";

// Displaying a list of item
// I.e we want to repeat some piece of HTML for a list of item
// What map method does is, go over each element in the array and apply the transformation funtion
// Here the transformation function will be returning jsx for every Element

const Person = function (props) {
  //note=> key props are not accessible in child components
  //   const key = props.key;
  //Warning: Person: `key` is not a prop. Trying to access it will result in `undefined` being returned.
  const { name, age, city } = props.user;
  return (
    <div>
      <h1>{name}</h1>
      <h2>{city}</h2>
      <h3>{age}</h3>
    </div>
  );
};

export default class List extends Component {
  render() {
    const users = [
      { name: "Shivam", age: 25, city: "New York" },
      { name: "Atul", age: 30, city: "London" },
      { name: "John", age: 35, city: "Paris" },
      { name: "John", age: 5, city: "Paris" },
    ];

    //exorting the return logic
    // const nameList = users.map((user) => (
    //   <div>
    //     <h1>{user.name}</h1>
    //     <h2>{user.city}</h2>
    //     <h3>{user.age}</h3>
    //   </div>
    // ));

    const nameList = users.map((user) => (
      <Person key={user.name + user.age} user={user} />
    ));
    return <div>{nameList}</div>;
  }
}

//Index as key should be used when the list is static i.e list will not change over time
//and when list will never be reordered or filtered
