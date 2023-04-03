import React, { useEffect, useState } from "react";
import SpaceThemeBorder from "../../components/spaceThemeBorder";
import AstronautImage from "../../assets/Astronaut.png";
import Countries from "../../components/countries";
import GeneralInput from "../General/generalInput";
import { profile } from "../../constant/profile";
import { formatCurrency } from "../../components/formatCurrency";
import TypeWriter from "typewriter-effect";
import NextIcon from "../../assets/NextIcon.png";

function mainControl({ handleButtonClick, totalSpent }) {
  const [totalAmount, setTotalAmount] = useState(profile.earnAmount || 0);
  const [speechIndex, setSpeechIndex] = useState(0);
  const [tutorialOn, setTutorialOn] = useState(profile.tutorial);
  const [showPopup, setShowPopup] = useState(false);
  const [generalCheck, setGeneralCheck] = useState(false);
  const [spendCheck, setSpendCheck] = useState(false);
  const [careerCheck, setCareerCheck] = useState(false);
  const [countDown, setCountDown] = useState(0);

  const speeches = [
    "Hello? Hello? Can you hear me?",
    "Great! Hey, how is it going?",
    "Oh, you're interested in visiting Earth?",
    "I can definitely help you get to Earth!",
    "You would need a rocket to get there and I was just finish building one! You can take mine!",
    "While I finish up building the rocket, have you thought about what you want to do on Earth?",
    "Earth is a beautiful planet with an incredible diversity of life and landscapes.",
    "There are so many things to do on Earth!",
    "Here, take a look at this guide.",
    "It will help you choose what to do!",
    "Follow the guide from filling out General Information, Spend List, then Career Selection.",
    "After you are done, the rocket should be ready!",
    "Talk to you soon!",
  ];

  function handleNextSpeech() {
    if (speechIndex === speeches.length - 1) {
      setTutorialOn(false);
      profile.tutorial = false;
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

  useEffect(() => {
    // profile.goalYear = new Date().getFullYear() + 1;
    if (profile.spendAmount > 0) {
      setSpendCheck(true);
    } else {
      setSpendCheck(false);
    }
    if (
      profile.goalJob.title !== "" &&
      profile.goalJob.medianSalary !== "" &&
      profile.goalJob.topSalary !== ""
    ) {
      setCareerCheck(true);
    } else {
      setCareerCheck(false);
    }
  }, []);

  useEffect(() => {
    setCountDown(
      [generalCheck, spendCheck, careerCheck].filter(Boolean).length
    );
  }, [generalCheck, spendCheck, careerCheck]);

  return (
    <div className="flex w-screen items-center justify-center">
      <div className="h-4/5 w-5/6">
        <SpaceThemeBorder>
          <div className="grid md:grid-cols-2">
            <img
              src={AstronautImage}
              alt="Astronaut"
              style={{ maxWidth: "80%" }}
              className="animate-bounce-slow hidden md:block"
            />

            <div className="flex w-full flex-col items-center justify-center">
              <div className="mb-2 w-4/5 border-2 border-cyan-300 md:p-2">
                <div className="flex items-center justify-center border-2 border-cyan-300">
                  <div className="p-4 font-bold text-white md:text-xl">
                    General Information
                  </div>
                </div>
                <div className="border-2 border-cyan-300 p-5">
                  <div className="text-white md:flex-row">
                    <div className="mb-5 flex flex-row items-center justify-center whitespace-nowrap">
                      <div className="flex flex-col items-center justify-center md:flex-row">
                        <div className="mr-5 mb-5 text-lg font-bold md:mb-0">
                          Country to land :
                        </div>
                        <Countries />
                      </div>
                    </div>
                    <GeneralInput
                      totalAmount={totalAmount}
                      setTotalAmount={setTotalAmount}
                      setGeneralCheck={setGeneralCheck}
                    />
                  </div>
                </div>
              </div>

              <div className="mb-2 w-4/5 border-2 border-green-300 md:p-2">
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
                    <div className="mb-5 flex  flex-row items-center justify-center whitespace-nowrap text-lg font-bold">
                      <div className="mr-5">Total Spend :</div>
                      {formatCurrency(profile.currency, profile.spendAmount) ||
                        "CA$0.00"}
                    </div>
                    <div className="flex flex-row items-center justify-center whitespace-nowrap text-lg font-bold">
                      <div className="mr-5">Remaining :</div>
                      {formatCurrency(
                        profile.currency,
                        totalAmount - totalSpent
                      ) || "CA$0.00"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-2 w-4/5 border-2 border-indigo-300 md:p-2">
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
                    <div className="mb-5 flex  flex-row items-center justify-center whitespace-nowrap text-lg font-bold">
                      <div className="mr-5 ">Job:</div>
                      {profile.goalJob.title || "N/A"}
                    </div>
                    <div className="flex flex-col items-center justify-center whitespace-nowrap text-lg font-bold md:flex-row">
                      <div className="mr-5 ">Income/Year: </div>
                      {(profile.goalJob.medianSalary === "" ||
                        profile.goalJob.medianSalary === null) &&
                      (profile.goalJob.topSalary === "" ||
                        profile.goalJob.topSalary === null)
                        ? "N/A"
                        : `${profile.goalJob.medianSalary} ~ ${profile.goalJob.topSalary}`}
                    </div>
                  </div>
                </div>
              </div>
              <button
                className={`glowing-btn flex w-4/5 justify-center ${
                  countDown === 3 ? "hover-effect" : ""
                }`}
                onClick={() => {
                  if (countDown === 3) {
                    handleButtonClick(7);
                  }
                }}
              >
                <span className="glowing-txt">
                  {countDown === 0 && "3"}
                  {countDown === 1 && "2"}
                  {countDown === 2 && "1"}
                  {countDown === 3 && (
                    <div>
                      L<span className="faulty-letter2">A</span>
                      <span className="faulty-letter3">U</span>
                      <span className="faulty-letter4">N</span>
                      <span className="faulty-letter5">C</span>
                      <span className="faulty-letter6">H</span>
                      <span className="faulty-letter">!</span>
                    </div>
                  )}
                </span>
              </button>
            </div>
            {tutorialOn && (
              <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center">
                <div className="absolute z-10 h-full w-full bg-[#083344] bg-opacity-75">
                  <div className=" absolute bottom-0 left-1/2 z-10 mb-10 flex h-1/6 w-4/5 -translate-x-1/2 transform items-center justify-center border-8 border-[#03121d] bg-[#02200f] bg-opacity-100">
                    <div className="space-letter text-md z-10 text-center text-[#1bc75a] md:text-xl">
                      <div className="flex flex-col md:flex-row">
                        {/* <TypeWriter
                          options={{
                            autoStart: true,
                            loop: false,
                            delay: 1,
                            strings: speeches[speechIndex],
                          }}
                        /> */}
                        {speeches[speechIndex]}
                        <img
                          src={NextIcon}
                          alt={NextIcon}
                          className="ml-4 h-8 w-8 hover:scale-110"
                          onClick={handleNextSpeech}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
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
          </div>
        </SpaceThemeBorder>
      </div>
    </div>
  );
}

export default mainControl;

{
  /* <button
                    id="next-button"
                    onClick={handleNextSpeech}
                    className="mx-auto mt-4 block rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
                    >
                    Next
                  </button> */
}
{
  /* <div
className="fixed right-0 top-0  my-4 bg-white p-4 shadow-md"
style={{
  clipPath:
    "polygon(0 0, 100% 0, 100% 70%, 60% 70%, 20% 100%, 40% 70%, 0 70%)",
  height: "200px", // Set a fixed height for the speech bubble
  width: "500px",
  top: "50%", // center the speech bubble vertically
  transform: "translateY(-50%)", // center the speech bubble vertically
}}>
</div> */
}
