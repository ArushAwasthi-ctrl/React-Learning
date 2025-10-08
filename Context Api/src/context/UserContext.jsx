import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";
const UserContextProvider = ({ children }) => {
    const[state , setState] = useState(null);
  return (
    <>
    <UserContext.Provider value={{state , setState}}>

    {children}
    
    </UserContext.Provider>
    </>
  );
};

export default UserContextProvider;
