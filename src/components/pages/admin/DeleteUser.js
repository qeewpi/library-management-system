import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "service/UserService";

function DeleteUser() {
  let navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await UserService.deleteUser(userId);
      // Handle successful deletion, such as redirecting to another page or showing a success message
      console.log("User deleted successfully");
      navigate("/admin/user-list");
    } catch (error) {
      setError("Failed to delete user");
    }
  };

  const handleChange = (e) => {
    setUserId(e.target.value);
  };

  return (
    <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="textDiv flex flex-col gap-y-1 border-b-2">
          <h1 className="font-semibold text-xl">Delete a user</h1>
          <h2 className="text-gray-500 mb-4 text-lg font-medium">
            Fill in the details of the user you want to delete.
          </h2>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="flex flex-col gap-y-4 w-1/2 mt-6">
          <div className="flex items-center gap-y-4">
            <label htmlFor="userId" className="label w-1/4 text-base">
              User ID
            </label>
            <input
              type="number"
              id="userId"
              name="userId"
              value={userId}
              onChange={handleChange}
              className="input-grow input input-bordered text-base font-medium w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-error text-white">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
}

export default DeleteUser;
