import { useState, useEffect } from "react";
import { formatCurrency } from "../components/formatCurrency";
import { profile } from "../constant/profile";

function careerSummary({ handleButtonClick }) {
  const [feedback, setFeedback] = useState("");

  function getJobFeedback() {
    const currentYear = new Date().getFullYear();
    const yearRemaining = profile.goalYear - currentYear;

    if (
      (profile.goalJob.medianSalary * yearRemaining) / profile.earnAmount <
      0.3
    ) {
      setFeedback(
        "Although it may be challenging to achieve your financial goals with this career, if it's your true passion, don't give up! You can do it!"
      );
    } else {
      setFeedback(
        "Congratulations on choosing a career that will help you meet your financial goals! While it may be a difficult journey, remember why you started and give it your all!"
      );
    }
  }

  useEffect(() => {
    getJobFeedback();
  }, []);
  return (
    <div className="rounded-lg bg-white p-8 shadow-md">
      <h1 className="mb-8 text-3xl font-bold">Career Summary Page</h1>
      <div className="text-lg">
        <div>
          You have chosen to pursue a career in{" "}
          <span className="font-bold underline">{profile.goalJob.title}</span>{" "}
          to earn {formatCurrency(profile.currency, profile.earnAmount)} by{" "}
          <span className="font-bold underline">{profile.goalYear}</span>!
        </div>
        <div className="my-6">{feedback}</div>
        <div>
          You are all set to embark on this journey to Earth. We wish you the
          best of luck and hope you achieve all your goals. Good luck with your
          job search and stay safe!
        </div>
      </div>
      <div className="mt-4">
        <button
          className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
          onClick={() => handleButtonClick(7)}
        >
          Launch!
        </button>
        <button
          className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
          onClick={() => handleButtonClick(5)}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default careerSummary;
