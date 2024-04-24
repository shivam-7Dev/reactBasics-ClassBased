import React from "react";

const Dummy = () => {
  console.log("dummy rerendre");
  return (
    <div>
      <h2>Dummy component</h2>
      <h3>
        this will rerender on on every reder of parent because this is not
        optimized i.e not wrap in React.memo(Dummy)
      </h3>
    </div>
  );
};

export default Dummy;
