import { useState, useEffect } from "react";
import { profile } from "../../constant/profile";
import { top20Currencies } from "../../constant/topCurrencies";
import { formatCurrency } from "../../components/formatCurrency";

function generalInput({ totalAmount, setTotalAmount, setGeneralCheck }) {
  const [currency, setCurrency] = useState(profile.currency || "CAD");
  const [isTyping, setIsTyping] = useState(false);
  const [goalYear, setGoalYear] = useState(
    profile.goalYear || new Date().getFullYear()
  );
  function handleYearChange(event) {
    setGoalYear(event.target.value);
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

  useEffect(() => {
    if (totalAmount > 0) {
      setGeneralCheck(true);
    } else {
      setGeneralCheck(false);
    }
  }, [totalAmount]);

  return (
    <div className="flex flex-col items-center justify-center md:flex-row">
      <div className="mb-5 flex flex-row items-center justify-center whitespace-nowrap">
        <div className="mr-5 text-lg font-bold">Earn :</div>
        {/* <select
          value={currency}
          onChange={handleCurrencyChange}
          className="focus:shadow-outline appearance-none rounded border border-gray-400 bg-white px-4 py-2 leading-tight shadow hover:border-gray-500 focus:outline-none"
        >
          {top20Currencies.map((cur) => (
            <option key={cur.flag} value={cur.code}>
              {cur.code}
            </option>
          ))}
        </select> */}
        <input
          type="text"
          placeholder="Enter amount"
          value={formatCurrency(profile.currency, totalAmount, isTyping)}
          onChange={(e) => handleAmountChange(e)}
          onFocus={() => setIsTyping(true)}
          onBlur={() => setIsTyping(false)}
          className="focus:shadow-outline mt-2 w-full rounded border border-gray-400 bg-white px-4 py-2 text-right leading-tight text-black shadow hover:border-gray-500 focus:outline-none md:mt-0"
        />
      </div>
      <div className="mb-5 flex flex-row items-center justify-center whitespace-nowrap">
        <div className="mx-5 mt-2 text-lg font-bold md:mt-0">By :</div>
        <select
          value={goalYear}
          onChange={handleYearChange}
          className="focus:shadow-outline mt-2 w-full rounded border border-gray-400 bg-white px-4 py-2 text-black shadow hover:border-gray-500 focus:outline-none md:mt-0"
        >
          {Array.from({ length: 101 }, (_, i) => {
            const year = new Date().getFullYear() + 1 + i;
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default generalInput;
