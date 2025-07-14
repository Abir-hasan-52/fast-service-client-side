import React from "react";
import useAuth from "../Hooks/useAuth";
import Loader from "../Hooks/Loader";
import { Navigate } from "react-router";

const PrivateRoutes = ({children}) => {
  const { user, loading } = useAuth();
   

  if (loading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return  children;
};

export default PrivateRoutes;
