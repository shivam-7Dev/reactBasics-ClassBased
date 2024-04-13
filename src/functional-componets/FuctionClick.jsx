import React from "react";

const FuctionClick = () => {
  const handleClick = () => {
    console.log("button clicked");
  };

  //Note:=> the event handler is a function and not a funtion call
  return (
    <div>
      <button onClick={handleClick}>click Me</button>
    </div>
  );
};

export default FuctionClick;
