import { useState } from "react";
import Regions from "./component/Regions";
import JobDetails from "./component/JobDetails";
import JobDataGrid from "./component/JobDataGrid";

//https://countrystatecity.in/docs/api/all-countries/

function App() {
  const [activeButton, setActiveButton] = useState("Find Jobs");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="h-full w-screen">
      <div className="flex h-1/6 flex-row justify-between border-2 border-black p-4">
        <div className="flex flex-row">
          <div className="text-2xl">Website Title</div>
          <button
            className={`${
              activeButton === "Find Jobs"
                ? "text-2xl text-blue-500 underline"
                : "text-2xl"
            } pl-12`}
            onClick={() => handleButtonClick("Find Jobs")}
          >
            Find Jobs
          </button>
          <button
            className={`${
              activeButton === "Find Companies"
                ? "text-2xl text-blue-500 underline"
                : "text-2xl"
            } pl-12`}
            onClick={() => handleButtonClick("Find Companies")}
          >
            Find Companies
          </button>
        </div>
        <div className="text-2xl"> Login</div>
      </div>
      <div className="flex h-1/6 flex-row space-x-4 border-2 border-black p-4 text-xl">
        <Regions />
        <JobDetails />
      </div>
      {activeButton === "Find Jobs" && <JobDataGrid />}
    </div>
  );
}

export default App;
