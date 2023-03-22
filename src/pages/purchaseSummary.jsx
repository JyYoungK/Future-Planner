import { useState, useEffect } from "react";
import { top20Currencies } from "../constant/topCurrencies";
import { profile } from "../constant/profile";
import { Fragment } from "react";
import { formatCurrency } from "../components/formatCurrency";

function purchaseSummary({ handleButtonClick }) {
  const colors = [
    "bg-blue-100",
    "bg-red-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-pink-100",
    "bg-purple-100",
    "bg-indigo-100",
    "bg-gray-100",
  ];

  const categories = Object.keys(profile.purchased);

  return (
    <div className="rounded-lg bg-white p-10 shadow-md">
      <Fragment>
        <h1 className="mb-8 text-3xl font-bold">Overview Summary Page</h1>
        {categories.length > 0 ? (
          <div>
            <h1 className="mb-5 text-2xl font-bold">
              Here are things that you want to purchase in {profile.country} by{" "}
              {profile.goalYear}
            </h1>
            {categories.map((categoryName, index) => {
              const category = profile.purchased[categoryName];
              const color = colors[index % colors.length];

              return (
                <div key={categoryName} className="mb-8">
                  <h2 className="mb-4 text-xl font-bold">{categoryName}</h2>
                  <div
                    className={`max-h-96 overflow-y-scroll rounded-lg border p-4 ${color}`}
                    style={{ scrollbarColor: `${color} #4B5563` }}
                  >
                    {Object.keys(category).map((itemId) => {
                      if (itemId === "value") {
                        return (
                          <div
                            key={`${categoryName}-total`}
                            className="mt-4 flex items-center justify-between"
                          >
                            <span className="font-bold">Total:</span>
                            <span className="font-bold">
                              {formatCurrency(profile.currency, category.value)}
                            </span>
                          </div>
                        );
                      }

                      const item = category[itemId];
                      return (
                        <div
                          key={`${categoryName}-${itemId}`}
                          className="mt-4 flex items-center justify-between"
                        >
                          <span>{`${item.name} (${formatCurrency(
                            profile.currency,
                            item.selectedPrice
                          )}) x${item.quantity} `}</span>
                          <span>
                            {formatCurrency(
                              profile.currency,
                              item.selectedPrice * item.quantity
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h1 className="mb-5 text-xl font-bold">
              You haven't picked any purchases
            </h1>
          </div>
        )}
      </Fragment>
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
