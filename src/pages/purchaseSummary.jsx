import { useState, useEffect } from "react";
import { top20Currencies } from "../constant/topCurrencies";

function purchaseSummary({ handleButtonClick, country, year }) {
  return (
    <div className="rounded-lg bg-white p-10 shadow-md">
      <h1 className="mb-5 text-2xl font-bold">
        Here are things that you want to purchase in {country} by {year}
      </h1>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
        onClick={() => handleButtonClick(3)}
      >
        Back
      </button>
    </div>
  );
}

export default purchaseSummary;
