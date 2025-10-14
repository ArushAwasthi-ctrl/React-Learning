import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authservice from "./appWrite/auth";
import { Login, Logout } from "./features/authSlice";

function App() {
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { status, userData } = useSelector((state) => state.auth);
  useEffect(() => {
    authservice
      .GetCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(Login({ userData }));
        } else {
          dispatch(Logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);
  if (Loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-xl font-semibold">Checking session...</h2>
      </div>
    );
  }

  // 2️ If user not logged in
  if (!status || !userData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-3xl font-bold mb-4">Please log in</h1>
        {/* You can render your Login component here */}
      </div>
    );
  }

  // 3️ If user logged in
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome, {userData.name}!</h1>
      {/* Your protected app UI or routes go here */}
    </div>
  );
}

export default App;
