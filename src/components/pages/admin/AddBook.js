import AddEntityForm from "components/admin-components/AddBookEntityForm";
import React from "react";

function AddBook() {
  return (
    <div>
      <AddEntityForm
        formTitle={"Add Book"}
        formDescription={"Fill in the details of the book you want to add."}
      />
    </div>
  );
}

export default AddBook;
