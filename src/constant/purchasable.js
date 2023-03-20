export const columns = [
  { field: "id", headerName: "ID", width: 90, hide: true },
  {
    field: "type",
    headerName: "Type",
    width: 80,
    editable: false,
  },
  {
    field: "name",
    headerName: "Name",
    width: 300,
    editable: false,
  },
  {
    field: "selectedPrice",
    headerName: "Price",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    type: "number",
    width: 80,
    editable: true,
  },
  {
    field: "total",
    headerName: "Total",
    type: "number",
    width: 80,
    editable: false,
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
];

//https://www.quicken.com/blog/budget-categories/

//Housing (25~35%)
export const houseBuy = [
  {
    type: "Buy",
    name: "Condo in downtown area",
    minPrice: 500000,
    maxPrice: 1000000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Buy",
    name: "Single-family house",
    minPrice: 700000,
    maxPrice: 2000000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Buy",
    name: "Luxury townhouse",
    minPrice: 2000000,
    maxPrice: 5000000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Buy",
    name: "Waterfront mansion",
    minPrice: 10000000,
    maxPrice: 25000000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Buy",
    name: "High-rise penthouse",
    minPrice: 5000000,
    maxPrice: 10000000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Buy",
    name: "Large country estate",
    minPrice: 2000000,
    maxPrice: 10000000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Buy",
    name: "Private island",
    minPrice: 50000000,
    maxPrice: 100000000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
];

export const houseRent = [
  {
    type: "Rent",
    name: "Small apartment",
    minPrice: 500,
    maxPrice: 2000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Rent",
    name: "Luxury apartment",
    minPrice: 5000,
    maxPrice: 15000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Rent",
    name: "Luxury villa",
    minPrice: 15000,
    maxPrice: 25000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
];

//Utilities (5~10%)
export const utilities = [
  {
    type: "Util",
    name: "Electricity",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Util",
    name: "Water",
    minPrice: 30,
    maxPrice: 100,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Util",
    name: "Gas",
    minPrice: 20,
    maxPrice: 100,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Util",
    name: "Internet",
    minPrice: 50,
    maxPrice: 100,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Util",
    name: "Cable TV",
    minPrice: 30,
    maxPrice: 100,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
];

//Transportation (10~15%)
export const transportation = [
  {
    name: "Subway/Transit pass",
    minPrice: 3,
    maxPrice: 10,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Subway/Transit Monthly pass",
    minPrice: 100,
    maxPrice: 150,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Uber/Lyft ride",
    minPrice: 10,
    maxPrice: 250,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Domestic flight",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "International flight",
    minPrice: 300,
    maxPrice: 2500,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Car Gas",
    minPrice: 10,
    maxPrice: 200,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
];

//Food (10~15%)
export const food = [
  {
    name: "Grocery",
    minPrice: 5,
    maxPrice: 300,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Takeout",
    minPrice: 10,
    maxPrice: 50,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Delivery food",
    minPrice: 15,
    maxPrice: 50,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Cheap restaurant",
    minPrice: 10,
    maxPrice: 20,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Expensive restaurant",
    minPrice: 30,
    maxPrice: 200,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
];

//Insurance (10~25%)
export const insurance = [
  {
    name: "Health insurance",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Homeowner's or renter's insurance",
    minPrice: 20,
    maxPrice: 100,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Home warranties or protection plans",
    minPrice: 30,
    maxPrice: 100,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Auto insurance",
    minPrice: 50,
    maxPrice: 200,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Life insurance",
    minPrice: 20,
    maxPrice: 100,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Disability insurance",
    minPrice: 20,
    maxPrice: 50,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
];

//Healthcare (5~10%)
export const healthcare = [
  {
    name: "Psychology care",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Dermatology care",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Dental care",
    minPrice: 50,
    maxPrice: 300,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Urgent care",
    minPrice: 100,
    maxPrice: 300,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Prescriptions and OTC medications",
    minPrice: 10,
    maxPrice: 100,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Supplements and vitamins",
    minPrice: 10,
    maxPrice: 50,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Medical devices and supplies",
    minPrice: 20,
    maxPrice: 200,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
];

//Investing (10~20%)
export const investing = [
  {
    type: "Saving",
    name: "High Yield Savings Account",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Investing",
    name: "Stocks",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Investing",
    name: "Exchange-Traded Funds (ETFs)",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Investing",
    name: "Bonds",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Saving",
    name: "Certificate of Deposit (CD)",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Investing",
    name: "Real Estate Investment Trusts (REITs)",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Saving",
    name: "Individual Retirement Account (IRA)",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Investing",
    name: "Mutual Funds",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Saving",
    name: "401(k) Plan",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Investing",
    name: "Cryptocurrencies",
    minPrice: 0,
    maxPrice: "inf",
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
];

//PersonalSpending (5~10%)
export const personalItems = [
  {
    type: "Item",
    name: "Toothbrush",
    minPrice: 1,
    maxPrice: 5,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Pen",
    minPrice: 2,
    maxPrice: 10,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Notebook",
    minPrice: 3,
    maxPrice: 15,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "T-shirt",
    minPrice: 10,
    maxPrice: 500,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Umbrella",
    minPrice: 15,
    maxPrice: 50,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Earrings",
    minPrice: 20,
    maxPrice: 20000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Running shoes",
    minPrice: 50,
    maxPrice: 1000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Bluetooth speaker",
    minPrice: 60,
    maxPrice: 200,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Tablet",
    minPrice: 100,
    maxPrice: 2000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Slow cooker",
    minPrice: 150,
    maxPrice: 700,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Smartwatch",
    minPrice: 200,
    maxPrice: 1000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Digital camera",
    minPrice: 250,
    maxPrice: 5500,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Wireless headphones",
    minPrice: 300,
    maxPrice: 2000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Smart thermostat",
    minPrice: 150,
    maxPrice: 500,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Robot vacuum",
    minPrice: 400,
    maxPrice: 3000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Drone",
    minPrice: 500,
    maxPrice: 3500,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Electric guitar",
    minPrice: 600,
    maxPrice: 4000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Gaming console",
    minPrice: 700,
    maxPrice: 5000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Mountain bike",
    minPrice: 800,
    maxPrice: 6000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "High-end laptop",
    minPrice: 1500,
    maxPrice: 10000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Apple MacBook Pro",
    minPrice: 1500,
    maxPrice: 3500,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "DSLR camera",
    minPrice: 2000,
    maxPrice: 15000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "4K Ultra HD TV",
    minPrice: 3000,
    maxPrice: 15000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Piano",
    minPrice: 4000,
    maxPrice: 100000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Rolex watch",
    minPrice: 5000,
    maxPrice: 50000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Custom-built gaming PC",
    minPrice: 6000,
    maxPrice: 100000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Diamond engagement ring",
    minPrice: 10000,
    maxPrice: 1000000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Designer handbag",
    minPrice: 12000,
    maxPrice: 50000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Luxury Swiss watch",
    minPrice: 15000,
    maxPrice: 200000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Speedboat",
    minPrice: 25000,
    maxPrice: 1000000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Luxury sports car",
    minPrice: 50000,
    maxPrice: 5000000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Tesla Model S",
    minPrice: 100000,
    maxPrice: 500000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Superyacht",
    minPrice: 200000,
    maxPrice: 10000000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Original artwork",
    minPrice: 2000000,
    maxPrice: 50000000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Cruise ship",
    minPrice: 500000000,
    maxPrice: 1000000000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    type: "Item",
    name: "Space tourism ticket",
    minPrice: 250000000,
    maxPrice: 500000000,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
];

export const personalServices = [
  {
    name: "Meal delivery service",
    minPrice: 8,
    maxPrice: 15,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Haircut",
    minPrice: 10,
    maxPrice: 100,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Massage",
    minPrice: 50,
    maxPrice: 200,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "House cleaning",
    minPrice: 50,
    maxPrice: 200,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Plumbing service",
    minPrice: 100,
    maxPrice: 300,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Electrical repair",
    minPrice: 50,
    maxPrice: 500,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Car wash",
    minPrice: 10,
    maxPrice: 50,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Car detailing",
    minPrice: 100,
    maxPrice: 300,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Pest control",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Pet grooming",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Dog walking",
    minPrice: 10,
    maxPrice: 50,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Tutoring services",
    minPrice: 20,
    maxPrice: 100,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },

  {
    name: "Interior design consultation",
    minPrice: 100,
    maxPrice: 300,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Home organization services",
    minPrice: 50,
    maxPrice: 200,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Event planning services",
    minPrice: 500,
    maxPrice: 5000,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Wedding planning services",
    minPrice: 1000,
    maxPrice: 10000,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Photography services",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Videography services",
    minPrice: 500,
    maxPrice: 2000,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Graphic design services",
    minPrice: 50,
    maxPrice: 500,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Website development services",
    minPrice: 500,
    maxPrice: 5000,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Tax preparation services",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Home renovation services",
    min_price: 5000,
    max_price: 50000,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Moving services",
    min_price: 500,
    max_price: 5000,
    selectedPrice: 0,
    type: "Once",
    quantity: 0,
    total: 0,
  },
  {
    name: "Legal services",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 0,
    type: "hourly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Accounting services",
    minPrice: 50,
    maxPrice: 500,
    selectedPrice: 0,
    type: "hourly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Financial planning services",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 0,
    type: "hourly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Career counseling services",
    minPrice: 50,
    maxPrice: 200,
    selectedPrice: 0,
    type: "hourly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Business coaching services",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 0,
    type: "hourly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Interpretation services",
    min_price: 50,
    max_price: 150,
    selectedPrice: 0,
    type: "hourly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Social media management services",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Public relations services",
    minPrice: 1000,
    maxPrice: 10000,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Executive coaching services",
    minPrice: 500,
    maxPrice: 2000,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Yoga class",
    minPrice: 10,
    maxPrice: 30,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Cooking classes",
    min_price: 50,
    max_price: 200,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Art classes",
    min_price: 50,
    max_price: 200,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Gym Membership",
    min_price: 30,
    max_price: 300,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Meditation classes",
    min_price: 30,
    max_price: 200,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Music lessons",
    min_price: 50,
    max_price: 200,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Dance lessons",
    min_price: 100,
    max_price: 400,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Language lessons",
    min_price: 20,
    max_price: 100,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Netflix",
    minPrice: 8.99,
    maxPrice: 17.99,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },

  {
    name: "Music streaming service",
    minPrice: 4.99,
    maxPrice: 14.99,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },

  {
    name: "Personal training session",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Nutrition consultation",
    minPrice: 100,
    maxPrice: 300,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Landscaping",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },
  {
    name: "Private jet membership",
    minPrice: 15000,
    maxPrice: 50000,
    selectedPrice: 0,
    type: "Monthly",
    quantity: 0,
    total: 0,
  },
];

//Recreation (5~10%)
export const recreationActivities = [
  {
    name: "Movie tickets",
    minPrice: 10,
    maxPrice: 20,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Concert tickets",
    minPrice: 50,
    maxPrice: 200,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Sports events tickets",
    minPrice: 30,
    maxPrice: 200,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Museum admission fees",
    minPrice: 10,
    maxPrice: 30,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Theme park tickets",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Zoo or aquarium admission fees",
    minPrice: 10,
    maxPrice: 30,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Scuba diving",
    minPrice: 100,
    maxPrice: 300,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Skydiving",
    minPrice: 200,
    maxPrice: 500,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Bungee jumping",
    minPrice: 50,
    maxPrice: 200,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Jet skiing",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Kayaking or canoeing rentals",
    minPrice: 20,
    maxPrice: 50,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Fishing gear rentals",
    minPrice: 20,
    maxPrice: 50,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Horseback riding",
    minPrice: 30,
    maxPrice: 100,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Zip-lining",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Rock climbing gym",
    minPrice: 20,
    maxPrice: 40,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "White water rafting",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Camping gear rentals",
    minPrice: 30,
    maxPrice: 100,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Ski or snowboard rentals",
    minPrice: 30,
    maxPrice: 80,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Ski lift tickets",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Snowmobile rentals",
    minPrice: 50,
    maxPrice: 150,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Hot air balloon ride",
    minPrice: 100,
    maxPrice: 300,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
];

export const recreationStays = [
  {
    name: "Budget hotel",
    minPrice: 50,
    maxPrice: 100,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Mid-range hotel",
    minPrice: 100,
    maxPrice: 200,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Luxury hotel",
    minPrice: 200,
    maxPrice: 500,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Hostel",
    minPrice: 20,
    maxPrice: 50,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Airbnb private room",
    minPrice: 30,
    maxPrice: 100,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Airbnb entire apartment or house",
    minPrice: 50,
    maxPrice: 300,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Motel",
    minPrice: 30,
    maxPrice: 80,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Resort",
    minPrice: 150,
    maxPrice: 500,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Camping or RV park",
    minPrice: 20,
    maxPrice: 50,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Glamping",
    minPrice: 100,
    maxPrice: 300,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Vacation rental",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Ski lodge",
    minPrice: 150,
    maxPrice: 500,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Beachfront condo or apartment",
    minPrice: 100,
    maxPrice: 500,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
  {
    name: "Treehouse or unique rental",
    minPrice: 50,
    maxPrice: 300,
    selectedPrice: 0,
    quantity: 0,
    total: 0,
  },
];
