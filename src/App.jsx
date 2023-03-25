import { useState } from "react";
import FadeTransition from "./components/fadeTransition";
import Country from "./pages/countrySelect";
import EarnGoal from "./pages/earnGoal";
import PurchaseSummary from "./pages/purchaseSummary";
// import JobSelect from "./pages/jobSelect";
import CareerGoal from "./pages/careerGoal";
import CareerSummary from "./pages/careerSummary";
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
    content = <CareerGoal handleButtonClick={handleButtonClick} />;
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
    content = <CareerGoal handleButtonClick={handleButtonClick} />;
    // content = <JobSelect handleButtonClick={handleButtonClick} />;
  } else if (step === 6) {
    content = <CareerSummary handleButtonClick={handleButtonClick} />;
  } else if (step === 7) {
    content = (
      <div className="fixed inset-0 z-10 flex items-center justify-center"></div>
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
