import React from "react";
import useAuth from "../Hooks/useAuth";
import Loader from "../Hooks/Loader";
import { Navigate } from "react-router";
import { useLocation } from "react-router";

const PrivateRoutes = ({children}) => {
  const { user, loading } = useAuth();
   const location =useLocation();
   console.log(location);

  if (loading) {
    return <Loader></Loader>;
  }
  if (!user) {
    return <Navigate state={{from:location.pathname}} to="/login"></Navigate>;
  }
  return  children;
};

export default PrivateRoutes;
