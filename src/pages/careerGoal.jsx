import { useState } from "react";
import { jobCategories } from "../constant/jobs";
import JobDataGrid from "./jobDataGrid";
import {
  artsCategory,
  businessCategory,
  educationCategory,
  mediaCategory,
  publicSafetyCategory,
  serviceCategory,
  technologyCategory,
  aviationCategory,
  constructionCategory,
  engineerCategory,
  justiceCategory,
  medicalCategory,
  sportsCategory,
  militaryCategory,
} from "../constant/jobs";
import { convertStringToNumber } from "../components/formatCurrency";
import { profile } from "../constant/profile";
import SpaceThemeBorder from "../components/spaceThemeBorder";

function careerGoal({ handleButtonClick }) {
  const [category, setCategory] = useState("Jobs");
  const [content, setContent] = useState("");
  const [selectedJob, setSelectedJob] = useState("");

  function handleCategorySelect(category) {
    setCategory(category);
    setContent(
      <div key={category}>
        <JobDataGrid
          rows={getCategoryItems(category)}
          setSelectedJob={setSelectedJob}
        />
      </div>
    );
  }

  function JobCategory({ category }) {
    const categoryColor = category.color;
    const words = category.title.split(" ");
    const column = words.length === 2 ? "flex-col" : "";
    return (
      <button
        className={`flex h-24 items-center rounded-lg bg-gradient-to-r p-4 shadow-lg ${categoryColor}`}
        onClick={() => handleCategorySelect(category.title)}
      >
        <div className="mr-4 w-1/2">
          <img src={category.icon} alt={category.icon} />
        </div>
        <div className={`w-3/4 ${column}`}>
          {words.map((word, i) => (
            <h2 key={i} className="text-xl font-bold text-white">
              {word}
            </h2>
          ))}
          <h2 className="text-xl font-bold text-white">
            ({countAvailablePositions(getCategoryItems(category.title))})
          </h2>
        </div>
      </button>
    );
  }

  function getCategoryItems(category) {
    switch (category) {
      case "Aviation":
        return aviationCategory;
      case "Arts":
        return artsCategory;
      case "Business":
        return businessCategory;
      case "Construction":
        return constructionCategory;
      case "Engineer":
        return engineerCategory;
      case "Education":
        return educationCategory;
      case "Justice System":
        return justiceCategory;
      case "Media":
        return mediaCategory;
      case "Medical":
        return medicalCategory;
      case "Military":
        return militaryCategory;
      case "Public Safety":
        return publicSafetyCategory;
      case "Science":
        return serviceCategory;
      case "Service":
        return serviceCategory;
      case "Sports":
        return sportsCategory;
      case "Technology":
        return technologyCategory;
      default:
    }
  }

  function countAvailablePositions(rows) {
    let count = 0;

    rows.forEach((row) => {
      const median = convertStringToNumber(row.median);
      const top = convertStringToNumber(row.top);
      const currentYear = new Date().getFullYear();
      const goalYear = profile.goalYear - currentYear || 1;
      const earnAmount = profile.earnAmount / goalYear;

      if (median > earnAmount || top > earnAmount) {
        count++;
      }
    });

    return count;
  }

  return (
    <div className="flex w-screen items-center justify-center">
      <div className="h-4/5 w-5/6">
        <SpaceThemeBorder>
          <div className="rounded-lg bg-gray-900 text-white shadow-md sm:p-6 md:p-8 lg:p-10">
            {category === "Jobs" && (
              <h1 className="mb-5 text-2xl font-bold">
                List of job categories with available number of jobs that can
                satisfy your financial goal
              </h1>
            )}
            <h1 className="mb-5 text-lg font-bold">
              Selected Job: {selectedJob}
            </h1>
            <div className="grid grid-cols-1 justify-center gap-4 p-4 md:grid-cols-5">
              {category === "Jobs" ? (
                jobCategories.map((category, i) => (
                  <JobCategory key={i} category={category} />
                ))
              ) : (
                <div> {content} </div>
              )}
            </div>
            {category === "Jobs" ? (
              <div className="mt-4">
                <button
                  className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
                  onClick={() => handleButtonClick(6)}
                >
                  Summary
                </button>
                <button
                  className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
                  onClick={() => handleButtonClick(2)}
                >
                  Back
                </button>
              </div>
            ) : (
              <button
                className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
                onClick={() => setCategory("Jobs")}
              >
                Back
              </button>
            )}
          </div>
        </SpaceThemeBorder>
      </div>
    </div>
  );
}

export default careerGoal;
