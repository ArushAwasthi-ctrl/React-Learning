import "./App.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authservice from "./appWrite/auth";
import { Login, Logout } from "./features/authSlice";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Header, Footer } from "./components";

function App() {
  const [Loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { status } = useSelector((state) => state.auth);

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

  useEffect(() => {
    if (!Loading && !status) {
      const openRoutes = ["/login", "/signup"];
      if (!openRoutes.includes(location.pathname)) {
        navigate("/login", { replace: true });
      }
    }
  }, [Loading, status, location.pathname, navigate]);

  if (Loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="h-6 w-6 border-2 border-slate-300 border-t-slate-700 rounded-full animate-spin mr-3" />
        <h2 className="text-xl font-semibold">Checking session...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <Header />
      <main className="flex-1 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
