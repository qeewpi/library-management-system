import { default as React, useState } from "react";

const GenericForm = ({ fields, onSubmit, header, description }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // If it's a file input, handle file differently
    const newValue = e.target.type === "file" ? files[0] : value;
    setFormData({ ...formData, [name]: newValue });
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
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name] || ""}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="textarea textarea-bordered input-grow w-full text-base font-medium"
                required={field.required}
              />
            ) : field.type === "file" ? (
              <input
                type="file"
                id={field.name}
                name={field.name}
                onChange={handleChange}
                className="file-input -ml-10 file-input-primary w-full max-w-xs text-base font-medium"
                required={field.required}
              />
            ) : (
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
            )}
            {field.icon && <i className={field.icon}></i>}
            {field.additionalContent}
          </div>
        ))}

        <button type="submit" className="btn btn-primary text-white">
          Submit
        </button>
      </div>
    </form>
  );
};

export default GenericForm;
