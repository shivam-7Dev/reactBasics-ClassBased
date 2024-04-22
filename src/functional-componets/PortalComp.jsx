import React from "react";
import ReactDOM from "react-dom";
/**
 * React Portal t allows you to render children components into a DOM node that exists outside the parent component's DOM hierarchy.
 * This means you can render components directly into a different part of the DOM, even if they are logically under a different parent in the component tree.
 *React Portals are useful for scenarios like modals, tooltips, or any situation where you need to render content outside the normal flow
     of the DOM but still have it logically part of your React component tree.
* Event bubbling: Even though the portal can be anywhere in the dom tree, it behaves like any other component in react
    this includes the event bubbling. so the event fired from inside the portal will propogate to ancistors in the containing react tree
    even if those elements are not ancistors in dom tree
*/

const PortalComp = () => {
  return ReactDOM.createPortal(
    <div>Portals Demo</div>,
    document.querySelector("#portal")
  );
};

export default PortalComp;
