import React, { useContext, useState } from "react";
import UserContext from "../../context/UserContext";

function Card() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setState } = useContext(UserContext);
  const handleSubmit = (e)=>{
    
      e.preventDefault()
      setState(username)

  }
  return (
    <div className="flex bg-gray-700 h-36 w-auto text-white items-center justify-center">
      <h2>LOGIN KRO BSDK</h2>
      <input type="text"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        placeholder="Username"
      
      />

       <input type="text"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="Password"
      
      />
      <button type="submit"
      
      onSubmit={handleSubmit(e)}
      
      
      
      >Submit</button>

    </div>
  );
}

export default Card;
