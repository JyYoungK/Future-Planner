import { useState, useEffect } from "react";
import {
  formatCurrency,
  getYearsOfExperience,
} from "../components/formatCurrency";
import { profile } from "../constant/profile";
import SpaceThemeBorder from "../components/spaceThemeBorder";

function careerSummary({ handleButtonClick }) {
  const [feedback, setFeedback] = useState("");

  function getJobFeedback() {
    if (profile.goalJob.hasDegree) {
      setFeedback(
        `Considering you already possess all the requirments, your only task is to take a couple of months to locate a suitable job and company. Nevertheless, once you secure the job, you can embark on your journey towards your financial goal. With a median salary of ${
          profile.goalJob.medianSalary
        } to a top salary of ${
          profile.goalJob.topSalary
        }, you can achieve your target of earning ${formatCurrency(
          profile.currency,
          profile.earnAmount / (profile.goalYear - new Date().getFullYear())
        )} per year.`
      );
    } else {
      setFeedback(
        `Your primary objective should be to search for a reputable institution that offers the degree program necessary for your desired job. Typically, the education period lasts for around ${
          profile.goalJob.educationPeriod
        }. Following that, it may take a few months to secure a suitable job and company. Once you have secured the job, you can make significant strides towards your financial objective. With median salaries ranging from ${
          profile.goalJob.medianSalary
        } to a top salary of ${
          profile.goalJob.topSalary
        }, you can achieve your goal of earning ${formatCurrency(
          profile.currency,
          profile.earnAmount / (profile.goalYear - new Date().getFullYear())
        )} annually, starting from ${
          new Date().getFullYear() +
          getYearsOfExperience(profile.goalJob.educationPeriod)
        }.`
      );
    }
  }

  useEffect(() => {
    getJobFeedback();
  }, []);

  return (
    <div className="flex w-screen items-center justify-center">
      <div className="h-4/5 w-5/6">
        <SpaceThemeBorder>
          {profile.goalJob.title !== "" ? (
            <div className="rounded-lg p-8 text-white ">
              <h1 className="mb-8 text-3xl font-bold">Career Summary Page</h1>
              <div className="text-2xl">
                <div>
                  You have chosen to pursue a career in{" "}
                  <span className="font-bold underline">
                    {profile.goalJob.title}
                  </span>{" "}
                  to earn {formatCurrency(profile.currency, profile.earnAmount)}{" "}
                  by{" "}
                  <span className="font-bold underline">
                    {profile.goalYear}
                  </span>
                  !
                </div>
                <div className="my-6">{feedback}</div>
                {/* <div>
          You are all set to embark on this journey to Earth. We wish you the
          best of luck and hope you achieve all your goals. Good luck with your
          job search and stay safe!
        </div> */}
              </div>
            </div>
          ) : (
            <div className="mb-5 text-xl font-bold">
              You haven't picked a career yet
            </div>
          )}
          <div className="mt-4">
            <button
              className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
              onClick={() => handleButtonClick(5)}
            >
              Back
            </button>
          </div>
        </SpaceThemeBorder>
      </div>
    </div>
  );
}

export default careerSummary;
