import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthLayout({ children, authentication = true }) {
  const status = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // If route requires auth and user is not authenticated -> go to login
    if (authentication && !status) {
      navigate("/login");
    }
    // If route must be public and user is authenticated -> go to home
    if (!authentication && status) {
      navigate("/");
    }
    setLoading(false);
  }, [status, navigate, authentication]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h2 className="text-xl font-semibold">Checking session...</h2>
      </div>
    );
  }

  return <>{children}</>;
}

export default AuthLayout;
