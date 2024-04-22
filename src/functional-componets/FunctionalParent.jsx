import React, { useEffect, useState } from "react";
import MemoComp from "./MemoComp";

const FunctionalParent = () => {
  const [name, setName] = useState({
    name: "shivam",
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("object");
      setName({
        name: "shivam",
      });
    }, 2000);
    return () => clearInterval(intervalId);
  }, []);

  console.log("re rendering Parent");
  return (
    <div>
      Functional Parent
      <MemoComp name={name.name} />
    </div>
  );
};

export default FunctionalParent;
