import React, { useState } from "react";
import SpaceThemeBorder from "../components/spaceThemeBorder";
import AstronautImage from "../assets/Astronaut.png";
import ShuttlePart1 from "../assets/ShuttlePart1.png";
import ShuttlePart2 from "../assets/ShuttlePart2.png";
import ShuttlePart3 from "../assets/ShuttlePart3.png";
import Countries from "../components/countries";
import GeneralInput from "./generalInput";
import { profile } from "../constant/profile";
import { formatCurrency } from "../components/formatCurrency";

function mainControl({ handleButtonClick, setCountry, totalSpent }) {
  const [totalAmount, setTotalAmount] = useState(profile.earnAmount || 0);
  const [speechIndex, setSpeechIndex] = useState(0);
  const [build, setBuild] = useState(false);
  const [tutorialOn, setTutorialOn] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const speeches = [
    "Hello? Hello? Can you hear me?",
    "Great! You can hear me!",
    "By the way my name is Junyoung and I can help you get to Earth!",
    "First we need to build a rocket to get there!",
    "Don't worry! I know it's your first time building one but it's not a rocket science!",
    "I can help you build it! I just built my first one yesterday haha!",
    "Shall we get started?",
  ];

  const countrySpeeches = [
    "Let's build our station first!",
    "To build our station, we need to point it towards the right location!",
    // "Earth has many beautiful countries, but you can only choose one!",
    "However, due to our limited data, we can only point it towards Canada for now",
  ];

  function handleNextSpeech() {
    if (speechIndex === speeches.length - 2) {
      document.getElementById("next-button").textContent =
        "Let's build a rocket!";
      setBuild(true);
    } else if (speechIndex === speeches.length - 1) {
      // handleButtonClick(3);
      setTutorialOn(false);
    }
    setSpeechIndex((prevIndex) => prevIndex + 1);
  }

  function handlePageClick(page) {
    if (totalAmount <= 0) {
      setShowPopup(true);
    } else {
      if (page === "spend") {
        handleButtonClick(3);
      } else {
        handleButtonClick(5);
      }
    }
  }

  return (
    <div className="flex w-screen items-center justify-center">
      <div className="h-4/5 w-5/6">
        <SpaceThemeBorder>
          {/* <div class="mb-5 flex items-center justify-center">
        <Countries class={dropdownStyle} setCountry={setCountry} />
      </div> */}
          <div className="grid md:grid-cols-2">
            <img
              src={AstronautImage}
              alt="Astronaut"
              style={{ maxWidth: "80%" }}
              className="animate-bounce-slow hidden md:block"
            />
            <div>
              <div className=" mb-2 border-2 border-cyan-300 p-2">
                <div className="flex items-center justify-center border-2 border-cyan-300">
                  <div className="p-4 font-bold text-white md:text-xl">
                    General Information
                  </div>
                </div>
                <div className="border-2 border-cyan-300 p-5">
                  <div className="text-white md:flex-row">
                    <div className="mb-5 flex flex-col items-center justify-center whitespace-nowrap md:flex-row">
                      <div className="mr-5 font-bold md:text-lg">
                        Country to land :
                      </div>
                      <Countries setCountry={setCountry} />
                    </div>
                    <GeneralInput
                      totalAmount={totalAmount}
                      setTotalAmount={setTotalAmount}
                    />
                  </div>
                </div>
              </div>

              <div className=" mb-2 border-2 border-green-300 p-2">
                <div className="flex items-center justify-center border-2 border-green-300 hover:bg-green-300">
                  <button
                    className="p-4 font-bold text-white transition-colors duration-300  hover:text-black md:text-xl"
                    onClick={() => handlePageClick("spend")}
                  >
                    Spend List
                  </button>
                </div>
                <div className="border-2 border-green-300 p-5">
                  <div className="text-white md:flex-row">
                    <div className="mb-5 flex flex-col items-center justify-center whitespace-nowrap font-bold md:flex-row md:text-lg">
                      <div className="mr-5">Total Spend :</div>
                      {formatCurrency(profile.currency, profile.spendAmount) ||
                        "CA$0.00"}
                    </div>
                    <div className="flex flex-col items-center justify-center whitespace-nowrap font-bold md:flex-row md:text-lg">
                      <div className="mr-5">Remaining :</div>
                      {formatCurrency(
                        profile.currency,
                        totalAmount - totalSpent
                      ) || "CA$0.00"}
                    </div>
                  </div>
                </div>
              </div>

              <div className=" mb-2 border-2 border-indigo-300 p-2">
                <div className="flex items-center justify-center border-2 border-indigo-300 hover:bg-indigo-300">
                  <button
                    className="p-4 font-bold text-white transition-colors duration-300  hover:text-black md:text-xl"
                    onClick={() => handlePageClick("career")}
                  >
                    Career Selection
                  </button>
                </div>
                <div className="border-2 border-indigo-300 p-5">
                  <div className="text-white md:flex-row">
                    <div className="mb-5 flex flex-col items-center justify-center whitespace-nowrap md:flex-row">
                      <div className="mr-5 font-bold md:text-lg">Job:</div>
                      <Countries setCountry={setCountry} />
                    </div>
                    <div className="flex flex-col items-center justify-center whitespace-nowrap md:flex-row">
                      <div className="mr-5 font-bold md:text-lg">
                        Income/Year
                      </div>
                      <Countries setCountry={setCountry} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showPopup && (
              <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center">
                <div className="absolute z-10 h-full w-full bg-red-500 opacity-75"></div>
                <div
                  className="z-20 rounded-lg bg-white p-8"
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <h2 className="mb-4 text-2xl font-bold">
                    Please enter Earn Amount in General Information.
                  </h2>

                  <button
                    className="mt-4 rounded-lg bg-red-500 py-2 px-4 text-white"
                    onClick={() => setShowPopup(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
            {/* {tutorialOn && (
              <div
                className="relative my-4 bg-white p-4 shadow-md"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 70%, 60% 70%, 20% 100%, 40% 70%, 0 70%)",
                  height: "200px", // Set a fixed height for the speech bubble
                  width: "500px",
                }}
              >
                <p className="text-lg">{speeches[speechIndex]}</p>
                <button
                  id="next-button"
                  onClick={handleNextSpeech}
                  className={`absolute bottom-20 left-1/2 -translate-x-1/2 transform rounded-md  px-4 py-2 text-white ${
                    build
                      ? "bg-red-500 hover:bg-orange-500"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                >
                  Next
                </button>
                <span
                  className="absolute h-6 w-6 rotate-45 transform bg-white"
                  style={{ left: "-3px", bottom: "-3px" }}
                ></span>
              </div>
            )} */}
            {/* {!tutorialOn && (
              <div className="relative h-full w-full">
                <img
                  src={ShuttlePart1}
                  alt="Part1"
                  className="absolute inset-0 z-30 w-1/2 cursor-pointer object-contain grayscale hover:grayscale-0"
                />
                <img
                  src={ShuttlePart2}
                  alt="Part2"
                  className="absolute inset-0 z-20 w-1/2 cursor-pointer object-contain grayscale hover:grayscale-0"
                />
                <img
                  src={ShuttlePart3}
                  alt="Part3"
                  className="absolute inset-0 z-10 w-1/2 cursor-pointer object-contain grayscale hover:grayscale-0"
                />
              </div>
            )} */}
          </div>
        </SpaceThemeBorder>
      </div>
    </div>
  );
}

export default mainControl;

// <button
//   className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
//   onClick={() => handleButtonClick(3)}
// >
//   Continue
// </button>
