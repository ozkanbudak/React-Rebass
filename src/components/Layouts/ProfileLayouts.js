import React from "react";

const ProfileLayout = ({ children }) => {
  return (
    <>
      <div className="profile-left-menu">Dynamic Profile lEFT mENU</div>
      <div className="profile-layout">{children}</div>
    </>
  );
};

export default ProfileLayout;
