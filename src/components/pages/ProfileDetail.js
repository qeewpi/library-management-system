import React from 'react';

function ProfileDetail() {
  return (
    <div className="text-xl bg-white font-semibold p-6 rounded-xl">
      
      <div className="flex items-start mb-4">
        <span className="text-primaryblack mr-4">Username</span>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 flex-grow"
        />
      </div>

      
      <div className="flex items-start mb-4">
        <span className="text-primaryblack mr-4">Email Address</span>
        <input
          type="text"
          className="border border-gray-300 rounded-md p-2 flex-grow"
        />
      </div>

      
      <div className="flex items-start mb-4">
        <span className="text-primaryblack mr-4">Update Password</span>
        <input
          type="password"
          className="border border-gray-300 rounded-md p-2 flex-grow"
        />
      </div>

      
      <div className="flex items-start">
        <span className="text-primaryblack mr-4">Your Bio</span>
        <textarea
          className="border border-gray-300 rounded-md p-2 flex-grow"
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
