import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UnauthenticatedRoute from "./Guards/UnauthenticatedRoute";
import Profile from "../views/profile";

const ProfileRoute = ({ appProps }) => {
  return (
    <Switch>
      <UnauthenticatedRoute
        exact
        path="/profile/test"
        component={Profile}
        appProps={appProps}
      />
      <Route path="*" component={() => <Redirect to="/404" />} />
    </Switch>
  );
};

export default ProfileRoute;
