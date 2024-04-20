import AddEntityForm from "components/admin-components/AddEntityForm";
import React from "react";

function AddAdmin() {
  const handleSubmit = (formData) => {
    // Handle form submission based on formData
    console.log(formData);
  };
  return (
    <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
      <AddEntityForm
        entity="admin"
        header="Add an admin"
        description="Fill in the details of the admin you want to add."
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default AddAdmin;
