// AddEntityForm.js
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
        // Add more fields specific to user entity
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
    // Add more cases for other entities
    default:
      break;
  }

  return <GenericForm fields={fields} onSubmit={onSubmit} header={header} description={description} />;
};

export default AddEntityForm;
