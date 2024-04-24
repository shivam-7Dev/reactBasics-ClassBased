import React, { useReducer } from "react";
const initalState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  address: "",
};

const reducer = (state, action) => {
  const { type, value, name } = action;
  console.log(type, value);
  switch (action.type) {
    case "setField":
      return {
        ...state,
        [name]: value,
      };
    // case "lastName":
    //   return {
    //     ...state,
    //     [type]: value,
    //   };
    // case "email":
    //   return {
    //     ...state,
    //     [type]: value,
    //   };
    // case "phone":
    //   return {
    //     ...state,
    //     [type]: value,
    //   };
    // case "address":
    //   return {
    //     ...state,
    //     [type]: value,
    //   };

    case "reset":
      return initalState;

    default:
      return state;
  }
};

const Form = () => {
  const [user, dispatch] = useReducer(reducer, initalState);
  const { firstName, lastName, email, phone, address } = user;

  const handleSubmit = (e) => {
    console.log("function called", user);
    e.preventDefault();
    dispatch({
      type: "reset",
    });
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: "setField",
      value: value,
      name,
    });
  };

  return (
    <div>
      <h2>Managing the Form using the useReducer</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName"> First Name:</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={lastName}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="number"
            name="phone"
            id="phone"
            value={phone}
            onChange={handleInput}
          />
        </div>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={handleInput}
          />
        </div>
        <button type="submit">submit form</button>
      </form>
    </div>
  );
};

export default Form;
