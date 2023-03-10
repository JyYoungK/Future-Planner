import { useState } from "react";
import euroFlag from "../assets/euro.png";

function childrenGoal({ handleButtonClick }) {
  const [currency, setCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleCurrencyChange = (e) => {
    console.log(typeof e.target.value);
    setCurrency(e.target.value);
  };

  const handleAmountChange = (e) => {
    let inputAmount = e.target.value.replace(/[^0-9.]/g, ""); // only allow numbers and decimal point
    inputAmount = parseFloat(inputAmount);
    if (inputAmount > 1000000000) {
      inputAmount = 999999999;
    }

    setAmount(inputAmount);
  };

  const formatCurrency = (value) => {
    if (isTyping) {
      return value;
    } else {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 2,
      });
      return formatter.format(value);
    }
  };

  const top20Currencies = [
    { code: "USD", flag: "🇺🇸" },
    {
      code: "EUR",
      flag: euroFlag,
    },
    { code: "JPY", flag: "🇯🇵" },
    { code: "GBP", flag: "🇬🇧" },
    { code: "AUD", flag: "🇦🇺" },
    { code: "CAD", flag: "🇨🇦" },
    { code: "CHF", flag: "🇨🇭" },
    { code: "CNY", flag: "🇨🇳" },
    { code: "HKD", flag: "🇭🇰" },
    { code: "NZD", flag: "🇳🇿" },
    { code: "SEK", flag: "🇸🇪" },
    { code: "KRW", flag: "🇰🇷" },
    { code: "SGD", flag: "🇸🇬" },
    { code: "NOK", flag: "🇳🇴" },
    { code: "MXN", flag: "🇲🇽" },
    { code: "INR", flag: "🇮🇳" },
    { code: "RUB", flag: "🇷🇺" },
    { code: "ZAR", flag: "🇿🇦" },
    { code: "TRY", flag: "🇹🇷" },
    { code: "BRL", flag: "🇧🇷" },
  ];

  return (
    <div className="rounded-lg bg-white p-10 shadow-md">
      <h1 className="mb-5 text-2xl font-bold">How much do you want to earn?</h1>
      <div className="mb-5 flex items-center">
        <div className="relative mr-2 w-20">
          <div className="flex flex-row">
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
          </div>

          {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </div> */}
        </div>
        <input
          type="text"
          placeholder="Enter amount"
          min="0"
          max="1000"
          step="0.01"
          value={formatCurrency(amount)}
          onChange={handleAmountChange}
          onFocus={() => setIsTyping(true)}
          onBlur={() => setIsTyping(false)}
          className="focus:shadow-outline rounded border border-gray-400 bg-white px-4 py-2 text-right leading-tight shadow hover:border-gray-500 focus:outline-none"
        />
        <div className="mx-5 text-lg font-bold">By</div>
        <input
          type="number"
          placeholder="Year"
          min="0"
          max="99"
          maxLength="2"
          className="focus:shadow-outline appearance-none rounded border border-gray-400 bg-white px-4 py-2 leading-tight shadow hover:border-gray-500 focus:outline-none"
        />
      </div>
      <button
        className="rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
        onClick={() => handleButtonClick(2)}
      >
        Back
      </button>
    </div>
  );
}

export default childrenGoal;
