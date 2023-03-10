import { useState } from "react";
import { Transition } from "@headlessui/react";
import "./App.css";

function FadeTransition({ show, children }) {
  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center transition-opacity duration-500 ${
        show ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

function App() {
  const [step, setStep] = useState(1);
  const [showContent, setShowContent] = useState(true);

  const handleButtonClick = (nextStep) => {
    setShowContent(false);
    setTimeout(() => {
      setStep(nextStep);
      setShowContent(true);
    }, 500);
  };

  let content = null;
  if (step === 1) {
    content = (
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-5">Welcome</h1>
          <h1 className="text-md font-bold mb-5">
            This app will help you reach your financial goal
          </h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
            onClick={() => handleButtonClick(2)}
          >
            Continue
          </button>
        </div>
      </div>
    );
  } else if (step === 2) {
    content = (
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <div className="bg-white p-10 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-5">Select your age</h1>
          <div className="space-x-4">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
              onClick={() => handleButtonClick(3)}
            >
              Children
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
              onClick={() => handleButtonClick(3)}
            >
              Adult
            </button>
          </div>
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md mt-5 hover:bg-gray-400 transition duration-300 ease-in-out"
            onClick={() => handleButtonClick(1)}
          >
            Back
          </button>
        </div>
      </div>
    );
  } else if (step === 3) {
    content = (
      <>
        <h1 className="text-3xl font-bold mb-5">Thanks for choosing</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out"
          onClick={() => handleButtonClick(1)}
        >
          Back
        </button>
      </>
    );
  }

  return (
    <div className=" bg-white flex items-center justify-center">
      <FadeTransition show={showContent}>{content}</FadeTransition>
    </div>
  );
}

export default App;
