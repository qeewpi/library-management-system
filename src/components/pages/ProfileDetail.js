import React from "react";

function ProfileDetail() {
  return (
    <div className="text-base bg-white font-semibold p-6 rounded-xl ">
      <div className="p-4 flex mb-4 border-b-2 w-full items-center">
        <div className="flex h-full w-2/12">
          <span className="text-primaryblack mr-4 text-base w-full">
            Username
          </span>
        </div>
        <div className="input-box flex flex-grow items-center text-gray-400">
          <div className="input-box flex w-4/12 items-center text-gray-400 ">
            <div className="flex flex-grow relative items-center">
              <input
                type="text"
                placeholder="Email"
                required
                className="w-full pl-12 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-600 bg-customGrey text-gray-500 focus:text-primaryBlack text-primaryBlack"
              />

              <svg
                width="16"
                height="20"
                viewBox="0 0 16 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-0 h-5 w-5 ml-3 pointer-events-none"
              >
                <path
                  d="M13.7545 12.0002C14.9966 12.0002 16.0034 13.007 16.0034 14.2491V14.8245C16.0034 15.7188 15.6838 16.5836 15.1023 17.263C13.5329 19.0965 11.1457 20.0013 8.0004 20.0013C4.8545 20.0013 2.46849 19.0962 0.902186 17.2619C0.322416 16.583 0.00390625 15.7195 0.00390625 14.8267V14.2491C0.00390625 13.007 1.01076 12.0002 2.25278 12.0002H13.7545ZM13.7545 13.5002H2.25278C1.83919 13.5002 1.50391 13.8355 1.50391 14.2491V14.8267C1.50391 15.3624 1.69502 15.8805 2.04287 16.2878C3.29618 17.7555 5.26206 18.5013 8.0004 18.5013C10.7387 18.5013 12.7063 17.7555 13.9627 16.2876C14.3117 15.8799 14.5034 15.361 14.5034 14.8245V14.2491C14.5034 13.8355 14.1681 13.5002 13.7545 13.5002ZM8.0004 0.00488281C10.7618 0.00488281 13.0004 2.24346 13.0004 5.00488C13.0004 7.76631 10.7618 10.0049 8.0004 10.0049C5.23894 10.0049 3.00036 7.76631 3.00036 5.00488C3.00036 2.24346 5.23894 0.00488281 8.0004 0.00488281ZM8.0004 1.50488C6.0674 1.50488 4.50036 3.07189 4.50036 5.00488C4.50036 6.93788 6.0674 8.5049 8.0004 8.5049C9.9334 8.5049 11.5004 6.93788 11.5004 5.00488C11.5004 3.07189 9.9334 1.50488 8.0004 1.50488Z"
                  fill="#212121"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 flex mb-4 border-b-2 w-full items-center">
        <div className="w-2/12">
          <span className="text-primaryblack mr-4 text-base w-full">Email</span>
        </div>
        <div>
          {" "}
          <input
            type="email"
            className="border border-gray-300 rounded-md p-2 flex-grow-2 text-base"
            placeholder="Email address"
          />
        </div>
      </div>

      <div className="p-4 flex items-start mb-4 space-x-48">
        <span className="text-primaryblack mr-4 text-base w-full">
          Update Password
        </span>
        <input
          type="password"
          className="border border-gray-300 rounded-md p-2 flex-grow-2 text-base"
          placeholder="Enter your current password"
        />
      </div>

      <div className="p-4 flex items-start mb-4 border-b-2 space-x-48">
        <input
          type="password"
          className="border border-gray-300 rounded-md p-2 flex-grow-2 text-base"
          placeholder="Enter your new password"
        />
      </div>

      <div className="p-4 flex items-start border-b-2 space-x-48">
        <span className="text-primaryblack mr-4 text-base w-full">
          Your Bio
        </span>
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
