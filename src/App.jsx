import "./App.css";
import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Earth } from "./components/earth";
import { LinearProgressWithLabel } from "./components/linearProgressWithLabel";
import { profile } from "./constant/profile";
import FadeTransition from "./components/fadeTransition";
import IntroPage from "./pages/introPage";
import Tutorial from "./pages/tutorial";
import MainControl from "./pages/Main/mainControl";
import EarnGoal from "./pages/Spend/earnGoal";
import PurchaseSummary from "./pages/Spend/purchaseSummary";
import CareerGoal from "./pages/Career/careerGoal";
import CareerSummary from "./pages/Career/careerSummary";
import FinalSummary from "./pages/Main/finalSummary";
import Goodbye from "./pages/Main/goodbye";

import * as linkedin from 'linkedin-jobs-api';

function App() {
  const [step, setStep] = useState(1);
  const [showContent, setShowContent] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showEarth, setShowEarth] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [totalSpent, setTotalSpent] = useState(profile.spendAmount || 0);

  // -------------- Test Case
  const queryOptions = {
    keyword: 'software engineer',
    location: 'Singapore',
    dateSincePosted: 'past Week',
    jobType: 'full time',
    remoteFilter: 'remote',
    salary: '10000',
    experienceLevel: 'entry level',
    limit: '10'
  };

  linkedin.query(queryOptions).then(response => {
    console.log(response);
  });

  // ---------------

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
    setShowContent(false);
    setTimeout(() => {
      setStep(nextStep);
      setShowContent(true);
    }, 500);
  };

  useEffect(() => {
    setTimeout(() => {
      setShowWelcome(true);
    }, 500);
  }, []);

  let content = null;
  if (step === 1) {
    content = (
      <IntroPage
        setTotalSpent={setTotalSpent}
        handleButtonClick={handleButtonClick}
        showWelcome={showWelcome}
      />
    );
  } else if (step === 2) {
    content = (
      <MainControl
        handleButtonClick={handleButtonClick}
        totalSpent={totalSpent}
      />
    );
  } else if (step === 3) {
    content = (
      <EarnGoal
        handleButtonClick={handleButtonClick}
        setTotalSpent={setTotalSpent}
      />
    );
  } else if (step === 4) {
    content = <PurchaseSummary handleButtonClick={handleButtonClick} />;
  } else if (step === 5) {
    content = <CareerGoal handleButtonClick={handleButtonClick} />;
  } else if (step === 6) {
    content = <CareerSummary handleButtonClick={handleButtonClick} />;
  } else if (step === 7) {
    content = <FinalSummary handleButtonClick={handleButtonClick} />;
  } else if (step === 8) {
    content = <Goodbye />;
  } else if (step === 0) {
    content = <Tutorial handleButtonClick={handleButtonClick} />;
  }

  return (
    <div>
      {progress < 100 ? (
        <LinearProgressWithLabel value={progress} />
      ) : (
        showEarth && (
          <div className="relative">
            <div className="absolute inset-0 z-10">
              {step < 8 ? (
                <FadeTransition show={showContent}>{content}</FadeTransition>
              ) : (
                <div>{content}</div>
              )}
            </div>
            <div className="fixed inset-0 z-0">
              <Canvas>
                <Suspense fallback={null}>
                  <Earth step={step} />
                </Suspense>
              </Canvas>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default App;
