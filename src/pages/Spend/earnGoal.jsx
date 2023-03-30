import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import PieChart from "../../components/pieChart";
import { top20Currencies } from "../../constant/topCurrencies";
import SpendDataGrid from "./spendDataGrid";
import { formatCurrency } from "../../components/formatCurrency";
import { pieChartItems } from "../../constant/pieChartItems";
import { profile } from "../../constant/profile";
import SpaceThemeBorder from "../../components/spaceThemeBorder";

function earnGoal({ handleButtonClick, setTotalSpent }) {
  const [category, setCategory] = useState("Summary");
  const [content, setContent] = useState("");

  useEffect(() => {
    const matchingCurrency = top20Currencies.find(
      (c) => c.country === profile.country
    );
    if (matchingCurrency) {
      profile.currency = matchingCurrency.code;
    } else {
      profile.currency = "USD";
    }
  }, []);

  const handlePieChartClick = (category) => {
    setCategory(category);
    setContent(
      <div>
        <SpendDataGrid
          category={category}
          setTotalSpent={setTotalSpent}
          setCategory={setCategory}
        />
      </div>
    );
  };

  return (
    <div className="flex w-screen items-center justify-center">
      <div className="h-4/5 w-5/6">
        <SpaceThemeBorder>
          <div className="rounded-lg bg-gray-900 text-white shadow-md sm:p-6 md:p-8 lg:p-10">
            <div className="flex flex-col justify-between p-4 md:flex-row">
              <div className="text-3xl font-bold">
                {category === "Summary" ? (
                  <div>Your spend summary in {profile.country} </div>
                ) : (
                  <div>
                    Current {category} in {profile.country}
                  </div>
                )}
              </div>
              <div className="mt-4 text-3xl font-bold md:mt-0">
                Amount Remaining:{" "}
                {formatCurrency(
                  profile.currency,
                  profile.earnAmount - profile.spendAmount || "CA$0.00"
                )}
              </div>
            </div>
            <div
              className={`grid ${
                category === "Summary" ? "md:grid-cols-4" : ""
              }`}
            >
              {category === "Summary" ? (
                pieChartItems.map((item) => (
                  <div
                    className="h-full w-full rounded-2xl border-8 border-white p-2 shadow-md"
                    key={item}
                  >
                    <div className="h-full w-full border-8 border-yellow-500">
                      <Box>
                        <PieChart
                          title={item}
                          currency={profile.currency}
                          value={
                            profile.purchased[item]?.value
                              ? profile.purchased[item]?.value
                              : 0
                          }
                          series={
                            profile.earnAmount === 0 ||
                            profile.purchased?.[item] === undefined
                              ? [0]
                              : [
                                  parseInt(
                                    (profile.purchased[item]?.value /
                                      profile.earnAmount) *
                                      100
                                  ),
                                ]
                          }
                          onClick={() => handlePieChartClick(item)}
                        />
                      </Box>
                    </div>
                  </div>
                ))
              ) : (
                <div> {content} </div>
              )}
            </div>
            <div className="mt-10 md:mt-20">
              {category === "Summary" ? (
                <div>
                  <button
                    className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
                    onClick={() => handleButtonClick(4)}
                  >
                    Summary
                  </button>
                  <button
                    className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
                    onClick={() => handleButtonClick(2)}
                  >
                    Back
                  </button>
                </div>
              ) : (
                <button
                  className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
                  onClick={() => setCategory("Summary")}
                >
                  Back
                </button>
              )}
            </div>
          </div>
        </SpaceThemeBorder>
      </div>
    </div>
  );
}

export default earnGoal;
