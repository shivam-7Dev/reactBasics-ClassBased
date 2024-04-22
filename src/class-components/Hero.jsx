import React from "react";

function Hero({ heroName }) {
  if (heroName === "Joker") throw "Not a hero";
  return (
    <div>
      <h1>Hero:{heroName}</h1>
    </div>
  );
}

export default Hero;
