import ReactApexChart from "react-apexcharts";
import { Typography, Stack } from "@mui/material";
import { formatCurrency } from "./formatCurrency";
import travelIcon from "../assets/travel.png";

const PieChart = ({ title, currency, value, series, onClick }) => {
  let displayValue = 0;
  if (formatCurrency(currency, value) === undefined) {
    displayValue = "$0.00";
  } else {
    displayValue = formatCurrency(currency, value);
  }
  return (
    <div
      id="chart"
      className="min-h-80 flex w-full cursor-pointer items-center justify-between gap-2 rounded-2xl border border-gray-400 bg-gray-50 py-2 pl-3.5"
      onClick={onClick}
    >
      <Stack direction="column" className="text-left">
        <Typography fontSize={14} color="#242424">
          {title}
        </Typography>
        <Typography fontSize={24} color="#11142d" fontWeight={700} mt={1}>
          {displayValue}
        </Typography>
      </Stack>

      <ReactApexChart
        series={series}
        options={{
          chart: {
            type: "radialBar",
            offsetY: -10,
          },
          plotOptions: {
            radialBar: {
              startAngle: -135,
              endAngle: 135,
              hollow: {
                size: "40%",
                image: travelIcon,
                imageWidth: 24,
                imageHeight: 24,
              },
            },
            dataLabels: {
              offsetY: 40,

              name: {
                show: false,
              },
            },
          },
          labels: [""],
        }}
        type="radialBar"
        width="150px"

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
      />
    </div>
  );
};

export default PieChart;
