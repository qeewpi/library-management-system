import React from "react";
import GenericForm from "./GenericForm";

const AddEntityForm = ({
  entity,
  onSubmit,
  header,
  description,
  username,
  name,
  email,
  password,
  onInputChange,
}) => {
  let fields = [];

  // Define fields based on entity type
  switch (entity) {
    case "user":
      fields = [
        {
          name: "username",
          label: "Username",
          type: "text",
          required: true,
          value: username,
        },
        {
          name: "name",
          label: "Name",
          type: "text",
          required: true,
          value: name,
        },
        {
          name: "email",
          label: "Email",
          type: "email",
          required: true,
          value: email,
        },
        {
          name: "password",
          label: "Password",
          type: "password",
          required: true,
          value: password,
        },
        // Add more fields specific to user entity
      ];
      break;
    case "admin":
      fields = [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "userName", label: "Username", type: "text", required: true },
        {
          name: "password",
          label: "Password",
          type: "password",
          required: true,
        },
      ];
      break;
    case "book":
      fields = [
        {
          name: "title",
          label: "Title",
          type: "text",
          required: true,
          placeholder: "Enter book title",
        },
        {
          name: "author",
          label: "Author",
          type: "text",
          required: true,
          placeholder: "Enter book author",
        },
        {
          name: "description",
          label: "Description",
          type: "textarea",
          required: true,
          placeholder: "Enter book description",
        },
        {
          name: "image",
          label: "Image",
          type: "file",
          placeholder: "Upload image",
        },

        // Add more fields specific to book entity
      ];
      break;
    case "borrowedBook":
      fields = [
        { name: "userName", label: "User Name", type: "text", required: true },
        {
          name: "userEmail",
          label: "User Email",
          type: "email",
          required: true,
        },
        { name: "userId", label: "User ID", type: "number", required: true },
        { name: "bookId", label: "Book ID", type: "number", required: true },
        { name: "orderId", label: "Order ID", type: "number", required: true },
        {
          name: "bookTitle",
          label: "Book Title",
          type: "text",
          required: true,
        },
        {
          name: "bookAuthor",
          label: "Book Author",
          type: "text",
          required: true,
        },
        {
          name: "borrowedDate",
          label: "Borrowed Date",
          type: "date",
          required: true,
        },
        { name: "dueDate", label: "Due Date", type: "date", required: true },
        {
          name: "image",
          label: "Image",
          type: "file",
          placeholder: "Upload image",
        },
      ];
      break;
    // Add more cases for other entities
    default:
      break;
  }

  return (
    <GenericForm
      fields={fields}
      onSubmit={onSubmit}
      header={header}
      description={description}
      onInputChange={onInputChange}
    />
  );
};

export default AddEntityForm;
