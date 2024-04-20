import React, { useState } from "react";

const DeleteGenericForm = ({ fields, onSubmit, header, description }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <div className="textDiv flex flex-col gap-y-1">
        {header && <h1 className="font-semibold text-lg">{header}</h1>}
        {description && <h2 className=" text-gray-500 mb-4">{description}</h2>}
      </div>
      <div className="flex flex-col gap-y-4 w-1/2">
        {fields.map((field) => (
          <div key={field.name} className="flex items-center gap-y-4">
            {field.label && (
              <label htmlFor={field.name} className="label w-1/4 text-base">
                {field.label}
              </label>
            )}
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              value={formData[field.name] || ""}
              onChange={handleChange}
              placeholder={field.placeholder}
              className="input-grow input input-bordered text-base font-medium w-full"
              required={field.required}
            />
            {field.icon && <i className={field.icon}></i>}
            {field.additionalContent}
          </div>
        ))}

        <button type="submit" className="btn btn-error text-white">
          Delete
        </button>
      </div>
    </form>
  );
};

export default DeleteGenericForm;
