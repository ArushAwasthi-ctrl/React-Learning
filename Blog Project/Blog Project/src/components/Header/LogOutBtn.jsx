import React from "react";
import { useDispatch } from "react-redux";
import authservice from "../../appWrite/auth";
import { Logout } from "../../features/authSlice";

function LogOutBtn() {
  const dispatch = useDispatch();
  const logOutHandler = () => {
    authservice.Logout().then(() => dispatch(Logout()));
  };
  return (
    <div>
      <button
        className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
        onClick={logOutHandler}
      >
        Logout
      </button>
    </div>
  );
}

export default LogOutBtn;
