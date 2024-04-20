import { Button, Input, Textarea } from "@material-tailwind/react";
import React from "react";

function AddEntityForm({ formTitle, formDescription }) {
  return (
    <div className="flex flex-col gap-y-6">
      <div className="text-xl bg-white font-semibold p-6 rounded-xl text-primaryBlack">
        <div className="flex flex-col gap-y-1">
          <h1>{formTitle}</h1>
          <h1 className="text-gray-500 text-base">{formDescription}</h1>
        </div>
        <form className="mt-4 mb-2 w-4/12">
          <div className="mb-1 flex flex-col gap-6">
            <div className="flex items-center">
              <h1 className="text-base w-4/12">Title</h1>
              <Input
                label="Enter the book's title here..."
                crossOrigin={undefined}
              />
            </div>

            <div className="flex items-center">
              <h1 className="text-base w-4/12">Author</h1>
              <Input
                label="Enter the book's author here..."
                crossOrigin={undefined}
              />
            </div>

            <div className="flex items-start">
              <h1 className="text-base w-4/12">Description</h1>
              <Textarea label="Enter the book's description here..." />
            </div>

            <div className="flex items-center">
              <h1 className="text-base w-4/12">Upload Image</h1>
              <div className="w-full">
                <Button color="blue" className="">
                  Choose File
                </Button>
              </div>
            </div>
          </div>

          <Button className="mt-6" color="green" fullWidth>
            Add Book
          </Button>
        </form>
      </div>
    </div>
  );
}

export default AddEntityForm;
