import React, { useEffect, useState } from "react";

const HookMouse = () => {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);

  useEffect(() => {
    function setCordinate(e) {
      setXPos(e.x);
      setYPos(e.y);
    }

    //set the even listner once
    window.addEventListener("mousemove", setCordinate);
    return () => {
      //clean the event listner once
      window.removeEventListener("mousemove", setCordinate);
    };
  }, []);

  return (
    <div>
      <h1>Tracking the mouse Position</h1>
      <h3>x position :{xPos}</h3>
      <h3>y position :{yPos}</h3>
    </div>
  );
};

export default HookMouse;

/**
 * * The cleanup function inside the useEffect hook will run only once when the component mounts, and it won't run again on re-renders if dependency array [] is empty.
 * Since there are no dependencies in the dependency array, the effect doesn't rely on any state or props changes, so it won't be re-executed on re-renders. Therefore, the cleanup function won't run again on re-renders.
 * The useEffect hook takes a second argument, an array of dependencies. This array tells React when to re-run the effect (the code inside the useEffect function).
 * An empty dependency array tells React that this effect should only run once, after the initial render.
 * Since the effect runs only once (during the initial render), there's no need to clean up before subsequent re-renders.
 */
