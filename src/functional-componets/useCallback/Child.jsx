import React from "react";

const Child = ({ data, text }) => {
  console.log("rerendering A", text);

  return (
    <div>
      <h3>
        {text}:{data}
      </h3>
    </div>
  );
};

export default React.memo(Child);
