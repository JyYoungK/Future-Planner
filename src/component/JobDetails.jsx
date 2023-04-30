import { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import { JobCategories } from "../constant/JobCategory";
import { artsCategory } from "../constant/JobCategory";

function JobDetails() {
  const [jobCategory, setJobCategory] = useState("Aviation");
  const [jobTitles, setJobTitles] = useState(artsCategory);
  const [job, setJob] = useState("");

  const handleJobCategoryChange = (e, { value }) => {
    setJobCategory(value);
    if (value === "Arts") {
      setJobTitles(artsCategory);
    }
  };

  const handleJobTitleChange = (e, { value }) => {
    setJob(value);
  };

  return (
    <div className="flex flex-row items-center justify-center text-xl">
      <div className="mr-4"> Job Category </div>
      <div className="w-[210px]">
        <Dropdown
          placeholder="Select Job Category"
          fluid
          search
          selection
          onChange={handleJobCategoryChange}
          options={JobCategories}
          className=" text-black"
          value={jobCategory}
        />
      </div>
      <div className="mx-4"> Job Titles </div>
      <div className="w-[310px]">
        <Dropdown
          placeholder="Select Job Title"
          fluid
          search
          selection
          onChange={handleJobTitleChange}
          options={jobTitles}
          className="text-black"
          value={job}
        />
      </div>
    </div>
  );
}

export default JobDetails;
