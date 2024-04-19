import React from "react";
import ProfileDetail from "../../user-components/ProfileDetail";

function Profile() {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="w-full ">
        <ProfileDetail />
      </div>
    </div>
  );
}

export default Profile;
