import React from "react";

function jobSelect({ handleButtonClick }) {
  return (
    <div>
      jobSelect
      <div className="mt-4">
        <button
          className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
          onClick={() => handleButtonClick(6)}
        >
          Continue
        </button>
        <button
          className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
          onClick={() => handleButtonClick(4)}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default jobSelect;
