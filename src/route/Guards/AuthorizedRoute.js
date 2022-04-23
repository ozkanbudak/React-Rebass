import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Context as AuthContext } from 'context/AuthContext';


export default function AuthenticatedRoute({ children, perm }) {
  const { state } = useContext(AuthContext);
  let location = useLocation();
  
  if(state.token) {
    if(perm && perm === "profilemanagerperm") return children;
      return <Navigate to="/403" state={{ from: location }} replace />;
  } else return <Navigate to="/login" state={{ from: location }} replace />;

}
