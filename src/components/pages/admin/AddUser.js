import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  let navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
  });

  const { username, name, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    // Prevent default form submission
    e.preventDefault();
    // Handle form submission based on formData
    await axios.post("http://localhost:8080/user", user);
    navigate("/admin/user-list");
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
      <div className="flex flex-col pt-6 gap-y-4 xl:w-1/2">
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
        <button type="submit" className="btn btn-primary text-white">
          Submit
        </button>
      </div>
    </form>
  );
};

export default AddUser;
