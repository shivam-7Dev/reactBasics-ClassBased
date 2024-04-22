import React from "react";

const MemoComp = ({ name }) => {
  console.log("re rendering child");

  return <div>React Memo: {name}</div>;
};

export default React.memo(MemoComp);
