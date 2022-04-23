import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = ({ children }) => {
  const [state, setState] = useState(0);
  useEffect(() => {
    services()
  }, [state]);

  const services = () => {
  }

  return (
    <div>
      {children}
      <Link to="profile/test">Go to Profile</Link>
      <button onClick={() => setState(state + 1)}>cOUNTER</button>
    </div>
  );
};

export default Home;
