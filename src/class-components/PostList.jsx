import React, { Component } from "react";

function DispalyData(data) {
  console.log(data);
  return (
    <div>
      <h1>{data.data.title}</h1>
      <h1>{data.data.completed}</h1>
      <hr />
    </div>
  );
}

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    console.log("comonent mounted");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          list: json,
        })
      );
  }

  render() {
    const { list } = this.state;
    return (
      <div>
        <h1>Rendering list 🚀🆗✔️</h1>
        <hr />
        <hr />
        {list && list.map((data) => <DispalyData data={data} key={data.id} />)}
      </div>
    );
  }
}
