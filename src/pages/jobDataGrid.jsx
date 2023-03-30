import { DataGrid } from "@mui/x-data-grid";
import { jobColumns } from "../constant/jobs";
import { profile } from "../constant/profile";
import { convertStringToNumber } from "../components/formatCurrency";

function JobDataGrid({ rows, setSelectedJob }) {
  return (
    <div className="flex h-full w-full text-white">
      <div className="h-[350px] items-center justify-center md:h-[550px] lg:w-[1000px]">
        <DataGrid
          autoPageSize
          rowHeight={60}
          rows={rows}
          columns={jobColumns}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          getRowClassName={(params) => {
            const median = convertStringToNumber(params.row.median);
            const top = convertStringToNumber(params.row.top);
            const currentYear = new Date().getFullYear();
            const earnAmount =
              profile.earnAmount / (profile.goalYear - currentYear);

            if (median > earnAmount || top > earnAmount) {
              return "bg-green-200";
            } else {
              return "bg-red-200";
            }
          }}
          onCellClick={(params) => {
            const median = convertStringToNumber(params.row.median);
            const top = convertStringToNumber(params.row.top);
            const currentYear = new Date().getFullYear();
            const earnAmount =
              profile.earnAmount / (profile.goalYear - currentYear);
            if (median > earnAmount || top > earnAmount) {
              setSelectedJob(params.formattedValue);
              profile.goalJob.title = params.formattedValue;
            } else {
              alert("This job cannot help you meet your financial goal");
            }
          }}
        />
      </div>
    </div>
  );
}

export default JobDataGrid;
