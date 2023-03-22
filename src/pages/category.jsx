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
  investing,
  customHouseAndUtilities,
  customFoodPlan,
  customInsurance,
  customMedicalHealthcare,
  customPersonalSpending,
  customSavingInvesting,
  customTransportation,
  customTravelRecreation,
} from "../constant/purchasable";
import { profile } from "../constant/profile";
import { DataGrid } from "@mui/x-data-grid";
import { formatCurrency } from "../components/formatCurrency";
import { useSelector } from "react-redux";
import store from "../redux/store";

function category({ category, currency, totalAmount, setTotalSpent }) {
  const [categoryTotalAmount, setCategoryTotalAmount] = useState(0);
  const [selectedRow, setSelectedRow] = useState(0);
  const categoryItems = getCategoryItems(category);

  const [rows, setRows] = useState([...categoryItems]);
  const [newItem, setNewItem] = useState({
    id: (parseInt(rows[rows.length - 1].id) + 1).toLocaleString(),
    type: "",
    name: "",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  });

  function getCategoryItems(category) {
    switch (category) {
      case "House & Utilities":
        return [
          ...customHouseAndUtilities,
          ...houseRent,
          ...houseBuy,
          ...utilities,
        ];
      case "Personal Spending":
        return [
          ...customPersonalSpending,
          ...personalItems,
          ...personalServices,
        ];
      case "Medical & Healthcare":
        return [...customMedicalHealthcare, ...healthcare];
      case "Transportation":
        return [...customTransportation, ...transportation];
      case "Food Plan":
        return [...customFoodPlan, ...food];
      case "Travel & Recreation":
        return [
          ...customTravelRecreation,
          ...recreationActivities,
          ...recreationStays,
        ];
      case "Insurance":
        return [...customInsurance, insurance];
      case "Saving & Investing":
        return [...customSavingInvesting, investing];
      default:
        return [];
    }
  }

  const selectRow = (params) => {
    setSelectedRow(parseInt(params.row.id));
  };

  const handleRowClick = (params) => {
    if (params.rows && selectedRow) {
      const { id, name, quantity, selectedPrice } =
        params.rows.idRowsLookup[selectedRow];

      if (quantity > 0) {
        const newPurchase = { id, name, selectedPrice, quantity };
        const existingPurchases = profile.purchased || {};
        const existingCategoryPurchases = existingPurchases[category] || {};

        if (existingCategoryPurchases[id]) {
          // If there is an existing purchase with the same id, update its quantity
          existingCategoryPurchases[id].quantity = quantity;
          existingCategoryPurchases[id].selectedPrice = selectedPrice;
        } else {
          // Otherwise, add the new purchase to the purchased object
          existingCategoryPurchases[id] = newPurchase;
          existingPurchases[category] = existingCategoryPurchases;
          profile.purchased = existingPurchases;
        }

        // Update the spendAmount in the profile object
        let totalCategorySpent = 0;
        for (const profileCategory in profile.purchased) {
          if (Object.hasOwnProperty.call(profile.purchased, profileCategory)) {
            const purchases = profile.purchased[profileCategory];
            let categoryTotal = 0;
            for (const purchaseId in purchases) {
              if (Object.hasOwnProperty.call(purchases, purchaseId)) {
                const purchase = purchases[purchaseId];
                if (typeof purchase === "object") {
                  categoryTotal += purchase.quantity * purchase.selectedPrice;
                  totalCategorySpent +=
                    purchase.quantity * purchase.selectedPrice;
                }
              }
            }
            profile.purchased[profileCategory].value = categoryTotal;
            setCategoryTotalAmount(categoryTotal);
          }
        }
        profile.spendAmount = totalCategorySpent;
        setTotalSpent(totalCategorySpent);
      }
    }
  };

  function handleAddItem() {
    // create a new item object with unique key
    const newId = parseInt(rows[rows.length - 1].id) + 1;
    const idExists = rows.some((row) => row.id === newId);
    if (idExists) {
      alert("Item with this ID already exists!");
      return;
    }

    const newItemObj = {
      id: newId.toLocaleString(),
      type: newItem.type,
      name: newItem.name,
      selectedPrice: newItem.selectedPrice,
      quantity: newItem.quantity,
      total: newItem.total,
    };

    setRows([...rows, newItemObj]);
    switch (category) {
      case "House & Utilities":
        customHouseAndUtilities.push(newItemObj);
        break;
      case "Personal Spending":
        customPersonalSpending.push(newItemObj);
        break;
      case "Medical & Healthcare":
        customMedicalHealthcare.push(newItemObj);
        break;
      case "Transportation":
        customTransportation.push(newItemObj);
        break;
      case "Food Plan":
        customFoodPlan.push(newItemObj);
        break;
      case "Travel & Recreation":
        customTravelRecreation.push(newItemObj);
        break;
      case "Insurance":
        customInsurance.push(newItemObj);
        break;
      case "Saving & Investing":
        customSavingInvesting.push(newItemObj);
        break;
    }

    // reset the newItem state
    setNewItem({
      id: (newId + 1).toLocaleString(),
      type: "",
      name: "",
      selectedPrice: 0,
      quantity: 0,
      total: 0,
    });
  }

  function handleNewItemChange(e) {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  }

  return (
    <div className="h-full w-full">
      <div className="mb-2 flex">
        <input
          type="text"
          placeholder="Type"
          name="type"
          value={newItem.type}
          onChange={handleNewItemChange}
          className="mr-2"
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newItem.name}
          onChange={handleNewItemChange}
          className="mr-2"
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={newItem.price}
          onChange={handleNewItemChange}
          className="mr-2"
        />
        <input
          type="number"
          placeholder="Quantity"
          name="quantity"
          value={newItem.quantity}
          onChange={handleNewItemChange}
          className="mr-2"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <div className="h-[350px] md:h-[550px] md:w-[800px]">
        <DataGrid
          autoPageSize
          rowHeight={30}
          rows={rows}
          columns={columns}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          onRowClick={selectRow}
          onStateChange={handleRowClick}
        />
      </div>
      <div className="mt-4 md:text-lg">
        Total: {formatCurrency(currency, categoryTotalAmount)}
      </div>
    </div>
  );
}

export default category;
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

{
  /* <div className="">
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
      </div> */
}
