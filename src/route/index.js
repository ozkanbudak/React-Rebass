import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UnauthenticatedRoute from "./Guards/UnauthenticatedRoute";
import WrappedRoute from "./WrappedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/403" component={() => <div>Test</div>} />
        <UnauthenticatedRoute path="/" component={WrappedRoute} />
        <Route path="*" component={() => <Redirect to="/404" />} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
