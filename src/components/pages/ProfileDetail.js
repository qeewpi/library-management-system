import React from 'react';

function ProfileDetail() {
  return (
    <div className="text-base bg-white font-semibold p-6 rounded-xl">
      
      <div className="p-4 flex items-start mb-4 border-b-4 space-x-48">
        <span className="text-primaryblack mr-4 text-base">Username</span>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 flex-grow-2 text-base"
          placeholder="Username"
        />
      </div>

      <div className="p-4 flex items-start mb-4 border-b-4 space-x-48">
        <span className="text-primaryblack mr-4 text-base">Email Address</span>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 flex-grow-2 text-base"
          placeholder="Email address"
        />
      </div>

      <div className="p-4 flex items-start mb-4 space-x-48">
        <span className="text-primaryblack mr-4 text-base">Update Password</span>
        <input
          type="password"
          className="border border-gray-300 rounded-md p-2 flex-grow-2 text-base"
          placeholder="Enter your current password"
        />
      </div>

      <div className="p-4 flex items-start mb-4 border-b-4 space-x-48">
        <input
            type="password"
            className="border border-gray-300 rounded-md p-2 flex-grow-2 text-base"
            placeholder="Enter your new password"
          />
      </div>

      <div className="p-4 flex items-start border-b-4 space-x-48">
        <span className="text-primaryblack mr-4 text-base">Your Bio</span>
        <textarea
          className="border border-gray-300 rounded-md p-2 text-base"
          placeholder="Enter your bio here."
        />
      </div>

      <button
        type="submit"
        className="btn mt-8 w-40 py-4 rounded-xl bg-secondaryBlue text-white hover:bg-secondaryBlue"
      >
        Update
      </button>
    </div>
  );
}

export default ProfileDetail;
