import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Protected({ children, authentication = true }) {
  const status = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status && authentication !== status) {
      navigate("/login");
    } else if (!authentication && authentication !== status) {
      navigate("/login");
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

export default Protected;
