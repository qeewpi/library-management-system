import React from "react";

function ProfileDetail() {
  return (
    <div>
      <div className="pb-16 border-b-4">
        <h1>Jane Dela Cruz</h1>
        <h1>admin</h1>
      </div>
      <div className="p-4">
        <h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h1>

        <button
          type="submit"
          className="btn mt-8 w-full py-4 rounded-xl bg-primaryBlue text-white hover:bg-secondaryBlue"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileDetail;
