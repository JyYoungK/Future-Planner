import { Suspense, useState, useEffect } from "react";
import FadeTransition from "./components/fadeTransition";
import IntroPage from "./pages/introPage";
import IntroPage2 from "./pages/introPage2";
import EarnGoal from "./pages/earnGoal";
import PurchaseSummary from "./pages/purchaseSummary";
// import JobSelect from "./pages/jobSelect";
import CareerGoal from "./pages/careerGoal";
import CareerSummary from "./pages/careerSummary";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Earth } from "./components/earth";
import { LinearProgressWithLabel } from "./components/linearProgressWithLabel";

function App() {
  const [step, setStep] = useState(1);
  const [showContent, setShowContent] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showEarth, setShowEarth] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? clearInterval(intervalId) : prevProgress + 10
      );
    }, 300);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setShowEarth(true);
    }
  }, [progress]);

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

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(true);
    }, 5000);
  }, []);

  let content = null;
  if (step === 1) {
    // content = <CareerGoal handleButtonClick={handleButtonClick} />;
    content = (
      <IntroPage
        handleButtonClick={handleButtonClick}
        showWelcome={showWelcome}
      />
    );
  } else if (step === 2) {
    content = <IntroPage2 handleButtonClick={handleButtonClick} />;
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
    <div>
      {/* {progress < 100 ? (
        <LinearProgressWithLabel value={progress} />
      ) : (
        showEarth && ( */}
      <div className="relative">
        <div className="absolute inset-0 z-10">
          <FadeTransition step={step} show={showContent}>
            {content}
          </FadeTransition>
        </div>
        {/* <div className="fixed inset-0 z-0">
          <Canvas>
            <Suspense fallback={null}>
              <Earth step={step} />
            </Suspense>
          </Canvas>
        </div> */}
      </div>
      {/* )
      )} */}
    </div>
  );
}

export default App;
