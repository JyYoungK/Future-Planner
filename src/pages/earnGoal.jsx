import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import PieChart from "../components/pieChart";
import { top20Currencies } from "../constant/topCurrencies";
import Category from "./category";
import { formatCurrency, formatCurrency2 } from "../components/formatCurrency";
import { pieChartItems } from "../constant/pieChartItems";

function earnGoal({ handleButtonClick, country }) {
  const [currency, setCurrency] = useState("USD");
  const [isTyping, setIsTyping] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const [totalSpent, setTotalSpent] = useState(0);
  const [category, setCategory] = useState("Summary");
  const [content, setContent] = useState("");

  useEffect(() => {
    const matchingCurrency = top20Currencies.find((c) => c.country === country);
    if (matchingCurrency) {
      setCurrency(matchingCurrency.code);
    } else {
      setCurrency("USD");
    }
  }, []);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    let inputAmount = e.target.value.replace(/[^0-9.]/g, ""); // only allow numbers and decimal point
    inputAmount = parseFloat(inputAmount);
    if (inputAmount > 1000000000) {
      inputAmount = 999999999;
    }
    setTotalAmount(inputAmount);
  };

  const handlePieChartClick = (category) => {
    setCategory(category);
    setContent(
      <div>
        <Category
          category={category}
          currency={currency}
          totalAmount={totalAmount}
          setTotalSpent={setTotalSpent}
          pieChartItems={pieChartItems}
        />
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
              min="0"
              max="1000"
              step="0.01"
              value={formatCurrency(isTyping, currency, totalAmount)}
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
            />
          </div>
        </div>
      )}
      <div className="flex flex-row justify-between p-4">
        <div className="mr-8 text-xl font-bold">
          {category === "Summary" ? (
            <div>Your spend summary in {country} </div>
          ) : (
            <div>
              Current {category} in {country}
            </div>
          )}
        </div>
        <div className="text-xl font-bold">
          Amount Remaining:{" "}
          {formatCurrency2(currency, totalAmount - totalSpent)}
        </div>
      </div>
      <div className={`grid ${category === "Summary" ? "md:grid-cols-4" : ""}`}>
        {category === "Summary" ? (
          pieChartItems.map((item) => (
            <Box key={item.category}>
              <PieChart
                title={item.category}
                currency={currency}
                value={item.value}
                series={[parseInt((item.value / totalAmount) * 100)]}
                onClick={() => handlePieChartClick(item.category)}
              />
            </Box>
          ))
        ) : (
          <div> {content} </div>
        )}
      </div>
      {category === "Summary" ? (
        <button
          className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
          onClick={() => handleButtonClick(2)}
        >
          Back
        </button>
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
