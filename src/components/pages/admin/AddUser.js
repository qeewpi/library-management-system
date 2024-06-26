import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "service/AuthService";

const AddUser = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    role: [],
  });

  const [isLoading, setIsLoading] = useState(false);

  // add user with specified role
  const { username, name, email, password, role } = user;

  const handleChange = (e) => {
    if (e.target.name === "role") {
      setUser({ ...user, role: [e.target.value] });
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    // Prevent default form submission
    e.preventDefault();
    // Handle form submission based on formData
    try {
      await AuthService.registerWithRole(username, name, email, password, role);
      navigate("/admin/user-list");
    } catch (error) {
      console.error("Failed to add user", error);
    }
    setIsLoading(false);
  };

  return (
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="bg-white gap-y-4 flex flex-col p-6 rounded-xl"
    >
      <div className="textDiv flex flex-col gap-y-1 border-b-2">
        <h1 className="font-semibold text-xl">Add a user</h1>
        <h2 className="text-gray-500 mb-4 text-lg font-medium">
          Fill in the details of the user you want to add.
        </h2>
      </div>
      <div className="flex flex-col pt-1 gap-y-4 xl:w-1/2">
        <div className="flex items-center gap-y-4">
          <label htmlFor="username" className="label w-2/4 2xl:w-1/4 text-base">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-full"
            required
          />
        </div>
        <div className="flex items-center gap-y-4">
          <label htmlFor="name" className="label w-2/4 2xl:w-1/4 text-base">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-full"
            required
          />
        </div>
        <div className="flex items-center gap-y-4">
          <label htmlFor="email" className="label w-2/4 2xl:w-1/4 text-base">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-full"
            required
          />
        </div>
        <div className="flex items-center gap-y-4">
          <label htmlFor="password" className="label w-2/4 2xl:w-1/4 text-base">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="input-grow input input-bordered text-base font-medium w-full"
            required
          />
        </div>
        <div className="flex flex-row">
          <div className="radio-input flex flex-row w-full">
            <label htmlFor="role" className="label w-2/4 2xl:w-1/4 text-base">
              Role
            </label>
            <div className="input-radio-container flex flex-row items-start w-full">
              <div className="form-control w-full items-start">
                <label className="label cursor-pointer gap-x-4">
                  <span className="text-base">User</span>
                  <input
                    type="radio"
                    name="role"
                    value="user"
                    checked={role.includes("user")}
                    onChange={handleChange}
                    className="radio checked:bg-red-500"
                  />
                </label>
              </div>
              <div className="form-control w-full items-start">
                <label className="label cursor-pointer gap-x-4">
                  <span className="text-base">Admin</span>
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={role.includes("admin")}
                    onChange={handleChange}
                    className="radio checked:bg-blue-500"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="join w-1/2">
          {!isLoading ? (
            <button
              type="submit"
              className="btn btn-success text-white btn-block join-item"
            >
              Submit
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-success text-white btn-block join-item"
            >
              <span className="loading loading-spinner loading-xs"></span>
              Loading
            </button>
          )}
          <button
            onClick={() => navigate("/admin/user-list")}
            className="btn btn-error text-white btn-block join-item"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddUser;
