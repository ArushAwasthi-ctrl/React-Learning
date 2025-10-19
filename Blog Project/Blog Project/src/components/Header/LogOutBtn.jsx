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
        className="inline-block px-4 py-2 rounded-full text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
        onClick={logOutHandler}
      >
        Logout
      </button>
    </div>
  );
}

export default LogOutBtn;
