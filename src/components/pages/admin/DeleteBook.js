import DeleteEntityForm from "components/admin-components/DeleteEntityForm";
import React from "react";

function DeleteBook() {
  const handleSubmit = (formData) => {
    // Handle form submission based on formData
    console.log(formData);
  };
  return (
    <div className="bg-white gap-y-4 flex flex-col p-6 rounded-xl">
      <DeleteEntityForm
        entity="book"
        header="Delete a book"
        description="Fill in the details of the book you want to delete."
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default DeleteBook;
