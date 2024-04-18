import React from 'react'

function Checkout() {
  return (
    <div className="bg-white p-6 rounded-xl">
        <div className="text-gray-400 border-b-4">
            <h1>Title of the book</h1>
            <h1>Title of the book</h1>
            <h1>Title of the book</h1>
        </div>

        <div>
        <button
          type="submit"
          className="btn mt-8 w-full py- rounded-xl bg-primaryBlue text-white hover:bg-secondaryBlue"
        >
          Checkout
        </button>
        </div>
    </div>
  )
}

export default Checkout