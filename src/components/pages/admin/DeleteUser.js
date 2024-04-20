import DeleteEntityForm from "components/admin-components/DeleteEntityForm";
import React from "react";

function DeleteUser() {
  const handleSubmit = (formData) => {
    // Handle form submission based on formData
    console.log(formData);
  };
  return (
    <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
      <DeleteEntityForm
        entity="user"
        header="Delete a user"
        description="Fill in the details of the user you want to delete."
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default DeleteUser;
