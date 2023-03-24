import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { jobColumns } from "../constant/jobs";
import { profile } from "../constant/profile";
import { convertStringToNumber } from "../components/formatCurrency";

function JobDataGrid({ rows }) {
  return (
    <div className="flex h-full w-full">
      <div className="h-[350px] items-center justify-center md:h-[550px] md:w-[600px]">
        <DataGrid
          autoPageSize
          rowHeight={60}
          rows={rows}
          columns={jobColumns}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          checkboxSelection
          checkboxSelectionProps={{
            showCheckbox: false,
            disableSelectAll: true,
          }}
          disableRowSelectionOnClick
          getRowClassName={(params) => {
            const median = convertStringToNumber(params.row.median);
            const top = convertStringToNumber(params.row.top);
            const earnAmount = profile.earnAmount;

            if (median > earnAmount) {
              return "bg-blue-100";
            } else if (top > earnAmount) {
              return "bg-green-100";
            } else if (median < earnAmount) {
              return "bg-red-100";
            }
            return "";
          }}
          getRowSelected={(params) => {
            const median = convertStringToNumber(params.row.median);
            const earnAmount = profile.earnAmount;

            if (median < earnAmount) {
              return false;
            }

            return params.row.selected;
          }}
        />
      </div>
    </div>
  );
}

export default JobDataGrid;
