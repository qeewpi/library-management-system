import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminService from "service/AdminService";

function DeleteAdmin() {
  let navigate = useNavigate();

  const [adminId, setAdminId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await AdminService.deleteAdmin(adminId);
      console.log("Admin deleted successfully");
      navigate("/admin/admin-list");
    } catch (error) {
      setError("Failed to delete admin");
    }
  };

  const handleChange = (e) => {
    setAdminId(e.target.value);
  };

  return (
    <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <div className="textDiv flex flex-col gap-y-1 border-b-2">
          <h1 className="font-semibold text-xl">Delete an admin</h1>
          <h2 className="text-gray-500 mb-4 text-lg font-medium">
            Fill in the details of the admin you want to delete.
          </h2>
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="flex flex-col gap-y-4 w-1/2 mt-6">
          <div className="flex items-center gap-y-4">
            <label htmlFor="adminId" className="label w-1/4 text-base">
              Admin ID
            </label>
            <input
              type="number"
              id="adminId"
              name="adminId"
              value={adminId}
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

export default DeleteAdmin;
