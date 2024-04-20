import AddEntityForm from "components/admin-components/AddEntityForm";
import React from "react";

function AddUser() {
  const handleSubmit = (formData) => {
    // Handle form submission based on formData
    console.log(formData);
  };
  return (
    <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
      <AddEntityForm
        entity="user"
        header="Add a user"
        description="Fill in the details of the user you want to add."
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default AddUser;
