import React, { useContext } from "react";
import { userContext, idContext } from "../HookDemo";

const ContextConsumer = () => {
  const user = useContext(userContext);
  const id = useContext(idContext);
  return (
    <div>
      <h1>Consuming Context</h1>
      <h3>user:{user}</h3>
      <h3>id:{id}</h3>
    </div>
  );
};

export default ContextConsumer;
