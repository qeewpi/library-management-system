import React from "react";
import ProfileDetail from "components/admin-components/ProfileDetail";

function Profile() {
  return (
    <div>
      <div className="flex flex-grow flex-row gap-4">
        <div className="flex flex-col bg-white p-6 rounded-xl w-3/4">
          <div>
            <h1 className="font-bold text-primaryBlack text-xl">About You</h1>
          </div>

          <div className="flex flex-col pt-20 border-b-2 p-4">
            <h1 className="">Bio</h1>
            <h1 className="text-gray-400">Tell Something About Yourself!</h1>
            <div className="input-box flex flex-grow items-center text-gray-400">
              <div className="input-box flex w-8-16 l-8-16 items-center text-gray-400 ">
                <div className="flex flex-grow text-sm relative items-center">
                  <textarea
                    name="postContent"
                    rows={6}
                    cols={80}
                    placeholder=""
                    className="w-full pl-12 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-600 bg-customGrey text-gray-500 focus:text-primaryBlack text-primaryBlack"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col border-b-2 p-4">
            <h1 className="">Address</h1>
            <h1 className="text-gray-400">
              Number/Block, Street, Region, Zip Code, Country
            </h1>
            <div className="input-box flex flex-grow items-center text-gray-400">
              <div className="input-box flex w-8-16 l-8-16 items-center text-gray-400 ">
                <div className="flex flex-grow text-sm relative items-center">
                  <textarea
                    name="postContent"
                    rows={6}
                    cols={80}
                    placeholder=""
                    className="w-full pl-12 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-600 bg-customGrey text-gray-500 focus:text-primaryBlack text-primaryBlack"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col border-b-2 p-4">
            <h1 className="">Summary </h1>
            <h1 className="text-gray-400">Your Employment Summary </h1>
            <div className="input-box flex flex-grow items-center text-gray-400">
              <div className="input-box flex w-8-16 l-8-16 items-center text-gray-400 ">
                <div className="flex flex-grow text-sm relative items-center">
                  <textarea
                    name="postContent"
                    rows={6}
                    cols={80}
                    placeholder=""
                    className="w-full pl-12 py-2 rounded-xl focus:outline-none focus:ring-1 focus:ring-blue-600 bg-customGrey text-gray-500 focus:text-primaryBlack text-primaryBlack"
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="btn mt-8 w-14 h-max rounded-xl bg-white text-black border border-black"
          >
            set
          </button>
        </div>

        <div className="flex flex-col bg-white p-6 rounded-xl w-1/4 h-max">
          <ProfileDetail />
        </div>
      </div>

      <div className="text text-center">
        <button
          type="submit"
          className="btn mt-8 w-1/4 py-4 rounded-xl bg-primaryBlue text-white hover:bg-secondaryBlue"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
