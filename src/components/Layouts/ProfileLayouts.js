import React from "react";

const ProfileLayout = ({ children }) => {
  return (
    <>
      <div class="profile-left-menu">Dynamic Profile lEFT mENU</div>
      <div class="profile-layout">{children}</div>
    </>
  );
};

export default ProfileLayout;
