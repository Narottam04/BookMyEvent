import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();
  // const location = useLocation();

  if (!currentUser) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;
