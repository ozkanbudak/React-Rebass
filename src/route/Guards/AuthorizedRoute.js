import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function AuthenticatedRoute({ component: C, appProps, permissions, ...rest }) {
  return (
    <Route
      {...rest}
      render={props => {
        if (appProps.isAuthenticated) {
          if (!permissions)
            return <C {...props} appProps={appProps} />;
          return <Redirect to="/403" />;
        }
        return (
          <Redirect
            to={`/sign-in?redirect=${props.location.pathname}${props.location
              .search}`}
          />
        );
      }}
    />
  );
}