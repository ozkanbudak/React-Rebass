import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function UnauthenticatedRoute({ component: C, appProps, ...rest }) {
  const isAuth = false;
  return (
    <Route
      {...rest}
      render={props =>
        !isAuth
          ? <C {...props} {...appProps} />
          : <Redirect to="/" />}
    />
  );
}