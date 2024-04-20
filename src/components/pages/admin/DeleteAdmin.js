import DeleteEntityForm from "components/admin-components/DeleteEntityForm";
import React from "react";

function DeleteAdmin() {
  const handleSubmit = (formData) => {
    // Handle form submission based on formData
    console.log(formData);
  };
  return (
    <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
      <DeleteEntityForm
        entity="admin"
        header="Delete an admin"
        description="Fill in the details of the admin you want to delete."
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default DeleteAdmin;
