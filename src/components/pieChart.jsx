import ReactApexChart from "react-apexcharts";
import { Box, Typography, Stack } from "@mui/material";
import travelIcon from "../assets/travel.png";

const PieChart = ({ title, value, series, onClick }) => {
  return (
    <Box
      id="chart"
      flex={1}
      display="flex"
      bgcolor="#f9f9f9"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      pl={3.5}
      py={2}
      gap={2}
      borderRadius="15px"
      minHeight="110px"
      width="350px"
      border="1px solid grey"
      onClick={onClick}
    >
      <Stack direction="column" className="text-left">
        <Typography fontSize={14} color="#242424">
          {title}
        </Typography>
        <Typography fontSize={24} color="#11142d" fontWeight={700} mt={1}>
          {value}
        </Typography>
      </Stack>

      <ReactApexChart
        series={series}
        options={{
          chart: {
            type: "radialBar",
          },
          plotOptions: {
            radialBar: {
              hollow: {
                margin: 5,
                size: "40%",
                image: travelIcon, // use the imported image file
                imageWidth: 24,
                imageHeight: 24,
              },
              dataLabels: {
                name: {
                  show: true,
                },
              },
            },
          },
          labels: ["Progress"],
        }}
        type="radialBar"
        width="150px"
      />
    </Box>
  );
};

export default PieChart;
