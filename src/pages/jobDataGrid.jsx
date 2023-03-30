import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { jobColumns } from "../constant/jobs";
import { profile } from "../constant/profile";
import {
  salaryInYear,
  salaryAfterGraduatingInYear,
} from "../components/formatCurrency";
import QuestionMarkIcon from "../assets/QuestionMarkIcon.png";

function JobDataGrid({ rows, selectedJob, setSelectedJob }) {
  const [prevSelectedJob, setPrevSelectedJob] = useState(selectedJob);
  const [tempTitle, setTempTitle] = useState("");
  const [tempMedian, setTempMedian] = useState("");
  const [tempTop, setTempTop] = useState("");
  const [tempEducationPeriod, setTempEducationPeriod] = useState("");
  const [degree, setDegree] = useState("");
  const [showHelp, setShowHelp] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [greenJob, setGreenJob] = useState(false);

  function handleCellSelect(degree, title, median, top, education) {
    if (prevSelectedJob === title && profile.goalJob.title !== "") {
      //same job selected
      setSelectedJob("");
      profile.goalJob.title = "";
    } else {
      setTempTitle(title);
      setTempMedian(median);
      setTempTop(top);
      setDegree(degree);
      setTempEducationPeriod(education);
      setShowPopup(true);
    }
  }

  function handleJobSelect(hasDegree) {
    setShowPopup(false);
    if (greenJob) {
      console.log(tempEducationPeriod === "None required");
      if (hasDegree || tempEducationPeriod === "None required") {
        profile.goalJob.hasDegree = true;
      } else {
        profile.goalJob.hasDegree = false;
      }
      setPrevSelectedJob(tempTitle);
      setSelectedJob(tempTitle);
      profile.goalJob.title = tempTitle;
      profile.goalJob.medianSalary = tempMedian;
      profile.goalJob.topSalary = tempTop;
      profile.goalJob.educationPeriod = tempEducationPeriod;
      setTempTitle("");
      setTempMedian("");
      setTempTop("");
      setTempEducationPeriod("");
    } else {
      if (hasDegree) {
        profile.goalJob.hasDegree = true;
        setPrevSelectedJob(tempTitle);
        setSelectedJob(tempTitle);
        profile.goalJob.title = tempTitle;
        profile.goalJob.medianSalary = tempMedian;
        profile.goalJob.topSalary = tempTop;
        profile.goalJob.educationPeriod = tempEducationPeriod;
        setTempTitle("");
        setTempMedian("");
        setTempTop("");
        setTempEducationPeriod("");
      } else {
        alert(
          "Sorry this job cannot satisfy your financial goal if you already don't have the degree"
        );
      }
    }
  }

  return (
    <div className="h-full w-full">
      <div className="h-[800px] w-full  md:h-[550px]">
        <img
          src={QuestionMarkIcon}
          alt={QuestionMarkIcon}
          style={{ marginLeft: "auto" }}
          className="mb-4 h-12 w-12"
          onClick={() => setShowHelp(true)}
        />
        <DataGrid
          autoPageSize
          rowHeight={60}
          rows={rows}
          columns={jobColumns}
          initialState={{
            pagination: { paginationModel: { pageSize: 5 } },
          }}
          getRowClassName={(params) => {
            if (salaryAfterGraduatingInYear(profile, params.row)) {
              return "bg-green-500";
            }
            if (salaryInYear(profile, params.row)) {
              return "bg-orange-500";
            } else {
              return "bg-red-500";
            }
          }}
          onCellClick={(params) => {
            if (salaryInYear(profile, params.row)) {
              if (salaryAfterGraduatingInYear(profile, params.row)) {
                setGreenJob(true);
              } else {
                setGreenJob(false);
              }
              handleCellSelect(
                params.row.degree,
                params.row.title,
                params.row.median,
                params.row.top,
                params.row.educationPeriod
              );
            } else {
              alert("This job cannot help you meet your financial goal");
            }
          }}
          sx={{
            button: { color: "#ffffff" },
            boxShadow: 2,
            border: 3,
            color: "white",
            borderColor: "primary.light",
            "& .MuiDataGrid-cell:hover": {
              color: "primary.main",
            },
            "& .MuiDataGrid-pagination": {
              color: "#ffffff",
            },
            "& .MuiTablePagination-root": {
              color: "#ffffff",
            },
          }}
        />
      </div>
      {showHelp && (
        <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center">
          <div className="absolute z-10 h-full w-full bg-gray-500 opacity-75"></div>

          <div
            className="z-20 rounded-lg bg-gray-800 p-12"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h1 className="mb-5 text-2xl font-bold">
              <span className="mr-1 text-green-500 underline"> Green </span>{" "}
              colored jobs refer to employment opportunities that can meet your
              financial goal even after factoring in the reduced earning
              potential during the education years.
            </h1>
            <h1 className="mb-5 text-2xl font-bold">
              <span className="mr-1 text-orange-500 underline"> Orange </span>{" "}
              colored jobs refer to potential employment opportunities that can
              meet your financial goal only if you have the degree.
            </h1>
            <h1 className="mb-5 text-2xl font-bold">
              <span className="mr-1 text-red-500 underline"> Red </span> colored
              jobs refer to no employment opportunities that can meet your
              financial goal.
            </h1>
            <button
              src={QuestionMarkIcon}
              className="absolute top-0 right-0 p-2 text-white hover:text-gray-400"
              onClick={() => setShowHelp(false)}
            >
              <span className="sr-only">Close</span>
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="x h-6 w-6"
              >
                <path
                  fillRule="evenodd"
                  d="M12.12 10l5.3-5.3a1 1 0 1 0-1.42-1.4L10.7 8.58 5.4 3.3a1 1 0 1 0-1.42 1.4L8.58 10l-5.3 5.3a1 1 0 0 0 1.42 1.4l5.3-5.3 5.3 5.3a1 1 0 0 0 1.42-1.4L12.12 10z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
      {showPopup && (
        <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center">
          <div className="absolute z-10 h-full w-full bg-gray-500 opacity-75"></div>
          <div
            className="z-20 rounded-lg bg-gray-800 p-8"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <h2 className="mb-4 text-2xl font-bold">
              Do you have a degree in {degree} ?
            </h2>

            <button
              className="mt-4 mr-2 rounded-lg bg-green-500 py-2 px-4 text-white"
              onClick={() => handleJobSelect(true)}
            >
              Yes
            </button>
            <button
              className="mt-4 ml-2 rounded-lg bg-red-500 py-2 px-4 text-white"
              onClick={() => handleJobSelect(false)}
            >
              No
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobDataGrid;
