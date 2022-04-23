import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Context as AuthContext } from 'context/AuthContext';


export default function UnauthRoute({ children }) {
  const { state } = useContext(AuthContext);
  let location = useLocation();
  
  if(!state.token) return children
  else return <Navigate to="/" state={{ from: location }} replace />;
}
