import { useState, useEffect } from "react";
import {
  houseBuy,
  houseRent,
  transportation,
  food,
  utilities,
  insurance,
  healthcare,
  personalItems,
  personalServices,
  recreationActivities,
  recreationStays,
} from "../constant/purchasable";
import { formatCurrency2 } from "../components/formatCurrency";

function category({
  category,
  currency,
  totalAmount,
  setTotalSpent,
  pieChartItems,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryToUpdate, setCategoryToUpdate] = useState();
  const [categoryTotal, setCategoryTotal] = useState(0);

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const [items, setItems] = useState(
    getCategoryItems(category).slice(startIndex, endIndex)
  );

  const totalPages = Math.ceil(
    getCategoryItems(category).length / itemsPerPage
  );

  useEffect(() => {
    const findCategory = pieChartItems.find(
      (item) => item.category === category
    );
    setCategoryToUpdate(findCategory);
    setCategoryTotal(findCategory.value);
  });

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setItems(getCategoryItems(category).slice(startIndex, endIndex));
  }, [currentPage, category, itemsPerPage]);

  function getCategoryItems(category) {
    switch (category) {
      case "House & Utilities":
        return [...houseRent, ...houseBuy, ...utilities];
      case "Personal Spending":
        return [...personalItems, ...personalServices];
      case "Medical & Healthcare":
        return healthcare;
      case "Transportation":
        return transportation;
      case "Food Plan":
        return food;
      case "Travel & Recreation":
        return [...recreationActivities, ...recreationStays];
      case "Insurance":
        return insurance;

      default:
        return [];
    }
  }

  function toCurrencies(value) {
    const symbols = ["", "K", "M", "B"]; // array of symbols to use for values in thousands and millions
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 0,
    });
    let symbolIndex = 0;
    while (value >= 1000 && symbolIndex < symbols.length - 1) {
      // loop until value is less than 1000 or all symbols have been used
      value /= 1000;
      symbolIndex++;
    }
    return formatter.format(value) + symbols[symbolIndex];
  }

  function toNumber(currencyString) {
    if (typeof currencyString === "string") {
      const regex = /[^0-9.-]/g; // matches any character that is not a digit, dot, or minus sign
      const stringWithoutCurrency = currencyString.replace(regex, "");
      return stringWithoutCurrency;
    }
  }

  function handlePreviousPageClick() {
    setCurrentPage(currentPage - 1);
  }

  function handleNextPageClick() {
    setCurrentPage(currentPage + 1);
  }

  function handleItemChange(name, quantity, price) {
    //First check if have enough budget
    if (quantity * price > totalAmount) {
      alert(
        "You cannot add any more item as you have exceeded your budget. Return to summary and increase your budget or lower the quantity of some items"
      );
    } else {
      // Find the item with the given name
      const item = items.find((item) => item.name === name);
      if (!item) return;

      // Update the item quantity
      item.quantity = quantity;
      item.selectedPrice = price;

      // Update the pieChartItems with the new purchase information

      if (categoryToUpdate) {
        const existingPurchase = categoryToUpdate.purchased[name];
        if (existingPurchase) {
          existingPurchase.quantity = quantity;
          existingPurchase.price = price;
        } else {
          categoryToUpdate.purchased[name] = { quantity, price };
        }
        let sum = 0;
        for (const key in categoryToUpdate.purchased) {
          if (Object.hasOwnProperty.call(categoryToUpdate.purchased, key)) {
            const item = categoryToUpdate.purchased[key];
            sum += item.quantity * item.price;
          }
        }
        categoryToUpdate.value = sum;
        // Recalculate the total spent for all categories
        let total = 0;
        for (const item of pieChartItems) {
          total += item.value;
        }
        setTotalSpent(total);
      } else {
        console.log("Category not found");
      }

      console.log(pieChartItems);

      // Update the state with the new item quantity
      setItems([...items]);
    }
  }

  return (
    <div className="container mx-auto w-full px-4 py-8	">
      <div className="">
        <table className="w-full ">
          <thead>
            <tr>
              {items[0]?.type && <th className="px-4 py-2 text-left">Type</th>}
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Price</th>
              <th className="px-4 py-2 text-left">Quantity</th>
              <th className="px-4 py-2 text-left">Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.name}>
                {item?.type && (
                  <td className="border px-4 py-2">{item.type}</td>
                )}

                <td className="border px-4 py-2">{item.name}</td>
                <td className="border px-4 py-2">
                  <div className="flex flex-row items-center">
                    <div>
                      <div className="flex items-center">
                        <input
                          type="range"
                          min={item.minPrice}
                          max={item.maxPrice}
                          value={item.selectedPrice}
                          onChange={(e) =>
                            handleItemChange(
                              item.name,
                              item.quantity,
                              parseInt(e.target.value)
                            )
                          }
                          className="range mr-2 w-full"
                        />
                      </div>
                      <div className="flex justify-between">
                        <span>{toCurrencies(item.minPrice)}</span>
                        <span>{toCurrencies(item.maxPrice)}</span>
                      </div>
                    </div>
                    <input
                      type="number"
                      min={item.minPrice}
                      max={item.maxPrice}
                      value={item.selectedPrice}
                      onChange={(e) => {
                        const newValue = parseInt(e.target.value);
                        if (!isNaN(newValue)) {
                          handleItemChange(item.name, item.quantity, newValue);
                        }
                      }}
                      className="no-arrows ml-4 w-20 rounded-lg border py-1 px-2 text-center"
                    />
                    <div>
                      {item.selectedPrice < 1000 ? "" : "/ "}
                      {item.selectedPrice >= 1000 &&
                        toCurrencies(item.selectedPrice).slice(-1)}
                    </div>{" "}
                  </div>
                </td>
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    min="0"
                    max="999"
                    value={item.quantity}
                    onChange={(e) =>
                      handleItemChange(
                        item.name,
                        parseInt(e.target.value),
                        item.selectedPrice
                      )
                    }
                    onWheel={(e) => {
                      e.preventDefault();
                    }}
                    className="w-16 rounded-lg border px-2 py-1 text-center"
                  />
                </td>
                <td className="border px-4 py-2">
                  {item.selectedPrice * item.quantity}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          Showing page {currentPage} of {totalPages}
        </div>
        <div className="flex">
          <button
            className={`rounded-xl py-2 px-4 font-bold text-white  ${
              currentPage === 1
                ? "cursor-default bg-gray-400"
                : "bg-blue-500 hover:bg-blue-700"
            }`}
            disabled={currentPage === 1}
            onClick={handlePreviousPageClick}
          >
            Previous
          </button>
          <button
            className={`rounded-xl py-2 px-4 font-bold text-white  ${
              currentPage >= totalPages
                ? "cursor-default bg-gray-400"
                : "bg-blue-500 hover:bg-blue-700"
            }`}
            disabled={currentPage >= totalPages}
            onClick={handleNextPageClick}
          >
            Next
          </button>
        </div>
        <div>Total: {formatCurrency2(currency, categoryTotal)}</div>
      </div>
    </div>
  );
}

export default category;
