import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import UnauthenticatedRoute from "./Guards/UnauthenticatedRoute";
import WrappedRoute from "./WrappedRoute";


const App = ({children}) =>  {
  return (
    <BrowserRouter>
      <Switch>
          <UnauthenticatedRoute path="/" component={WrappedRoute} />
            <Route path="*" component={() => <Redirect to="/404" />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;