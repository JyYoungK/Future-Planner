import { useState } from "react";
import { Slider, Input } from "@mui/material";
import { profile } from "./profile";

//https://www.quicken.com/blog/budget-categories/

function toCurrencies(value) {
  const symbols = ["", "K", "M", "B"]; // array of symbols to use for values in thousands and millions
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: profile.currency,
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

function CustomSlider({ row, onPriceChange }) {
  const [isTyping, setIsTyping] = useState(false);
  const [value, setValue] = useState(
    row.selectedPrice !== 0 ? row.selectedPrice : row.minPrice
  );

  const handleSliderChange = (event, newValue) => {
    if (profile.earnAmount < row.quantity * newValue) {
      alert(
        "You cannot increase the price of this item as you have exceeded your budget. Return to summary and increase your budget or lower the price of this item"
      );
    } else {
      setValue(newValue);
      onPriceChange(newValue);
    }
  };

  const handleInputChange = (event, newValue) => {
    if (profile.earnAmount < row.quantity * newValue) {
      alert(
        "You cannot increase the price of this item as you have exceeded your budget. Return to summary and increase your budget or lower the price of this item"
      );
    } else {
      let newValue = event.target.value;
      if (/^0/.test(newValue)) {
        newValue = newValue.replace(/^0+/, "");
      }
      setValue(newValue === "" ? "" : Number(newValue));
      onPriceChange(Number(newValue));
    }
  };

  const handleBlur = () => {
    if (value < row.minPrice) {
      setValue(row.minPrice);
      onPriceChange(row.minPrice);
    } else if (value > row.maxPrice) {
      setValue(row.maxPrice);
      onPriceChange(row.maxPrice);
    }
  };

  return (
    <>
      <Slider
        className="m-4 w-3/5"
        value={typeof value === "number" ? value : row.minPrice}
        size="small"
        onChange={handleSliderChange}
        aria-label="Small"
        valueLabelDisplay="auto"
        min={row.minPrice}
        max={
          row.maxPrice === "inf"
            ? profile.earnAmount - profile.spendAmount
            : row.maxPrice
        }
      />
      <input
        className="no-arrows w-2/5"
        value={value}
        onChange={handleInputChange}
        onBlur={handleBlur}
        onFocus={() => setIsTyping(true)}
        min={row.minPrice}
        max={
          row.maxPrice === "inf"
            ? profile.earnAmount - profile.spendAmount
            : row.maxPrice
        }
        type="number"
        style={{ backgroundColor: "transparent", color: "white" }}
      />
    </>
  );
}

function CustomQuantity({ row, onQuantityChange }) {
  const [value, setValue] = useState(row.quantity);

  const handleInputChange = (event) => {
    let newValue = event.target.value;
    if (/^0/.test(newValue)) {
      newValue = newValue.replace(/^0+/, "");
    }
    const newQuantity = newValue === "" ? "" : Number(newValue);
    if (newQuantity * row.selectedPrice > profile.earnAmount) {
      alert(
        "You cannot increase the quantity of this item as you have exceeded your budget. Return to summary and increase your budget or lower the quantity of this item"
      );
    } else if (newQuantity < 0) {
      alert("Quantity cannot be negative");
    } else {
      setValue(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <input
      className="no-arrows w-full"
      value={value}
      onChange={handleInputChange}
      type="number"
      style={{ backgroundColor: "transparent", color: "white" }}
    />
  );
}

// const handleTotalAmountChange = (row) => {
//   const existingRow = store.getState().rows.find((r) => r.id === row.id);
//   if (!existingRow) {
//     store.dispatch({
//       type: "ADD_ITEM",
//       payload: row,
//     });
//   } else {
//     store.dispatch({
//       type: "UPDATE_ITEM",
//       payload: {
//         id: row.id + row.name,
//         totalPrice: row.quantity * row.selectedPrice,
//       },
//     });
//   }
// };

export const columns = [
  { field: "id", headerName: "ID", hide: true },
  {
    field: "type",
    headerName: "Type",
  },
  {
    field: "name",
    headerName: "Name",
    width: 400,
    minWidth: 150,
    maxWidth: 600,
  },
  {
    field: "selectedPrice",
    headerName: "Price",
    width: 400,
    minWidth: 150,
    maxWidth: 500,
    renderCell: (params) => {
      return (
        <CustomSlider
          row={params.row}
          onPriceChange={(newValue) => {
            params.row.selectedPrice = newValue;
          }}
        />
      );
    },
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 200,
    minWidth: 150,
    maxWidth: 500,
    renderCell: (params) => {
      return (
        <CustomQuantity
          row={params.row}
          onQuantityChange={(newValue) => {
            params.row.quantity = newValue;
          }}
        />
      );
    },
  },
  {
    field: "total",
    headerName: "Total",
    width: 400,
    minWidth: 150,
    maxWidth: 600,
    renderCell: (params) => {
      params.total = params.row.selectedPrice * params.row.quantity;
      const total = params.row.selectedPrice * params.row.quantity;
      // handleTotalAmountChange(params.row);
      return toCurrencies(total);
    },
  },
];

//Housing (25~35%)
export const houseRent = [
  {
    id: "1",
    type: "Rent",
    name: "Small apartment (Monthly Rent)",
    minPrice: 500,
    maxPrice: 2000,
    selectedPrice: 500,
    quantity: 0,
    total: 0,
  },
  {
    id: "2",
    type: "Rent",
    name: "Luxury apartment (Monthly Rent)",
    minPrice: 5000,
    maxPrice: 15000,
    selectedPrice: 5000,
    quantity: 0,
    total: 0,
  },
  {
    id: "3",
    type: "Rent",
    name: "Luxury villa (Monthly Rent)",
    minPrice: 15000,
    maxPrice: 25000,
    selectedPrice: 15000,
    quantity: 0,
    total: 0,
  },
];

export const houseBuy = [
  {
    id: "4",
    type: "Buy",
    name: "Condo in downtown area",
    minPrice: 500000,
    maxPrice: 1000000,
    selectedPrice: 500000,
    quantity: 0,
    total: 0,
  },
  {
    id: "5",
    type: "Buy",
    name: "Single-family house",
    minPrice: 700000,
    maxPrice: 2000000,
    selectedPrice: 700000,
    quantity: 0,
    total: 0,
  },
  {
    id: "6",
    type: "Buy",
    name: "Luxury townhouse",
    minPrice: 2000000,
    maxPrice: 5000000,
    selectedPrice: 2000000,
    quantity: 0,
    total: 0,
  },
  {
    id: "7",
    type: "Buy",
    name: "Waterfront mansion",
    minPrice: 10000000,
    maxPrice: 25000000,
    selectedPrice: 10000000,
    quantity: 0,
    total: 0,
  },
  {
    id: "8",
    type: "Buy",
    name: "High-rise penthouse",
    minPrice: 5000000,
    maxPrice: 10000000,
    selectedPrice: 5000000,
    quantity: 0,
    total: 0,
  },
  {
    id: "9",
    type: "Buy",
    name: "Large country estate",
    minPrice: 2000000,
    maxPrice: 10000000,
    selectedPrice: 2000000,
    quantity: 0,
    total: 0,
  },
  {
    id: "10",
    type: "Buy",
    name: "Private island",
    minPrice: 50000000,
    maxPrice: 100000000,
    selectedPrice: 50000000,
    quantity: 0,
    total: 0,
  },
];

//Monthlyities (5~10%)
export const utilities = [
  {
    id: "11",
    type: "Util",
    name: "Electricity (Monthly Fee)",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
  },
  {
    id: "12",
    type: "Util",
    name: "Water (Monthly Fee)",
    minPrice: 30,
    maxPrice: 100,
    selectedPrice: 30,
    quantity: 0,
    total: 0,
  },
  {
    id: "13",
    type: "Util",
    name: "Gas (Monthly Fee)",
    minPrice: 20,
    maxPrice: 100,
    selectedPrice: 20,
    quantity: 0,
    total: 0,
  },
  {
    id: "14",
    type: "Util",
    name: "Internet (Monthly Fee)",
    minPrice: 50,
    maxPrice: 100,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
  },
  {
    id: "15",
    type: "Util",
    name: "Cable TV (Monthly Fee)",
    minPrice: 30,
    maxPrice: 100,
    selectedPrice: 30,
    quantity: 0,
    total: 0,
  },
];

//Transportation (10~15%)
export const transportation = [
  {
    id: "1",
    name: "Subway/Transit (Once)",
    minPrice: 3,
    maxPrice: 10,
    selectedPrice: 3,
    type: "Transit",
    quantity: 0,
    total: 0,
  },
  {
    id: "2",
    name: "Subway/Transit (Day Pass)",
    minPrice: 15,
    maxPrice: 30,
    selectedPrice: 3,
    type: "Transit",
    quantity: 0,
    total: 0,
  },
  {
    id: "3",
    name: "Subway/Transit (Monthly Pass)",
    minPrice: 100,
    maxPrice: 150,
    selectedPrice: 100,
    type: "Transit",
    quantity: 0,
    total: 0,
  },
  {
    id: "4",
    name: "Uber/Lyft ride",
    minPrice: 10,
    maxPrice: 250,
    selectedPrice: 10,
    type: "Ride",
    quantity: 0,
    total: 0,
  },
  {
    id: "5",
    name: "Domestic flight",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 100,
    type: "Flight",
    quantity: 0,
    total: 0,
  },
  {
    id: "6",
    name: "International flight",
    minPrice: 300,
    maxPrice: 2500,
    selectedPrice: 300,
    type: "Flight",
    quantity: 0,
    total: 0,
  },
  {
    id: "7",
    name: "Car Gas",
    minPrice: 10,
    maxPrice: 200,
    selectedPrice: 10,
    type: "Gas",
    quantity: 0,
    total: 0,
  },
];

//Food (10~15%)
export const food = [
  {
    id: "1",
    name: "Grocery",
    minPrice: 5,
    maxPrice: 300,
    selectedPrice: 5,
    quantity: 0,
    total: 0,
    type: "Grocery",
  },
  {
    id: "2",
    name: "Delivery food",
    minPrice: 15,
    maxPrice: 50,
    selectedPrice: 15,
    quantity: 0,
    total: 0,
    type: "Delivery",
  },
  {
    id: "3",
    name: "Takeout",
    minPrice: 10,
    maxPrice: 50,
    selectedPrice: 10,
    quantity: 0,
    total: 0,
    type: "Dine Out",
  },
  {
    id: "4",
    name: "Cheap restaurant",
    minPrice: 10,
    maxPrice: 20,
    selectedPrice: 10,
    quantity: 0,
    total: 0,
    type: "Dine In",
  },
  {
    id: "5",
    name: "Expensive restaurant",
    minPrice: 30,
    maxPrice: 200,
    selectedPrice: 30,
    quantity: 0,
    total: 0,
    type: "Dine In",
  },
];

//Healthcare (5~10%)
export const healthcare = [
  {
    id: "1",
    name: "Psychology care",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Service",
  },
  {
    id: "2",
    name: "Dermatology care",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Service",
  },
  {
    id: "3",
    name: "Dental care",
    minPrice: 50,
    maxPrice: 300,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
    type: "Service",
  },
  {
    id: "4",
    name: "Urgent care",
    minPrice: 100,
    maxPrice: 300,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Service",
  },
  {
    id: "5",
    name: "Prescriptions and OTC medications",
    minPrice: 10,
    maxPrice: 100,
    selectedPrice: 10,
    quantity: 0,
    total: 0,
    type: "Item",
  },
  {
    id: "6",
    name: "Supplements and vitamins",
    minPrice: 10,
    maxPrice: 50,
    selectedPrice: 10,
    quantity: 0,
    total: 0,
    type: "Item",
  },
  {
    id: "7",
    name: "Medical devices and supplies",
    minPrice: 20,
    maxPrice: 200,
    selectedPrice: 20,
    quantity: 0,
    total: 0,
    type: "Item",
  },
];

//PersonalSpending (5~10%)
export const personalItems = [
  {
    id: "1",
    type: "Item",
    name: "Toothbrush",
    minPrice: 1,
    maxPrice: 5,
    selectedPrice: 1,
    quantity: 0,
    total: 0,
  },
  {
    id: "2",
    type: "Item",
    name: "Pen",
    minPrice: 2,
    maxPrice: 10,
    selectedPrice: 2,
    quantity: 0,
    total: 0,
  },
  {
    id: "3",
    type: "Item",
    name: "Notebook",
    minPrice: 3,
    maxPrice: 15,
    selectedPrice: 3,
    quantity: 0,
    total: 0,
  },
  {
    id: "4",
    type: "Item",
    name: "T-shirt",
    minPrice: 10,
    maxPrice: 500,
    selectedPrice: 10,
    quantity: 0,
    total: 0,
  },
  {
    id: "5",
    type: "Item",
    name: "Umbrella",
    minPrice: 15,
    maxPrice: 50,
    selectedPrice: 15,
    quantity: 0,
    total: 0,
  },
  {
    id: "6",
    type: "Item",
    name: "Earrings",
    minPrice: 20,
    maxPrice: 20000,
    selectedPrice: 20,
    quantity: 0,
    total: 0,
  },
  {
    id: "7",
    type: "Item",
    name: "Running shoes",
    minPrice: 50,
    maxPrice: 1000,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
  },
  {
    id: "8",
    type: "Item",
    name: "Bluetooth speaker",
    minPrice: 60,
    maxPrice: 200,
    selectedPrice: 60,
    quantity: 0,
    total: 0,
  },
  {
    id: "9",
    type: "Item",
    name: "Tablet",
    minPrice: 100,
    maxPrice: 2000,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
  },
  {
    id: "10",
    type: "Item",
    name: "Slow cooker",
    minPrice: 150,
    maxPrice: 700,
    selectedPrice: 150,
    quantity: 0,
    total: 0,
  },
  {
    id: "11",
    type: "Item",
    name: "Smartwatch",
    minPrice: 200,
    maxPrice: 1000,
    selectedPrice: 200,
    quantity: 0,
    total: 0,
  },
  {
    id: "12",
    type: "Item",
    name: "Digital camera",
    minPrice: 250,
    maxPrice: 5500,
    selectedPrice: 250,
    quantity: 0,
    total: 0,
  },
  {
    id: "13",
    type: "Item",
    name: "Wireless headphones",
    minPrice: 300,
    maxPrice: 2000,
    selectedPrice: 300,
    quantity: 0,
    total: 0,
  },
  {
    id: "14",
    type: "Item",
    name: "Smart thermostat",
    minPrice: 150,
    maxPrice: 500,
    selectedPrice: 150,
    quantity: 0,
    total: 0,
  },
  {
    id: "15",
    type: "Item",
    name: "Robot vacuum",
    minPrice: 400,
    maxPrice: 3000,
    selectedPrice: 400,
    quantity: 0,
    total: 0,
  },
  {
    id: "16",
    type: "Item",
    name: "Drone",
    minPrice: 500,
    maxPrice: 3500,
    selectedPrice: 500,
    quantity: 0,
    total: 0,
  },
  {
    id: "17",
    type: "Item",
    name: "Electric guitar",
    minPrice: 600,
    maxPrice: 4000,
    selectedPrice: 600,
    quantity: 0,
    total: 0,
  },
  {
    id: "18",
    type: "Item",
    name: "Gaming console",
    minPrice: 700,
    maxPrice: 5000,
    selectedPrice: 700,
    quantity: 0,
    total: 0,
  },
  {
    id: "19",
    type: "Item",
    name: "Mountain bike",
    minPrice: 800,
    maxPrice: 6000,
    selectedPrice: 800,
    quantity: 0,
    total: 0,
  },
  {
    id: "20",
    type: "Item",
    name: "High-end laptop",
    minPrice: 1500,
    maxPrice: 10000,
    selectedPrice: 1500,
    quantity: 0,
    total: 0,
  },
  {
    id: "21",
    type: "Item",
    name: "Apple MacBook Pro",
    minPrice: 1500,
    maxPrice: 3500,
    selectedPrice: 1500,
    quantity: 0,
    total: 0,
  },
  {
    id: "22",
    type: "Item",
    name: "DSLR camera",
    minPrice: 2000,
    maxPrice: 15000,
    selectedPrice: 2000,
    quantity: 0,
    total: 0,
  },
  {
    id: "23",
    type: "Item",
    name: "4K Ultra HD TV",
    minPrice: 3000,
    maxPrice: 15000,
    selectedPrice: 3000,
    quantity: 0,
    total: 0,
  },
  {
    id: "24",
    type: "Item",
    name: "Piano",
    minPrice: 4000,
    maxPrice: 100000,
    selectedPrice: 4000,
    quantity: 0,
    total: 0,
  },
  {
    id: "25",
    type: "Item",
    name: "Rolex watch",
    minPrice: 5000,
    maxPrice: 50000,
    selectedPrice: 5000,
    quantity: 0,
    total: 0,
  },
  {
    id: "26",
    type: "Item",
    name: "Custom-built gaming PC",
    minPrice: 6000,
    maxPrice: 100000,
    selectedPrice: 6000,
    quantity: 0,
    total: 0,
  },
  {
    id: "27",
    type: "Item",
    name: "Diamond engagement ring",
    minPrice: 10000,
    maxPrice: 1000000,
    selectedPrice: 10000,
    quantity: 0,
    total: 0,
  },
  {
    id: "28",
    type: "Item",
    name: "Designer handbag",
    minPrice: 12000,
    maxPrice: 50000,
    selectedPrice: 12000,
    quantity: 0,
    total: 0,
  },
  {
    id: "29",
    type: "Item",
    name: "Luxury Swiss watch",
    minPrice: 15000,
    maxPrice: 200000,
    selectedPrice: 15000,
    quantity: 0,
    total: 0,
  },
  {
    id: "30",
    type: "Item",
    name: "Speedboat",
    minPrice: 25000,
    maxPrice: 1000000,
    selectedPrice: 25000,
    quantity: 0,
    total: 0,
  },
  {
    id: "31",
    type: "Item",
    name: "Luxury sports car",
    minPrice: 50000,
    maxPrice: 5000000,
    selectedPrice: 50000,
    quantity: 0,
    total: 0,
  },
  {
    id: "32",
    type: "Item",
    name: "Tesla Model S",
    minPrice: 100000,
    maxPrice: 500000,
    selectedPrice: 100000,
    quantity: 0,
    total: 0,
  },
  {
    id: "33",
    type: "Item",
    name: "Superyacht",
    minPrice: 200000,
    maxPrice: 10000000,
    selectedPrice: 200000,
    quantity: 0,
    total: 0,
  },
  {
    id: "34",
    type: "Item",
    name: "Original artwork",
    minPrice: 2000000,
    maxPrice: 50000000,
    selectedPrice: 2000000,
    quantity: 0,
    total: 0,
  },
  {
    id: "35",
    type: "Item",
    name: "Cruise ship",
    minPrice: 500000000,
    maxPrice: 1000000000,
    selectedPrice: 500000000,
    quantity: 0,
    total: 0,
  },
  {
    id: "36",
    type: "Item",
    name: "Space tourism ticket",
    minPrice: 250000000,
    maxPrice: 500000000,
    selectedPrice: 250000000,
    quantity: 0,
    total: 0,
  },
];

export const personalServices = [
  // {
  //   id: "1",
  //   name: "Meal delivery service",
  //   minPrice: 8,
  //   maxPrice: 15,
  //   selectedPrice: 8,
  //   type: "Once",
  //   quantity: 0,
  //   total: 0,
  // },
  {
    id: "2",
    name: "Haircut",
    minPrice: 10,
    maxPrice: 100,
    selectedPrice: 10,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "47",
    name: "Hair Styling",
    minPrice: 30,
    maxPrice: 1000,
    selectedPrice: 10,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "3",
    name: "Massage",
    minPrice: 50,
    maxPrice: 200,
    selectedPrice: 50,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "4",
    name: "House cleaning",
    minPrice: 50,
    maxPrice: 200,
    selectedPrice: 50,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "5",
    name: "Plumbing service",
    minPrice: 100,
    maxPrice: 300,
    selectedPrice: 100,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "6",
    name: "Electrical repair",
    minPrice: 50,
    maxPrice: 500,
    selectedPrice: 50,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "7",
    name: "Car wash",
    minPrice: 10,
    maxPrice: 50,
    selectedPrice: 10,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "8",
    name: "Car detailing",
    minPrice: 100,
    maxPrice: 300,
    selectedPrice: 100,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "9",
    name: "Pest control",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 100,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "10",
    name: "Pet grooming",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 50,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "11",
    name: "Dog walking",
    minPrice: 10,
    maxPrice: 50,
    selectedPrice: 10,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "12",
    name: "Tutoring services",
    minPrice: 20,
    maxPrice: 100,
    selectedPrice: 20,
    type: "Service",
    quantity: 0,
    total: 0,
  },

  {
    id: "13",
    name: "Interior design consultation",
    minPrice: 100,
    maxPrice: 300,
    selectedPrice: 100,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "14",
    name: "Home organization services",
    minPrice: 50,
    maxPrice: 200,
    selectedPrice: 50,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "15",
    name: "Event planning services",
    minPrice: 500,
    maxPrice: 5000,
    selectedPrice: 500,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "16",
    name: "Wedding planning services",
    minPrice: 1000,
    maxPrice: 10000,
    selectedPrice: 1000,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "17",
    name: "Photography services",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 100,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "18",
    name: "Videography services",
    minPrice: 500,
    maxPrice: 2000,
    selectedPrice: 500,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "19",
    name: "Graphic design services",
    minPrice: 50,
    maxPrice: 500,
    selectedPrice: 50,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "20",
    name: "Website development services",
    minPrice: 500,
    maxPrice: 5000,
    selectedPrice: 500,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "21",
    name: "Tax preparation services",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 100,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "22",
    name: "Home renovation services",
    min_price: 5000,
    max_price: 50000,
    selectedPrice: 5000,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "23",
    name: "Moving services",
    min_price: 500,
    max_price: 5000,
    selectedPrice: 500,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "24",
    name: "Legal services (Hourly)",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 100,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "25",
    name: "Accounting services (Hourly)",
    minPrice: 50,
    maxPrice: 500,
    selectedPrice: 50,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "26",
    name: "Financial planning services (Hourly)",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 100,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "27",
    name: "Career counseling services (Hourly)",
    minPrice: 50,
    maxPrice: 200,
    selectedPrice: 50,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "28",
    name: "Business coaching services (Hourly)",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 100,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "29",
    name: "Interpretation services (Hourly)",
    min_price: 50,
    max_price: 150,
    selectedPrice: 50,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "30",
    name: "Social media management services (Monthly)",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 100,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "31",
    name: "Public relations services (Monthly)",
    minPrice: 1000,
    maxPrice: 10000,
    selectedPrice: 1000,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "32",
    name: "Executive coaching services (Monthly)",
    minPrice: 500,
    maxPrice: 2000,
    selectedPrice: 500,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "44",
    name: "Nutrition consultation (Monthly)",
    minPrice: 100,
    maxPrice: 300,
    selectedPrice: 100,
    type: "Service",
    quantity: 0,
    total: 0,
  },
  {
    id: "45",
    name: "Landscaping (Monthly)",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 100,
    type: "Service",
    quantity: 0,
    total: 0,
  },

  {
    id: "41",
    name: "Show streaming/Netflix (Monthly)",
    minPrice: 9,
    maxPrice: 18,
    selectedPrice: 9,
    type: "Subscription",
    quantity: 0,
    total: 0,
  },

  {
    id: "42",
    name: "Music streaming/Spotify (Monthly)",
    minPrice: 5,
    maxPrice: 15,
    selectedPrice: 5,
    type: "Subscription",
    quantity: 0,
    total: 0,
  },
  {
    id: "33",
    name: "Yoga class (Monthly)",
    minPrice: 10,
    maxPrice: 30,
    selectedPrice: 10,
    type: "Membership",
    quantity: 0,
    total: 0,
  },
  {
    id: "34",
    name: "Cooking classes (Monthly)",
    min_price: 50,
    max_price: 200,
    selectedPrice: 50,
    type: "Membership",
    quantity: 0,
    total: 0,
  },
  {
    id: "35",
    name: "Art classes (Monthly)",
    min_price: 50,
    max_price: 200,
    selectedPrice: 50,
    type: "Membership",
    quantity: 0,
    total: 0,
  },
  {
    id: "36",
    name: "Gym Membership (Monthly)",
    min_price: 30,
    max_price: 300,
    selectedPrice: 30,
    type: "Membership",
    quantity: 0,
    total: 0,
  },
  {
    id: "37",
    name: "Meditation classes (Monthly)",
    min_price: 30,
    max_price: 200,
    selectedPrice: 30,
    type: "Membership",
    quantity: 0,
    total: 0,
  },
  {
    id: "38",
    name: "Music lessons (Monthly)",
    min_price: 50,
    max_price: 200,
    selectedPrice: 50,
    type: "Membership",
    quantity: 0,
    total: 0,
  },
  {
    id: "39",
    name: "Dance lessons (Monthly)",
    min_price: 100,
    max_price: 400,
    selectedPrice: 100,
    type: "Membership",
    quantity: 0,
    total: 0,
  },
  {
    id: "40",
    name: "Language lessons (Monthly)",
    min_price: 20,
    max_price: 100,
    selectedPrice: 20,
    type: "Membership",
    quantity: 0,
    total: 0,
  },

  {
    id: "43",
    name: "Personal training session (Monthly)",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 50,
    type: "Membership",
    quantity: 0,
    total: 0,
  },

  {
    id: "46",
    name: "Private jet membership (Monthly)",
    minPrice: 15000,
    maxPrice: 50000,
    selectedPrice: 15000,
    type: "Membership",
    quantity: 0,
    total: 0,
  },
];

//Recreation (5~10%)
export const recreationActivities = [
  {
    id: "1",
    name: "Movie tickets",
    minPrice: 10,
    maxPrice: 20,
    selectedPrice: 10,
    quantity: 0,
    total: 0,
    type: "Ticket",
  },
  {
    id: "2",
    name: "Concert tickets",
    minPrice: 50,
    maxPrice: 200,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
    type: "Ticket",
  },
  {
    id: "3",
    name: "Sports events tickets",
    minPrice: 30,
    maxPrice: 200,
    selectedPrice: 30,
    quantity: 0,
    total: 0,
    type: "Ticket",
  },
  {
    id: "4",
    name: "Museum admission fees",
    minPrice: 10,
    maxPrice: 30,
    selectedPrice: 10,
    quantity: 0,
    total: 0,
    type: "Ticket",
  },
  {
    id: "5",
    name: "Theme park tickets",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
    type: "Ticket",
  },
  {
    id: "6",
    name: "Zoo or aquarium admission fees",
    minPrice: 10,
    maxPrice: 30,
    selectedPrice: 10,
    quantity: 0,
    total: 0,
    type: "Ticket",
  },
  {
    id: "19",
    name: "Ski lift tickets",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
    type: "Ticket",
  },
  {
    id: "7",
    name: "Scuba diving",
    minPrice: 100,
    maxPrice: 300,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Activity",
  },
  {
    id: "8",
    name: "Skydiving",
    minPrice: 200,
    maxPrice: 500,
    selectedPrice: 200,
    quantity: 0,
    total: 0,
    type: "Activity",
  },
  {
    id: "9",
    name: "Bungee jumping",
    minPrice: 50,
    maxPrice: 200,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
    type: "Activity",
  },
  {
    id: "10",
    name: "Jet skiing",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
    type: "Activity",
  },
  {
    id: "13",
    name: "Horseback riding",
    minPrice: 30,
    maxPrice: 100,
    selectedPrice: 30,
    quantity: 0,
    total: 0,
    type: "Activity",
  },
  {
    id: "14",
    name: "Zip-lining",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
    type: "Activity",
  },
  {
    id: "15",
    name: "Rock climbing",
    minPrice: 20,
    maxPrice: 80,
    selectedPrice: 20,
    quantity: 0,
    total: 0,
    type: "Activity",
  },
  {
    id: "16",
    name: "White water rafting",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
    type: "Activity",
  },
  {
    id: "21",
    name: "Hot air balloon ride",
    minPrice: 100,
    maxPrice: 300,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Activity",
  },
  {
    id: "11",
    name: "Kayaking or canoeing Rentals",
    minPrice: 20,
    maxPrice: 50,
    selectedPrice: 20,
    quantity: 0,
    total: 0,
    type: "Rental",
  },
  {
    id: "12",
    name: "Fishing gear Rentals",
    minPrice: 20,
    maxPrice: 50,
    selectedPrice: 20,
    quantity: 0,
    total: 0,
    type: "Rental",
  },
  {
    id: "17",
    name: "Camping gear Rentals",
    minPrice: 30,
    maxPrice: 100,
    selectedPrice: 30,
    quantity: 0,
    total: 0,
    type: "Rental",
  },
  {
    id: "18",
    name: "Ski or snowboard Rentals",
    minPrice: 30,
    maxPrice: 80,
    selectedPrice: 30,
    quantity: 0,
    total: 0,
    type: "Rental",
  },
  {
    id: "20",
    name: "Snowmobile Rentals",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
    type: "Rental",
  },
];

export const recreationStays = [
  {
    id: "22",
    name: "Budget hotel (/Night)",
    minPrice: 50,
    maxPrice: 100,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
    type: "Accomodation",
  },
  {
    id: "23",
    name: "Mid-range hotel (/Night)",
    minPrice: 100,
    maxPrice: 200,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Accomodation",
  },
  {
    id: "24",
    name: "Luxury hotel (/Night)",
    minPrice: 200,
    maxPrice: 500,
    selectedPrice: 200,
    quantity: 0,
    total: 0,
    type: "Accomodation",
  },
  {
    id: "25",
    name: "Hostel (/Night)",
    minPrice: 20,
    maxPrice: 50,
    selectedPrice: 20,
    quantity: 0,
    total: 0,
    type: "Accomodation",
  },
  {
    id: "26",
    name: "Airbnb private room (/Night)",
    minPrice: 30,
    maxPrice: 100,
    selectedPrice: 30,
    quantity: 0,
    total: 0,
    type: "Accomodation",
  },
  {
    id: "27",
    name: "Airbnb entire apartment or house (/Night)",
    minPrice: 50,
    maxPrice: 300,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
    type: "Accomodation",
  },
  {
    id: "28",
    name: "Motel (/Night)",
    minPrice: 30,
    maxPrice: 80,
    selectedPrice: 30,
    quantity: 0,
    total: 0,
    type: "Accomodation",
  },
  {
    id: "29",
    name: "Resort (/Night)",
    minPrice: 150,
    maxPrice: 500,
    selectedPrice: 150,
    quantity: 0,
    total: 0,
    type: "Accomodation",
  },
  {
    id: "30",
    name: "Camping or RV park (/Night)",
    minPrice: 20,
    maxPrice: 50,
    selectedPrice: 20,
    quantity: 0,
    total: 0,
    type: "Accomodation",
  },
  {
    id: "31",
    name: "Glamping (/Night)",
    minPrice: 100,
    maxPrice: 300,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Accomodation",
  },
  // {
  //   id: "32",
  //   name: "Vacation Rental",
  //   minPrice: 100,
  //   maxPrice: 500,
  //   selectedPrice: 100,
  //   quantity: 0,
  //   total: 0,     type: "Accomodation",

  // },
  {
    id: "33",
    name: "Ski lodge (/Night)",
    minPrice: 150,
    maxPrice: 500,
    selectedPrice: 150,
    quantity: 0,
    total: 0,
    type: "Accomodation",
  },
  {
    id: "34",
    name: "Beachfront condo or apartment (/Night)",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Accomodation",
  },
  {
    id: "35",
    name: "Treehouse or unique Rental (/Night)",
    minPrice: 50,
    maxPrice: 300,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
    type: "Accomodation",
  },
];

//Insurance (10~25%)
export const insurance = [
  {
    id: "1",
    name: "Liability Coverage (Yearly)",
    minPrice: 50,
    maxPrice: 800,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
    type: "Auto",
  },
  {
    id: "2",
    name: "[UM] Uninsured/underinsured Coverage (Yearly)",
    minPrice: 50,
    maxPrice: 800,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
    type: "Auto",
  },
  {
    id: "3",
    name: "[PIP] Personal Injury Protection (Yearly)",
    minPrice: 50,
    maxPrice: 800,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
    type: "Auto",
  },
  {
    id: "4",
    name: "Collision Coverage (Yearly)",
    minPrice: 50,
    maxPrice: 800,
    selectedPrice: 50,
    quantity: 0,
    total: 0,
    type: "Auto",
  },
  {
    id: "5",
    name: "Dwelling Coverage (Yearly)",
    minPrice: 100,
    maxPrice: 5000,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Home",
  },
  {
    id: "6",
    name: "[Owner] Personal Property Coverage (Yearly)",
    minPrice: 100,
    maxPrice: 5000,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Home",
  },
  {
    id: "7",
    name: "[Owner] Liability Coverage (Yearly)",
    minPrice: 100,
    maxPrice: 5000,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Home",
  },
  {
    id: "8",
    name: "[Renter] Personal Property Coverage (Yearly)",
    minPrice: 100,
    maxPrice: 5000,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Renter",
  },
  {
    id: "9",
    name: "[Renter] Liability Coverage (Yearly)",
    minPrice: 100,
    maxPrice: 5000,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Renter",
  },
  {
    id: "10",
    name: "Term Life Insurance (Yearly)",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Life",
  },
  {
    id: "11",
    name: "Permanent Insurance (Yearly)",
    minPrice: 100,
    maxPrice: 5000,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Life",
  },
  {
    id: "12",
    name: "Health Insurance (Yearly)",
    minPrice: 100,
    maxPrice: 5000,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Health",
  },
  {
    id: "13",
    name: "Disability Insurance (Yearly)",
    minPrice: 100,
    maxPrice: 5000,
    selectedPrice: 100,
    quantity: 0,
    total: 0,
    type: "Disability",
  },
];

//Investing (10~20%)
export const investing = [
  {
    id: "1",
    type: "Saving",
    name: "High Yield Savings Account",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    id: "5",
    type: "Saving",
    name: "Certificate of Deposit (CD)",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    id: "7",
    type: "Saving",
    name: "Individual Retirement Account (IRA)",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    id: "9",
    type: "Saving",
    name: "401(k) Plan",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    id: "6",
    type: "Investing",
    name: "Real Estate Investment Trusts (REITs)",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    id: "2",
    type: "Investing",
    name: "Stocks",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    id: "3",
    type: "Investing",
    name: "Exchange-Traded Funds (ETFs)",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    id: "4",
    type: "Investing",
    name: "Bonds",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    id: "8",
    type: "Investing",
    name: "Mutual Funds",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    id: "10",
    type: "Investing",
    name: "Cryptocurrencies",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
];

export const customHouseAndUtilities = [];
export const customPersonalSpending = [];
export const customMedicalHealthcare = [];
export const customTransportation = [];
export const customFoodPlan = [];
export const customTravelRecreation = [];
export const customInsurance = [];
export const customSavingInvesting = [];
