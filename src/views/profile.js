import Btn from "components/Button";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TestService from "services/TestServices";

const Profile = () => {
  // const testService = new TestService();
  // const loading = false

  // useEffect(() => {
  //   loading = true;
  //   testService.testService().then((data) => {
  //     console.log("data", data)
  //     loading = false
  //   }).catch((error) => {
  //     loading = false;
  //     console.log("error", error)
  //   });
  // }, []);
  

  return (
    <div>
      <Link to="/">Go to Home</Link>
      <Btn></Btn>
    </div>
  );
};

export default Profile;
