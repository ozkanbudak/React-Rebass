import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import UnauthenticatedRoute from "./Guards/UnauthenticatedRoute";
import WrappedRoute from "./WrappedRoute";


const App = ({children}) =>  {
  return (
    <BrowserRouter>
      <Switch>
          <UnauthenticatedRoute path="/" component={WrappedRoute} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;