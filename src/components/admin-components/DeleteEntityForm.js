import React from "react";
import DeleteGenericForm from "./DeleteGenericForm";

const DeleteEntityForm = ({ entity, onSubmit, header, description }) => {
  let fields = [];

  // Define fields based on entity type
  switch (entity) {
    case "user":
      fields = [
        { name: "userId", label: "User ID", type: "number", required: true },
      ];
      break;
    case "book":
      fields = [
        { name: "bookId", label: "Book ID", type: "number", required: true },
      ];
      break;
    case "borrowedBook":
      fields = [
        { name: "orderId", label: "Order ID", type: "number", required: true },
      ];
      break;
    // Add more cases for other entities
    default:
      break;
  }

  return (
    <DeleteGenericForm
      fields={fields}
      onSubmit={onSubmit}
      header={header}
      description={description}
    />
  );
};

export default DeleteEntityForm;
