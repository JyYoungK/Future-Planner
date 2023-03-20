import { useState, useEffect } from "react";
import {
  columns,
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
import { profile } from "../constant/profile";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Slider } from "@mui/material";
import { formatCurrency } from "../components/formatCurrency";

function category({
  category,
  currency,
  totalAmount,
  setTotalSpent,
  pieChartItems,
}) {
  const categoryItems = getCategoryItems(category);
  const rows = [...categoryItems];

  const [categoryTotal, setCategoryTotal] = useState(0);

  useEffect(() => {
    setCategoryTotal(profile.purchased[category]?.value);
  }, [category]);

  function getCategoryItems(category) {
    let items = [];
    switch (category) {
      case "House & Utilities":
        items = [...houseRent, ...houseBuy, ...utilities];
        break;
      case "Personal Spending":
        items = [...personalItems, ...personalServices];
        break;
      case "Medical & Healthcare":
        items = healthcare;
        break;
      case "Transportation":
        items = transportation;
        break;
      case "Food Plan":
        items = food;
        break;
      case "Travel & Recreation":
        items = [...recreationActivities, ...recreationStays];
        break;
      case "Saving & Investing":
        items = insurance;
        break;
      default:
        break;
    }

    // Generate a unique ID for each item
    items = items.map((item, index) => ({
      ...item,
      id: `${category}-${index}`,
    }));

    return items;
  }

  // function toCurrencies(value) {
  //   const symbols = ["", "K", "M", "B"]; // array of symbols to use for values in thousands and millions
  //   const formatter = new Intl.NumberFormat("en-US", {
  //     style: "currency",
  //     currency: currency,
  //     minimumFractionDigits: 0,
  //   });
  //   let symbolIndex = 0;
  //   while (value >= 1000 && symbolIndex < symbols.length - 1) {
  //     // loop until value is less than 1000 or all symbols have been used
  //     value /= 1000;
  //     symbolIndex++;
  //   }
  //   return formatter.format(value) + symbols[symbolIndex];
  // }

  // function handleItemChange(name, quantity, price) {
  //   //First check if have enough budget
  //   if (quantity * price > totalAmount) {
  //     alert(
  //       "You cannot add any more item as you have exceeded your budget. Return to summary and increase your budget or lower the quantity of some items"
  //     );
  //   } else {
  //     // Find the item with the given name
  //     const item = items.find((item) => item.name === name);
  //     if (!item) return;

  //     // Update the item quantity
  //     item.quantity = quantity;
  //     item.selectedPrice = price;

  //     // Update the pieChartItems with the new purchase information

  //     if (categoryToUpdate) {
  //       const existingPurchase =
  //         profile.purchased[categoryToUpdate.category]?.[name];
  //       if (existingPurchase) {
  //         existingPurchase.quantity = quantity;
  //         existingPurchase.price = price;
  //       } else {
  //         if (!profile.purchased[categoryToUpdate.category]) {
  //           profile.purchased[categoryToUpdate.category] = {};
  //         }
  //         profile.purchased[categoryToUpdate.category][name] = {
  //           quantity,
  //           price,
  //         };
  //       }
  //       let totalCategorySpent = 0;
  //       for (const profileCategory in profile.purchased) {
  //         console.log(profileCategory);
  //         if (Object.hasOwnProperty.call(profile.purchased, profileCategory)) {
  //           const purchases = profile.purchased[profileCategory];
  //           let categoryTotal = 0;
  //           for (const purchaseName in purchases) {
  //             if (Object.hasOwnProperty.call(purchases, purchaseName)) {
  //               const purchase = purchases[purchaseName];
  //               if (typeof purchase === "object") {
  //                 categoryTotal += purchase.quantity * purchase.price;
  //                 totalCategorySpent += purchase.quantity * purchase.price;
  //               }
  //             }
  //           }
  //           profile.purchased[profileCategory].value = categoryTotal;
  //         }
  //       }
  //       profile.spendAmount = totalCategorySpent;
  //       setTotalSpent(totalCategorySpent);
  //     } else {
  //       console.log("Category not found");
  //     }

  //     console.log(profile);
  //     // Update the state with the new item quantity
  //     setItems([...items]);
  //   }
  // }

  return (
    <div className="h-full w-full">
      {/* <Box m="40px 0 0 0" height="75vh">

      <DataGrid rows={mockDataContacts} columns={columns} editMode="cell" />
            </Box> */}
      <div className="h-[550px] w-[800px]">
        <DataGrid
          autoPageSize
          rows={rows}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
        />
      </div>

      {/* <div className="">
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
        <div>Total: {formatCurrency(currency, categoryTotal)}</div>
      </div> */}
    </div>
  );
}

export default category;
