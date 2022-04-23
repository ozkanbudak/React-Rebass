import React from "react";
import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import Profile from "views/profile";
import AuthorizedRoute from "./Guards/AuthorizedRoute";
import UnauthRoute from "./Guards/UnauthRoute";
import { Provider as AuthProvider } from "context/AuthContext";
import Forbidden from "components/DefaultPages/Forbidden";
import NotFound from "components/DefaultPages/NotFound";
import SignIn from "views/SignIn";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Link to="/profile">Go to Profile</Link>} />
          <Route
            path="/profile"
            element={
              <AuthorizedRoute perm="profilemanagerperm">
                <Profile />
              </AuthorizedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <UnauthRoute>
                <SignIn />
              </UnauthRoute>
            }
          />
          <Route path="/403" element={<Forbidden />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="404" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
