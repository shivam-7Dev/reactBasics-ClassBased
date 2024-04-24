import React, { Children, useEffect, useState } from "react";

const DataFetching = () => {
  const [items, setitems] = useState({
    loading: true,
    data: [],
    error: false,
  });
  useEffect(() => {
    //Fetching data only once
    const fetchData = async function () {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/todos/"
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
          data: [],
          error: true,
        });
      }
    };
    fetchData();

    return () => {
      console.log("return");
    };
  }, []);

  return (
    <div>
      <h1>Fetching the data using useEffect</h1>
      {items.loading && <h1>Loading .....</h1>}
      {items.error && <h1>something went wrong</h1>}
      {items.data &&
        items.data.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
          </div>
        ))}
    </div>
  );
};

export default DataFetching;
