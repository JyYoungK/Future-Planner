import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { jobColumns } from "../constant/JobCategory";
import { artsCategory } from "../old/constant/jobs";

function JobDataGrid() {
  return (
    <div className="h-full w-full">
      <div className="h-[200px] w-full md:h-[650px]">
        <DataGrid
          autoPageSize
          rowHeight={60}
          rows={artsCategory}
          columns={jobColumns}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          //   getRowClassName={(params) => {
          //     return "bg-green-500";
          //   }}
          sx={{
            button: { color: "#000000" },
            boxShadow: 2,
            border: 1,
            color: "black",
            // borderColor: "primary.light",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
            "& .MuiDataGrid-pagination": {
              color: "#000000",
            },
            "& .MuiTablePagination-root": {
              color: "#000000",
            },
          }}
        />
      </div>
    </div>
  );
}

export default JobDataGrid;
