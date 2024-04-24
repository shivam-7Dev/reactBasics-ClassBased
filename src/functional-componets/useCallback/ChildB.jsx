import React from "react";

const ChildB = ({ incrementAge }) => {
  console.log("rerendering B");
  return (
    <div>
      <button onClick={incrementAge}>Incremnt Age B</button>
    </div>
  );
};

export default React.memo(ChildB);
