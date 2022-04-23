import React, { useContext } from "react";
import { Context as AuthContext } from "context/AuthContext";

const SignIn = () => {
  const { signin } = useContext(AuthContext);

  return <button onClick={signin}>SignIn</button>;
};

export default SignIn;
