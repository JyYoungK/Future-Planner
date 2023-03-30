import ReactApexChart from "react-apexcharts";
import { formatCurrency } from "./formatCurrency";
import HomeIcon from "../assets/spendCategories/HouseIcon.png";
import FoodIcon from "../assets/spendCategories/FoodIcon.png";
import ItemIcon from "../assets/spendCategories/ItemIcon.png";
import MedicalIcon from "../assets/spendCategories/MedicalIcon.png";
import TransportationIcon from "../assets/spendCategories/TransportationIcon.png";
import TravelIcon from "../assets/spendCategories/TravelIcon.png";
import InsuranceIcon from "../assets/spendCategories/InsuranceIcon.png";
import SavingIcon from "../assets/spendCategories/SavingIcon.png";

//https://icons8.com/icon/3mTG9Ugv0TlC/house-with-a-garden

const PieChart = ({ title, currency, value, series, onClick }) => {
  let displayValue = 0;
  if (formatCurrency(currency, value) === undefined) {
    displayValue = "$0.00";
  } else {
    displayValue = formatCurrency(currency, value);
  }

  const getIcon = (title) => {
    switch (title) {
      case "House & Utilities":
        return HomeIcon;
      case "Food Plan":
        return FoodIcon;
      case "Personal Spending":
        return ItemIcon;
      case "Medical & Healthcare":
        return MedicalIcon;
      case "Transportation":
        return TransportationIcon;
      case "Travel & Recreation":
        return TravelIcon;
      case "Insurance":
        return InsuranceIcon;
      case "Saving & Investing":
        return SavingIcon;
      default:
        return null; // or a default icon
    }
  };

  return (
    <div
      id="chart"
      className="min-h-80 grid w-full cursor-pointer grid-cols-2 justify-end bg-gray-900 py-2 pl-3.5 text-white"
      onClick={onClick}
    >
      <div className="flex flex-col justify-center text-left text-white">
        <div className="text-lg">{title}</div>
        <div className="text-2xl">{displayValue}</div>
      </div>
      <div className="text-right">
        <ReactApexChart
          className="mt-2 text-right text-white"
          series={series}
          options={{
            chart: {
              type: "radialBar",
              offsetY: -10,
              foreColor: "#fff",
              height: 350,
            },

            plotOptions: {
              radialBar: {
                startAngle: -135,
                endAngle: 135,
                hollow: {
                  margin: 15,
                  size: "40%",
                  imageWidth: 42,
                  imageHeight: 42,
                  image: getIcon(title),
                  imageClipped: false,
                },
              },
              dataLabels: {
                offsetY: 40,
                name: {
                  show: false,
                },
              },
              stroke: {
                lineCap: "round",
              },
            },
            labels: [""],
          }}
          type="radialBar"
          width="160px"
        />
      </div>
    </div>
  );
};

export default PieChart;

// series={series}
// options={{
//   chart: {
//     type: "radialBar",
//   },
//   plotOptions: {
//     radialBar: {
//       hollow: {
//         margin: 5,
//         size: "40%",
//         image: travelIcon, // use the imported image file
//         imageWidth: 24,
//         imageHeight: 24,
//       },
//       dataLabels: {
//         name: {
//           show: false,
//         },
//       },
//     },
//   },
//   // labels: ["Progress"],
// }}
// type="radialBar"
// width="150px"
