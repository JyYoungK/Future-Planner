import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import PieChart from "../components/pieChart";
import { top20Currencies } from "../constant/topCurrencies";
import SpendDataGrid from "./spendDataGrid";
import { formatCurrency } from "../components/formatCurrency";
import { pieChartItems } from "../constant/pieChartItems";
import { profile } from "../constant/profile";

function earnGoal({ handleButtonClick }) {
  const [totalAmount, setTotalAmount] = useState(profile.earnAmount || 0);
  const [currency, setCurrency] = useState(profile.currency || "");
  const [totalSpent, setTotalSpent] = useState(0);
  const [category, setCategory] = useState("Summary");
  const [content, setContent] = useState("");
  const [isTyping, setIsTyping] = useState(false);

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

  function handleYearChange(event) {
    profile.goalYear = event.target.value;
  }

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
    profile.currency = e.target.value;
  };

  const handleAmountChange = (e) => {
    let inputAmount = e.target.value.replace(/[^0-9.]/g, ""); // only allow numbers and decimal point
    inputAmount = parseFloat(inputAmount) || 0;
    if (inputAmount > 1000000000) {
      inputAmount = 999999999;
    }
    profile.earnAmount = inputAmount;
    setTotalAmount(inputAmount);
  };

  const handlePieChartClick = (category) => {
    setCategory(category);
    setContent(
      <div>
        <SpendDataGrid category={category} setTotalSpent={setTotalSpent} />
      </div>
    );
  };

  return (
    <div className="rounded-lg bg-white p-4 shadow-md sm:p-6 md:p-8 lg:p-10">
      {category === "Summary" && (
        <div>
          <h1 className="mb-5 text-2xl font-bold">
            How much do you want to earn?
          </h1>
          <div className="mb-5 flex flex-row items-center justify-center">
            <div className="mr-5 text-lg font-bold">Earn</div>
            <select
              value={currency}
              onChange={handleCurrencyChange}
              className="focus:shadow-outline appearance-none rounded border border-gray-400 bg-white px-4 py-2 leading-tight shadow hover:border-gray-500 focus:outline-none"
            >
              {top20Currencies.map((cur) => (
                <option key={cur.flag} value={cur.code}>
                  {cur.code}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Enter amount"
              value={formatCurrency(profile.currency, totalAmount, isTyping)}
              onChange={handleAmountChange}
              onFocus={() => setIsTyping(true)}
              onBlur={() => setIsTyping(false)}
              className="focus:shadow-outline rounded border border-gray-400 bg-white px-4 py-2 text-right leading-tight shadow hover:border-gray-500 focus:outline-none"
            />
            <div className="mx-5 text-lg font-bold">By</div>
            <input
              type="number"
              placeholder="Year"
              maxLength="4"
              className="focus:shadow-outline rounded border border-gray-400 bg-white px-4 py-2 shadow hover:border-gray-500 focus:outline-none"
              onChange={handleYearChange}
            />
          </div>
        </div>
      )}
      <div className="flex flex-row justify-between p-4">
        <div className="mr-8 text-xl font-bold">
          {category === "Summary" ? (
            <div>Your spend summary in {profile.country} </div>
          ) : (
            <div>
              Current {category} in {profile.country}
            </div>
          )}
        </div>
        <div className="text-xl font-bold">
          Amount Remaining:{" "}
          {formatCurrency(
            profile.currency,
            profile.earnAmount - profile.spendAmount
          )}
        </div>
      </div>
      <div className={`grid ${category === "Summary" ? "md:grid-cols-4" : ""}`}>
        {category === "Summary" ? (
          pieChartItems.map((item) => (
            <Box key={item}>
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
          ))
        ) : (
          <div> {content} </div>
        )}
      </div>
      {category === "Summary" ? (
        <div className="mt-4">
          <button
            className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
            onClick={() => handleButtonClick(4)}
          >
            Continue
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
  );
}

export default earnGoal;
