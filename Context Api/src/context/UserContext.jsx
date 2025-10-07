import React from "react";
import userContext from "./UserContext";
import { useState } from "react";
const UserContextProvider = ({ children }) => {
    const[state , setState] = useState(null);
  return (
    <>
    <userContext.Provider value={{state , setState}}>

    {children}
    </userContext.Provider>
    </>
  );
};

export default UserContextProvider;
