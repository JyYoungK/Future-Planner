import { profile } from "../constant/profile";
import { Fragment } from "react";
import { formatCurrency } from "../components/formatCurrency";
import { pieChartItems } from "../constant/pieChartItems";
import SpaceThemeBorder from "../components/spaceThemeBorder";

function purchaseSummary({ handleButtonClick }) {
  const colors = [
    "blue-100",
    "red-100",
    "green-100",
    "yellow-100",
    "pink-200",
    "orange-200",
    "purple-100",
    "indigo-100",
    "gray-100",
  ];

  const textColors = [
    "text-blue-300",
    "text-red-300",
    "text-green-300",
    "text-yellow-300",
    "text-pink-400",
    "text-orange-400",
    "text-purple-300",
    "text-indigo-300",
    "text-gray-300",
  ];

  const categories = Object.keys(profile.purchased);
  categories.sort((a, b) => {
    const indexA = pieChartItems.indexOf(a);
    const indexB = pieChartItems.indexOf(b);
    return indexA - indexB;
  });

  return (
    <div className="flex w-screen items-center justify-center">
      <div className="h-4/5 w-5/6">
        <SpaceThemeBorder>
          <div className=" rounded-lg p-8 text-white">
            <Fragment>
              <h1 className="mb-8 text-3xl font-bold">Overview Summary Page</h1>
              {categories.length > 0 ? (
                <div>
                  {categories.map((categoryName, index) => {
                    const category = profile.purchased[categoryName];
                    const color = colors[index % colors.length];
                    const customTextColor =
                      textColors[index % textColors.length];
                    if (category.value > 0)
                      return (
                        <div key={categoryName} className="mb-8">
                          <h2
                            className={`mb-4 text-2xl font-bold ${customTextColor}`}
                          >
                            {categoryName}
                          </h2>
                          <div
                            className={`max-h-96 overflow-y-scroll rounded-lg border p-4 bg-${color}`}
                            style={{ scrollbarColor: `${color} #4B5563` }}
                          >
                            {Object.keys(category).map((itemId) => {
                              if (itemId === "value") {
                                return (
                                  <div
                                    key={`${categoryName}-total`}
                                    className="text-md mt-4 flex items-center justify-between text-black md:text-xl"
                                  >
                                    <span className="font-bold">Total:</span>
                                    <span className="font-bold">
                                      {formatCurrency(
                                        profile.currency,
                                        category.value
                                      )}
                                    </span>
                                  </div>
                                );
                              }

                              const item = category[itemId];
                              if (item.quantity > 0) {
                                return (
                                  <div
                                    key={`${categoryName}-${itemId}`}
                                    className="text-md mt-4 flex items-center justify-between text-black md:text-xl"
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
                              }
                            })}
                          </div>
                        </div>
                      );
                  })}
                  <div
                    key={`remaining-total`}
                    className="mt-4 flex items-center justify-between text-2xl"
                  >
                    <span className="font-bold">Remaining Total:</span>
                    <span className="font-bold">
                      {formatCurrency(
                        profile.currency,
                        profile.earnAmount - profile.spendAmount
                      )}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="mb-5 text-xl font-bold">
                  You haven't picked any purchases
                </div>
              )}
            </Fragment>
            <div className="mt-4">
              {/* <button
          className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
          onClick={() => handleButtonClick(5)}
        >
          Continue
        </button> */}
              <button
                className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
                onClick={() => handleButtonClick(3)}
              >
                Back
              </button>
            </div>
          </div>
        </SpaceThemeBorder>
      </div>
    </div>
  );
}

export default purchaseSummary;
