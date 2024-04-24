import React, { useEffect, useState } from "react";

const WindowWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const setwidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", setwidth);

    return () => {
      window.removeEventListener("resize", setWidth);
    };
  }, []);

  return (
    <div>
      <h1>window Resize</h1>
      <h3>width:{width}</h3>
    </div>
  );
};

export default WindowWidth;
