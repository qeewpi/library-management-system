import DeleteEntityForm from "components/admin-components/DeleteEntityForm";
import React from "react";

function DeleteBorrowedBook() {
  const handleSubmit = (formData) => {
    // Handle form submission based on formData
    console.log(formData);
  };
  return (
    <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
      <DeleteEntityForm
        entity="borrowedBook"
        header="Delete a borrowed book"
        description="Fill in the details of the borrowed book you want to delete."
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default DeleteBorrowedBook;
