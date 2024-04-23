import React from "react";
/**
 *  There are three steps in context
 * step1=> create the context
 * step2=> Provide  a context value
 * step3=> Consume the context in the required componet
 * Note: You can provide a default value to the the context and this can be done when invoking React.createContext();
 * You dont need to wrap parent in Provider. You just need to conusme it using the Consumer component
 * Defaut value will be used when it does not have a matching provider in component tree
 */

//creating the context object
const userContext = React.createContext("Shady");

/*
 *Every context object created using the createContext() method comes with a provider and consumer react component
 * We need them for step two and step three so we need to export them
 * Provider component is resposible for providing a value to all the decendent children
 */

const UserProvider = userContext.Provider;
const UserConsumer = userContext.Consumer;

export { UserProvider, UserConsumer };
export default userContext;
