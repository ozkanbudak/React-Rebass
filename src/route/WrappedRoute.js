import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UnauthenticatedRoute from "./Guards/UnauthenticatedRoute";
import Profile from "./Profile"
import Home from "../views/home"

const WrappedRoutes = ({ appProps }) => {
  return (
    <Switch>
      <UnauthenticatedRoute path="/profile" component={Profile} appProps={appProps} />

      <Route path="/" exact component={Home} />


      <Route
        path="*"
        component={() => <Redirect to="/404" />}
        appProps={appProps}
      />
    </Switch>
  );
};

export default WrappedRoutes;
