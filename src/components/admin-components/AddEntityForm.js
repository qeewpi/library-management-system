import React from "react";
import GenericForm from "./GenericForm";

const AddEntityForm = ({ entity, onSubmit, header, description }) => {
  let fields = [];

  // Define fields based on entity type
  switch (entity) {
    case "user":
      fields = [
        { name: "name", label: "Name", type: "text", required: true },
        { name: "email", label: "Email", type: "email", required: true },
        {
          name: "booksBorrowed",
          label: "Books Borrowed",
          type: "number",
          required: true,
        },
        { name: "role", label: "Role", type: "text", required: true },
        { name: "status", label: "Status", type: "text", required: true },
        {
          name: "password",
          label: "Password",
          type: "password",
          required: true,
        },
      ];
      break;
    case "admin":
      fields = [
        { name: "adminId", label: "Admin ID", type: "number", required: true },
        { name: "name", label: "Name", type: "text", required: true },
        { name: "userName", label: "Username", type: "text", required: true },
        {
          name: "password",
          label: "Password",
          type: "password",
          required: true,
        },
        {
          name: "dateAdded",
          label: "Date Added",
          type: "date",
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
    />
  );
};

export default AddEntityForm;
