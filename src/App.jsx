import React from "react";
import Regions from "./component/Regions";
import JobDetails from "./component/JobDetails";
import JobDataGrid from "./component/JobDataGrid";

//https://countrystatecity.in/docs/api/all-countries/

function App() {
  return (
    <div className="h-full w-screen">
      <div className="flex h-1/6 flex-row justify-between border-2 border-black p-4">
        <div className="flex flex-row">
          <div className="text-2xl">Website Title</div>
          <div className="pl-12 text-xl"> Find Jobs</div>
          <div className="pl-12 text-xl"> Find Companies</div>
        </div>
        <div className="text-2xl"> Login</div>
      </div>
      <div className="flex h-1/6 flex-row space-x-4 border-2 border-black p-4 text-xl">
        <Regions />
        <JobDetails />
      </div>
      <JobDataGrid />
    </div>
  );
}

export default App;
