import React from "react";

const ChildC = ({ incrementSalary }) => {
  console.log("rerendering C");

  return (
    <div>
      <button onClick={incrementSalary}> Increment Salary C</button>
    </div>
  );
};

export default React.memo(ChildC);
