import React, { useEffect, useState } from "react";
import AuthService from "service/AuthService";

function Profile() {
  const [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  const [formData, setFormData] = useState({
    newPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedUser = await AuthService.updateUserInfo(
        currentUser.id,
        currentUser.username,
        currentUser.name,
        currentUser.email,
        formData.newPassword
      );
      setCurrentUser(updatedUser);
      setFormData({ newPassword: "" }); // Clear form after update
      alert("User information updated successfully!"); // Or use a more sophisticated notification
    } catch (error) {
      console.error("Update failed:", error);
      alert("Failed to update user information."); // Or display a more helpful error message
    }
  };

  // Fetch user data on component mount (similar to EditUser's useEffect)
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await AuthService.getCurrentUser();
        setCurrentUser(userData);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        // Handle error, e.g., redirect to login
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="text-base bg-white font-semibold p-6 rounded-xl ">
      <div className="p-4 flex mb-4 w-full border-b-2 items-center">
        <div className="flex h-full w-full ">
          <span className="text-primaryblack mr-4 text-base w-full">
            Profile
            <p className="text-gray-500 mr-4 text-base w-full font-medium">
              View and update your personal details here.
            </p>
          </span>
        </div>
      </div>

      <form onSubmit={handleUpdate} className="font-medium">
        <div className="p-4 flex mb-4 border-b-2 w-full items-center">
          <div className="flex h-full w-2/12">
            <span className="text-primaryblack mr-4 text-base w-full font-semibold">
              Username
            </span>
          </div>
          <div className="input-box flex flex-grow items-center text-gray-400">
            <div className="input-box flex w-8-16 items-center text-gray-400 ">
              <div className="flex flex-grow text-sm relative items-center">
                <input
                  type="text"
                  value={currentUser.username}
                  required
                  readOnly
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
          <div className="flex h-full w-2/12">
            <span className="text-primaryblack mr-4 text-base w-full font-semibold">
              Full Name
            </span>
          </div>
          <div className="input-box flex flex-grow items-center text-gray-400">
            <div className="input-box flex w-8-16 items-center text-gray-400 ">
              <div className="flex flex-grow text-sm relative items-center">
                <input
                  type="text"
                  value={currentUser.name}
                  required
                  readOnly
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
          <div className="flex h-full w-2/12">
            <span className="text-primaryblack mr-4 text-base w-full font-semibold">
              Email Address
            </span>
          </div>
          <div className="input-box flex flex-grow items-center text-gray-400">
            <div className="input-box flex w-8-16 items-center text-gray-400 ">
              <div className="flex flex-grow text-sm relative items-center">
                <input
                  type="text"
                  value={currentUser.email}
                  required
                  readOnly
                  className="w-full pl-12 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-600 bg-customGrey text-gray-500 focus:text-primaryBlack text-primaryBlack"
                />

                <svg
                  width="20"
                  height="16"
                  viewBox="0 0 20 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-0 h-5 w-5 ml-3 pointer-events-none"
                >
                  <path
                    d="M3.25 0H16.75C18.483 0 19.8992 1.35645 19.9949 3.06558L20 3.25V12.75C20 14.483 18.6435 15.8992 16.9344 15.9949L16.75 16H3.25C1.51697 16 0.10075 14.6435 0.00514007 12.9344L0 12.75V3.25C0 1.51697 1.35645 0.10075 3.06558 0.00513983L3.25 0ZM18.5 5.373L10.3493 9.6637C10.1619 9.7623 9.9431 9.7764 9.7468 9.706L9.6507 9.6637L1.5 5.374V12.75C1.5 13.6682 2.20711 14.4212 3.10647 14.4942L3.25 14.5H16.75C17.6682 14.5 18.4212 13.7929 18.4942 12.8935L18.5 12.75V5.373ZM16.75 1.5H3.25C2.33183 1.5 1.57881 2.20711 1.5058 3.10647L1.5 3.25V3.679L10 8.1525L18.5 3.678V3.25C18.5 2.33183 17.7929 1.57881 16.8935 1.5058L16.75 1.5Z"
                    fill="#212121"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 flex flex-row mb-4 border-b-2 w-full items-center">
          <div className="flex h-full w-2/12">
            <span className="text-primaryblack mr-4 text-base w-full font-semibold">
              Update Password
            </span>
          </div>
          <div className="flex flex-col gap-8">
            <div className="input-box flex flex-grow items-center text-gray-400">
              <div className="input-box flex w-8-16 items-center text-gray-400 ">
                <div className="flex flex-grow text-sm relative items-center">
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="Enter New Password"
                    required
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="w-full pl-12 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-600 bg-customGrey text-gray-500 focus:text-primaryBlack text-primaryBlack"
                  />

                  <svg
                    width="16"
                    height="19"
                    viewBox="0 0 16 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 h-5 w-5 ml-3 pointer-events-none"
                  >
                    <path
                      d="M8 13.5C8.8284 13.5 9.5 12.8284 9.5 12C9.5 11.1716 8.8284 10.5 8 10.5C7.1716 10.5 6.5 11.1716 6.5 12C6.5 12.8284 7.1716 13.5 8 13.5ZM4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4V5H12.75C14.5449 5 16 6.45507 16 8.25V15.75C16 17.5449 14.5449 19 12.75 19H3.25C1.45507 19 0 17.5449 0 15.75V8.25C0 6.45507 1.45507 5 3.25 5H4V4ZM8 1.5C6.6193 1.5 5.5 2.61929 5.5 4V5H10.5V4C10.5 2.61929 9.3807 1.5 8 1.5ZM3.25 6.5C2.2835 6.5 1.5 7.2835 1.5 8.25V15.75C1.5 16.7165 2.2835 17.5 3.25 17.5H12.75C13.7165 17.5 14.5 16.7165 14.5 15.75V8.25C14.5 7.2835 13.7165 6.5 12.75 6.5H3.25Z"
                      fill="#212121"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* <div className="input-box flex flex-grow items-center text-gray-400">
              <div className="input-box flex w-8-16 items-center text-gray-400 ">
                <div className="flex flex-grow text-sm relative items-center">
                  <input
                    type="password"
                    name="newPassword"
                    placeholder="Enter New Password"
                    required
                    value={formData.newPassword}
                    onChange={handleChange}
                    className="w-full pl-12 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-600 bg-customGrey text-gray-500 focus:text-primaryBlack text-primaryBlack"
                  />
                  <svg
                    width="16"
                    height="19"
                    viewBox="0 0 16 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 h-5 w-5 ml-3 pointer-events-none"
                  >
                    <path
                      d="M8 13.5C8.8284 13.5 9.5 12.8284 9.5 12C9.5 11.1716 8.8284 10.5 8 10.5C7.1716 10.5 6.5 11.1716 6.5 12C6.5 12.8284 7.1716 13.5 8 13.5ZM4 4C4 1.79086 5.79086 0 8 0C10.2091 0 12 1.79086 12 4V5H12.75C14.5449 5 16 6.45507 16 8.25V15.75C16 17.5449 14.5449 19 12.75 19H3.25C1.45507 19 0 17.5449 0 15.75V8.25C0 6.45507 1.45507 5 3.25 5H4V4ZM8 1.5C6.6193 1.5 5.5 2.61929 5.5 4V5H10.5V4C10.5 2.61929 9.3807 1.5 8 1.5ZM3.25 6.5C2.2835 6.5 1.5 7.2835 1.5 8.25V15.75C1.5 16.7165 2.2835 17.5 3.25 17.5H12.75C13.7165 17.5 14.5 16.7165 14.5 15.75V8.25C14.5 7.2835 13.7165 6.5 12.75 6.5H3.25Z"
                      fill="#212121"
                    />
                  </svg>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="p-4 flex mb-4 border-b-2 w-full items-center">
          <div className="flex h-full w-2/12">
            <span className="text-primaryblack mr-4 text-base w-full font-semibold">
              Your Access Token
            </span>
          </div>
          <div className="input-box flex flex-grow items-center text-gray-400">
            <div className="input-box flex w-8-16 l-8-16 items-center text-gray-400 ">
              <div className="flex flex-grow text-sm relative items-center">
                <textarea
                  name="postContent"
                  rows={6}
                  cols={40}
                  value={currentUser.accessToken}
                  required
                  readOnly
                  className="w-full p-4 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-600 bg-customGrey text-gray-500 focus:text-primaryBlack text-primaryBlack"
                />
              </div>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="btn w-40 py-4 rounded-xl bg-secondaryBlue text-white hover:bg-secondaryBlue"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Profile;
