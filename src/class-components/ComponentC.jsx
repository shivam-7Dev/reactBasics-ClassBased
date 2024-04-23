import React, { Component } from "react";
import { UserConsumer } from "../../userContext";

/**
 * componet hierarchy  App=> ComponentA => Componentb => ComponentC
 * getting data from the App comonent into Componenet C without prop drilling
 * we can use the context ApI for getting the the Shared Context
 * Context provides a way to pass data throung the component tree without having to pass props down manually at every level
 * There are three steps in context
 * step1=> create the context
 * step2=> Provide  a context value. THe place you provide is important because only decendents can consume it
 * step3=> Consume the context in the required componet
 */

export default class ComponentC extends Component {
  render() {
    return (
      <UserConsumer>
        {(value) => {
          return (
            <div>
              <h2>ComponentC ©️ with context Value:{value} 🚀</h2>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
