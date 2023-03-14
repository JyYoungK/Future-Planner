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

function category({ category, currency, totalAmount, setTotalAmount }) {
  const [currentPage, setCurrentPage] = useState(1);
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
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
      minimumFractionDigits: 2,
    });
    return formatter.format(value);
  }

  function handlePreviousPageClick() {
    setCurrentPage(currentPage - 1);
  }

  function handleNextPageClick() {
    setCurrentPage(currentPage + 1);
  }

  function handleQuantityChange(name, quantity, maxPrice) {
    //First check if have enough budget
    if (quantity * maxPrice > totalAmount) {
      alert(
        "You cannot add any more item as you have exceeded your budget. Return to summary and increase your budget or lower the quantity of some items"
      );
    } else {
      // Find the item with the given name
      const item = items.find((item) => item.name === name);
      if (!item) return;

      // Update the item quantity
      item.quantity = quantity;

      // Update the state with the new item quantity
      setItems([...items]);
      setTotalAmount((totalAmount -= quantity * maxPrice));
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
              <th className="px-4 py-2 text-left">Min Price</th>
              {items[0]?.maxPrice && (
                <th className="px-4 py-2 text-left">Max Price</th>
              )}
              {/* <th className="px-4 py-2 text-left">-</th>
              <th className="px-4 py-2 text-left">+</th> */}
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
                  {toCurrencies(item.minPrice)}
                  {(item?.type === "Rent" || item?.type === "Util") && "/mon"}
                </td>
                {item?.maxPrice && (
                  <td className="border px-4 py-2">
                    {toCurrencies(item.maxPrice)}
                    {(item?.type === "Rent" || item?.type === "Util") && "/mon"}
                  </td>
                )}
                {/* <td className="border px-4 py-2">
                  <button className="rounded-lg bg-gray-200 px-4 py-2 font-bold hover:bg-gray-300">
                    -
                  </button>
                </td>
                <td className="border px-4 py-2">
                  <button className="rounded-lg bg-gray-200 px-4 py-2 font-bold hover:bg-gray-300">
                    +
                  </button>
                </td> */}
                <td className="border px-4 py-2">
                  <input
                    type="number"
                    min="0"
                    max="999"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(
                        item.name,
                        parseInt(e.target.value),
                        item.maxPrice
                      )
                    }
                    className="w-16 rounded-lg border px-2 py-1 text-center"
                  />
                </td>
                <td className="border px-4 py-2">
                  {item.minPrice * item.quantity}
                  {item?.maxPrice && " ~ " + item?.maxPrice * item.quantity}
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
        <div className="flex text-right">
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
      </div>
    </div>
  );
}

export default category;
