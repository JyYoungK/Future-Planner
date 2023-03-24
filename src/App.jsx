import { useState } from "react";
import FadeTransition from "./components/fadeTransition";
import Country from "./pages/countrySelect";
import EarnGoal from "./pages/earnGoal";
import PurchaseSummary from "./pages/purchaseSummary";
import JobSelect from "./pages/jobSelect";
import Salary from "./pages/salary";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [showContent, setShowContent] = useState(true);

  const handleButtonClick = (nextStep) => {
    // if (nextStep === 3 && country === "") {
    //   alert("Please select your residing country to continue");
    // } else {
    //   setShowContent(false);
    //   setTimeout(() => {
    //     setStep(nextStep);
    //     setShowContent(true);
    //   }, 500);
    // }

    setShowContent(false);
    setTimeout(() => {
      setStep(nextStep);
      setShowContent(true);
    }, 500);
  };

  let content = null;
  if (step === 1) {
    content = <Salary handleButtonClick={handleButtonClick} />;
    // content = (
    //   <div className="fixed inset-0 z-10 flex items-center justify-center">
    //     <div className="rounded-lg bg-white p-10 shadow-md">
    //       <h1 className="mb-5 text-3xl font-bold">Welcome</h1>
    //       <h1 className="mb-5 text-lg font-bold">
    //         This app will help you plan your career, future and reach your
    //         financial goal
    //       </h1>
    //       <button
    //         className="rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
    //         onClick={() => handleButtonClick(2)}
    //       >
    //         Continue
    //       </button>
    //     </div>
    //   </div>
    // );
  } else if (step === 2) {
    content = <Country handleButtonClick={handleButtonClick} />;
  } else if (step === 3) {
    content = <EarnGoal handleButtonClick={handleButtonClick} />;
  } else if (step === 4) {
    content = <PurchaseSummary handleButtonClick={handleButtonClick} />;
  } else if (step === 5) {
    content = <JobSelect handleButtonClick={handleButtonClick} />;
  } else if (step === 6) {
    content = <Salary handleButtonClick={handleButtonClick} />;
  } else if (step === 8) {
    content = (
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <div className="rounded-lg bg-white p-10 shadow-md">
          <h1 className="mb-5 text-3xl font-bold">Select your age</h1>
          <div className="space-x-4">
            <button
              className="rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
              onClick={() => handleButtonClick(3)}
            >
              Children
            </button>
            <button
              className="rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
              onClick={() => handleButtonClick(4)}
            >
              Adult
            </button>
          </div>
          <button
            className="mt-5 rounded-md bg-gray-300 px-4 py-2 text-gray-700 transition duration-300 ease-in-out hover:bg-gray-400"
            onClick={() => handleButtonClick(1)}
          >
            Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <FadeTransition step={step} show={showContent}>
        {content}
      </FadeTransition>
    </div>
  );
}

export default App;
