import React, { useContext } from "react";
import { globalValue } from "./HookDemo";

const ConsumerTwo = () => {
  const { data: parentData, dispatch } = useContext(globalValue);
  const { data, error, loading } = parentData;
  return (
    <div>
      <h1>Consumer two</h1>
      {error && <h2>something went wrong</h2>}
      {loading && <h2>loading...</h2>}
      {data && <h2>{data.title}</h2>}
    </div>
  );
};

export default ConsumerTwo;
