import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import UnauthenticatedRoute from "./Guards/UnauthenticatedRoute";
import Profile from "views/profile";
import ProfileLayout from "components/Layouts/ProfileLayouts";
import AuthenticatedRoute from "./Guards/AuthorizedRoute";

const ProfileRoute = ({ appProps }) => {
  return (
    <ProfileLayout>
      <Switch>
        <UnauthenticatedRoute
          exact
          path="/profile/test"
          component={Profile}
          permissions="test"
        />
        <Route path="*" component={() => <Redirect to="/404" />} />
      </Switch>
    </ProfileLayout>
  );
};

export default ProfileRoute;
