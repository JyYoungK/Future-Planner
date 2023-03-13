//https://www.quicken.com/blog/budget-categories/

//Housing (25~35%)
const houseBuy = [
  {
    name: "Condo in downtown area",
    minPrice: 500000,
    maxPrice: 1000000,
  },
  {
    name: "Single-family house in suburban area",
    minPrice: 700000,
    maxPrice: 2000000,
  },
  {
    name: "Luxury townhouse in exclusive community",
    minPrice: 2000000,
    maxPrice: 5000000,
  },
  {
    name: "Waterfront mansion in coastal area",
    minPrice: 10000000,
    maxPrice: 25000000,
  },
  {
    name: "High-rise penthouse in city center",
    minPrice: 5000000,
    maxPrice: 10000000,
  },
  {
    name: "Large country estate with acreage",
    minPrice: 2000000,
    maxPrice: 10000000,
  },

  {
    name: "Ultra-luxury private island",
    minPrice: 50000000,
    maxPrice: 100000000,
  },
];

const houseRent = [
  {
    name: "Small apartment in urban area",
    minPrice: 500,
    maxPrice: 2000,
  },
  {
    name: "Luxury apartment in high-end neighborhood",
    minPrice: 5000,
    maxPrice: 15000,
  },
  {
    name: "Luxury villa in resort area",
    minPrice: 15000,
    maxPrice: 25000,
  },
];

//Transportation (10~15%)
const transportation = [
  {
    name: "Subway/Transit pass",
    minPrice: 100,
    maxPrice: 150,
    unit: "monthly",
  },
  { name: "Uber/Lyft ride", minPrice: 10, maxPrice: 250, unit: "once" },
  { name: "Domestic flight", minPrice: 100, maxPrice: 500, unit: "once" },
  { name: "International flight", minPrice: 300, maxPrice: 2500, unit: "once" },
  { name: "Car Gas", minPrice: 10, maxPrice: 200, unit: "once" },
];

//Food (10~15%)
const food = [
  { name: "Grocery", minPrice: 5, maxPrice: 300 },
  { name: "Takeout", minPrice: 10, maxPrice: 50 },
  { name: "Delivery food", minPrice: 15, maxPrice: 50 },
  { name: "Cheap restaurant", minPrice: 10, maxPrice: 20 },
  { name: "Expensive restaurant", minPrice: 30, maxPrice: 200 },
];

//Utilities (5~10%)
const utilities = [
  { name: "Electricity", minPrice: 50, maxPrice: 150 },
  { name: "Water", minPrice: 30, maxPrice: 100 },
  { name: "Gas", minPrice: 20, maxPrice: 100 },
  { name: "Internet", minPrice: 50, maxPrice: 100 },
  { name: "Cable TV", minPrice: 30, maxPrice: 100 },
];

//Insurance (10~25%)
const insurance = [
  { name: "Health insurance", minPrice: 100, maxPrice: 500 },
  { name: "Homeowner's or renter's insurance", minPrice: 20, maxPrice: 100 },
  { name: "Home warranties or protection plans", minPrice: 30, maxPrice: 100 },
  { name: "Auto insurance", minPrice: 50, maxPrice: 200 },
  { name: "Life insurance", minPrice: 20, maxPrice: 100 },
  { name: "Disability insurance", minPrice: 20, maxPrice: 50 },
];

//Healthcare (5~10%)
const healthcare = [
  {
    name: "Specialty care (dermatologists, psychologists, etc.)",
    minPrice: 100,
    maxPrice: 500,
  },
  { name: "Dental care", minPrice: 50, maxPrice: 300 },
  { name: "Urgent care", minPrice: 100, maxPrice: 300 },
  { name: "Prescriptions and OTC medications", minPrice: 10, maxPrice: 100 },
  { name: "Supplements and vitamins", minPrice: 10, maxPrice: 50 },
  { name: "Medical devices and supplies", minPrice: 20, maxPrice: 200 },
];

//Investing (10~20%)
const investing = [];

//PersonalSpending (5~10%)
const personalSpendingItems = [
  { name: "Toothbrush", minPrice: 1 },
  { name: "Pen", minPrice: 2 },
  { name: "Notebook", minPrice: 3 },
  { name: "T-shirt", minPrice: 10 },
  { name: "Umbrella", minPrice: 15 },
  { name: "Running shoes", minPrice: 50 },
  { name: "Bluetooth speaker", minPrice: 60 },
  { name: "Fitness tracker", minPrice: 70 },
  { name: "Tablet", minPrice: 100 },
  { name: "Slow cooker", minPrice: 150 },
  { name: "Smartwatch", minPrice: 200 },
  { name: "Digital camera", minPrice: 250 },
  { name: "Wireless headphones", minPrice: 300 },
  { name: "Smart thermostat", minPrice: 350 },
  { name: "Robot vacuum", minPrice: 400 },
  { name: "Drone", minPrice: 500 },
  { name: "Electric guitar", minPrice: 600 },
  { name: "Gaming console", minPrice: 700 },
  { name: "Mountain bike", minPrice: 800 },
  { name: "Home theater system", minPrice: 900 },
  { name: "High-quality binoculars", minPrice: 1000 },
  { name: "High-end laptop", minPrice: 1500 },
  { name: "DSLR camera", minPrice: 2000 },
  { name: "Diamond stud earrings", minPrice: 3000 },
  { name: "Apple MacBook Pro", minPrice: 3500 },
  { name: "Rolex watch", minPrice: 5000 },
  { name: "Custom-built gaming PC", minPrice: 6000 },
  { name: "4K Ultra HD TV", minPrice: 7000 },
  { name: "Baby grand piano", minPrice: 10000 },
  { name: "Designer handbag", minPrice: 12000 },
  { name: "Luxury Swiss watch", minPrice: 15000 },
  { name: "Designer wedding dress", minPrice: 20000 },
  { name: "Luxury sports car", minPrice: 50000 },
  { name: "Speedboat", minPrice: 75000 },
  { name: "Personal submarine", minPrice: 100000 },
  { name: "Tesla Model S", minPrice: 100000 },
  { name: "Private jet membership", minPrice: 150000 },
  { name: "Classic car restoration", minPrice: 200000 },
  { name: "Sports memorabilia collection", minPrice: 250000 },
  { name: "Luxury yacht rental", minPrice: 500000 },
  { name: "Diamond engagement ring", minPrice: 1000000 },
  { name: "Original artwork", minPrice: 2000000 },
  { name: "Luxury real estate", minPrice: 3000000 },
  { name: "Superyacht", minPrice: 50000000 },
  { name: "Private island", minPrice: 100000000 },
  { name: "Commercial airliner", minPrice: 200000000 },
  { name: "Oil tanker", minPrice: 300000000 },
  { name: "Cruise ship", minPrice: 500000000 },
  { name: "Space tourism ticket", minPrice: 250000000 },
  { name: "Nuclear submarine", minPrice: 2000000000 },
];

const personalSpendingServices = [
  {
    name: "Social media management services",
    minPrice: 100,
    maxPrice: 500,
    unit: "monthly",
  },
  {
    name: "Public relations services",
    minPrice: 1000,
    maxPrice: 10000,
    unit: "monthly",
  },
  {
    name: "Executive coaching services",
    minPrice: 500,
    maxPrice: 2000,
    unit: "monthly",
  },
  { name: "Yoga class", minPrice: 10, maxPrice: 30, unit: "monthly" },
  { name: "Cooking classes", min_price: 50, max_price: 200, unit: "monthly" },
  { name: "Art classes", min_price: 50, max_price: 200, unit: "monthly" },
  { name: "Gym Membership", min_price: 30, max_price: 300, unit: "monthly" },
  {
    name: "Meditation classes",
    min_price: 30,
    max_price: 200,
    unit: "monthly",
  },
  { name: "Music lessons", min_price: 50, max_price: 200, unit: "monthly" },
  { name: "Dance lessons", min_price: 100, max_price: 400, unit: "monthly" },
  {
    name: "Language lessons",
    min_price: 20,
    max_price: 100,
    unit: "monthly",
  },
  { name: "Netflix", minPrice: 8.99, maxPrice: 17.99, unit: "monthly" },
  { name: "Meal delivery service", minPrice: 8, maxPrice: 15, unit: "once" },
  {
    name: "Music streaming service",
    minPrice: 4.99,
    maxPrice: 14.99,
    unit: "monthly",
  },
  { name: "Haircut", minPrice: 10, maxPrice: 100, unit: "once" },
  { name: "Massage", minPrice: 50, maxPrice: 200, unit: "once" },
  {
    name: "Personal training session",
    minPrice: 50,
    maxPrice: 150,
    unit: "monthly",
  },
  {
    name: "Nutrition consultation",
    minPrice: 100,
    maxPrice: 300,
    unit: "monthly",
  },
  { name: "House cleaning", minPrice: 50, maxPrice: 200, unit: "once" },
  { name: "Landscaping", minPrice: 100, maxPrice: 500, unit: "monthly" },
  { name: "Plumbing service", minPrice: 100, maxPrice: 300, unit: "once" },
  { name: "Electrical repair", minPrice: 50, maxPrice: 500, unit: "once" },
  { name: "Car wash", minPrice: 10, maxPrice: 50, unit: "once" },
  { name: "Car detailing", minPrice: 100, maxPrice: 300, unit: "once" },
  { name: "Pest control", minPrice: 100, maxPrice: 500, unit: "once" },
  { name: "Pet grooming", minPrice: 50, maxPrice: 150, unit: "once" },
  { name: "Dog walking", minPrice: 10, maxPrice: 50, unit: "once" },
  { name: "Tutoring services", minPrice: 20, maxPrice: 100, unit: "once" },
  {
    name: "Interior design consultation",
    minPrice: 100,
    maxPrice: 300,
    unit: "once",
  },
  {
    name: "Home organization services",
    minPrice: 50,
    maxPrice: 200,
    unit: "once",
  },
  {
    name: "Event planning services",
    minPrice: 500,
    maxPrice: 5000,
    unit: "once",
  },
  {
    name: "Wedding planning services",
    minPrice: 1000,
    maxPrice: 10000,
    unit: "once",
  },
  { name: "Photography services", minPrice: 100, maxPrice: 500, unit: "once" },
  { name: "Videography services", minPrice: 500, maxPrice: 2000, unit: "once" },
  {
    name: "Graphic design services",
    minPrice: 50,
    maxPrice: 500,
    unit: "once",
  },
  {
    name: "Website development services",
    minPrice: 500,
    maxPrice: 5000,
    unit: "once",
  },
  { name: "Legal services", minPrice: 100, maxPrice: 500, unit: "hourly" },
  { name: "Accounting services", minPrice: 50, maxPrice: 500, unit: "hourly" },
  {
    name: "Financial planning services",
    minPrice: 100,
    maxPrice: 500,
    unit: "hourly",
  },
  {
    name: "Career counseling services",
    minPrice: 50,
    maxPrice: 200,
    unit: "hourly",
  },
  {
    name: "Business coaching services",
    minPrice: 100,
    maxPrice: 500,
    unit: "hourly",
  },
  {
    name: "Interpretation services",
    min_price: 50,
    max_price: 150,
    unit: "hourly",
  },
  {
    name: "Tax preparation services",
    minPrice: 100,
    maxPrice: 500,
    unit: "once",
  },
  {
    name: "Home renovation services",
    min_price: 5000,
    max_price: 50000,
    unit: "once",
  },
  { name: "Moving services", min_price: 500, max_price: 5000, unit: "once" },
];

//Recreation (5~10%)
const recreationActivities = [
  { name: "Movie tickets", minPrice: 10, maxPrice: 20 },
  { name: "Concert tickets", minPrice: 50, maxPrice: 200 },
  { name: "Sports events tickets", minPrice: 30, maxPrice: 200 },
  { name: "Museum admission fees", minPrice: 10, maxPrice: 30 },
  { name: "Theme park tickets", minPrice: 50, maxPrice: 150 },
  { name: "Zoo or aquarium admission fees", minPrice: 10, maxPrice: 30 },
  { name: "Scuba diving", minPrice: 100, maxPrice: 300 },
  { name: "Skydiving", minPrice: 200, maxPrice: 500 },
  { name: "Bungee jumping", minPrice: 50, maxPrice: 200 },
  { name: "Jet skiing", minPrice: 50, maxPrice: 150 },
  { name: "Kayaking or canoeing rentals", minPrice: 20, maxPrice: 50 },
  { name: "Fishing gear rentals", minPrice: 20, maxPrice: 50 },
  { name: "Horseback riding", minPrice: 30, maxPrice: 100 },
  { name: "Zip-lining", minPrice: 50, maxPrice: 150 },
  { name: "Rock climbing gym", minPrice: 20, maxPrice: 40 },
  { name: "White water rafting", minPrice: 50, maxPrice: 150 },
  { name: "Camping gear rentals", minPrice: 30, maxPrice: 100 },
  { name: "Ski or snowboard rentals", minPrice: 30, maxPrice: 80 },
  { name: "Ski lift tickets", minPrice: 50, maxPrice: 150 },
  { name: "Snowmobile rentals", minPrice: 50, maxPrice: 150 },
  { name: "Hot air balloon ride", minPrice: 100, maxPrice: 300 },
];

const recreationStays = [
  { name: "Budget hotel", minPrice: 50, maxPrice: 100 },
  { name: "Mid-range hotel", minPrice: 100, maxPrice: 200 },
  { name: "Luxury hotel", minPrice: 200, maxPrice: 500 },
  { name: "Hostel", minPrice: 20, maxPrice: 50 },
  { name: "Airbnb private room", minPrice: 30, maxPrice: 100 },
  { name: "Airbnb entire apartment or house", minPrice: 50, maxPrice: 300 },
  { name: "Motel", minPrice: 30, maxPrice: 80 },
  { name: "Resort", minPrice: 150, maxPrice: 500 },
  { name: "Camping or RV park", minPrice: 20, maxPrice: 50 },
  { name: "Glamping", minPrice: 100, maxPrice: 300 },
  { name: "Vacation rental", minPrice: 100, maxPrice: 500 },
  { name: "Ski lodge", minPrice: 150, maxPrice: 500 },
  { name: "Beachfront condo or apartment", minPrice: 100, maxPrice: 500 },
  { name: "Treehouse or unique rental", minPrice: 50, maxPrice: 300 },
];
