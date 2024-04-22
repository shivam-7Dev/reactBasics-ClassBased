import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: "",
      lname: "",
      email: "",
      topic: "",
    };
  }

  handleChange = (event) => {
    const { value, id, name } = event.target;
    console.log(name);
    this.setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    const { fname, lname, email, topic } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="fname">First Name:</label>
          <input
            id="fname"
            name="fname"
            type="text"
            value={fname}
            onChange={this.handleChange}
          />
          <hr />
          <label htmlFor="lname">Last Nmae:</label>
          <input
            id="lname"
            name="lname"
            type="text"
            value={lname}
            onChange={this.handleChange}
          />
          <hr />
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="text"
            value={email}
            onChange={this.handleChange}
          />
          <hr />
          <label htmlFor="email">Topic:</label>
          <select
            name="topic"
            id="topic"
            value={topic}
            onChange={this.handleChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="view">View</option>
          </select>
          <hr />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
