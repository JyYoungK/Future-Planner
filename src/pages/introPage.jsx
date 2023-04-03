import React from "react";

function introPage({ handleButtonClick, showWelcome, setTotalSpent }) {
  setTotalSpent(0);
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center">
      <div
        className={`rounded-lg p-10 font-bold text-white shadow-md ${
          showWelcome ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="mb-5 text-4xl transition-opacity duration-500">
          Welcome
        </h1>
        <h1 className="mb-5 text-2xl">
          This app will help you plan your future, career and reach your
          financial goal
        </h1>
        <button
          className="mt-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
          onClick={() => handleButtonClick(0)}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default introPage;
