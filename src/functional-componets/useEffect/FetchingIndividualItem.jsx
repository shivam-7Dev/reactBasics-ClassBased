import React, { Children, useEffect, useState } from "react";

const FetchingIndividualItem = () => {
  const [items, setitems] = useState({
    loading: true,
    data: {},
    error: false,
  });
  const [id, setId] = useState(1);
  //create a state variable that will be changed on click of button
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    //Fetching data on click of button
    const fetchData = async function (id) {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/todos/${id}`
        );
        const data = await response.json();
        console.log(data);
        setitems({
          loading: false,
          data: data,
          error: false,
        });
      } catch (error) {
        console.log(error);
        setitems({
          loading: false,
          data: {},
          error: true,
        });
      }
    };
    fetchData(id);

    return () => {
      console.log("return");
    };
  }, [idFromButtonClick]);

  const fetchData = async function (id) {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`
      );
      const data = await response.json();
      console.log(data);
      setitems({
        loading: false,
        data: data,
        error: false,
      });
    } catch (error) {
      console.log(error);
      setitems({
        loading: false,
        data: {},
        error: true,
      });
    }
  };

  return (
    <div>
      <h1>Fetching the data using useEffect</h1>
      <div>
        Enter the id:
        <input
          type="number"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        {/* <button onClick={() => fetchData(id)}>Fetch Data</button> */}
        <button onClick={() => setIdFromButtonClick(id)}>Fetch Data</button>
      </div>
      {items.loading && <h1>Loading .....</h1>}
      {items.error && <h1>something went wrong</h1>}
      {items.data && <h1>{items.data.title}</h1>}
    </div>
  );
};

export default FetchingIndividualItem;
