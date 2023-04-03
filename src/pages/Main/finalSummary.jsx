import React, { useState, useEffect } from "react";
import SpaceThemeBorder from "../../components/spaceThemeBorder";
import { profile } from "../../constant/profile";
import { formatCurrency } from "../../components/formatCurrency";
import Sparks from "../../components/earth/sparks";
import SmileIcon from "../../assets/Smile.png";
import TypeWriter from "typewriter-effect";
import NextIcon from "../../assets/NextIcon.png";

function finalSummary({ handleButtonClick }) {
  const [showSparks, setShowSparks] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [speechIndex, setSpeechIndex] = useState(0);
  const [bye, setBye] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSparks(false);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const colors = [
    "bg-blue-100",
    "bg-red-100",
    "bg-green-100",
    "bg-yellow-100",
    "bg-pink-200",
    "bg-orange-200",
    "bg-purple-100",
    "bg-indigo-100",
    "bg-gray-100",
  ];

  const textColors = [
    "text-blue-300",
    "text-red-300",
    "text-green-300",
    "text-yellow-300",
    "text-pink-400",
    "text-orange-400",
    "text-purple-300",
    "text-indigo-300",
    "text-gray-300",
  ];

  const speeches = [
    "I see that you are all set!",
    "The rocket is ready to go as well!",
    "I double checked the rocket for your safe trip.",
    "I hope you enjoy the ride to Earth!",
    "See you around again!",
    "Bye!",
    "(Returning back to the start page)",
  ];

  const categories = Object.keys(profile.purchased);
  categories.sort((a, b) => {
    const indexA = pieChartItems.indexOf(a);
    const indexB = pieChartItems.indexOf(b);
    return indexA - indexB;
  });

  function handleNextSpeech() {
    if (speechIndex === speeches.length - 1) {
      //Reset the values

      profile.country = "";
      profile.countryCode = "";
      profile.currency = "CAD";
      profile.earnAmount = 0;
      profile.spendAmount = 0;
      profile.purchased = {};
      profile.goalYear = null;
      profile.goalJob = {
        title: "",
        medianSalary: "",
        topSalary: "",
        educationPeriod: "",
        hasDegree: false,
        degree: "",
      };
      profile.tutorial = false;
      handleButtonClick(1);
    }
    setSpeechIndex((prevIndex) => prevIndex + 1);
  }

  return (
    <div className="flex w-screen items-center justify-center text-white">
      <div className="h-4/5 w-5/6">
        <SpaceThemeBorder>
          {showSparks && <Sparks />}

          <div className="rounded-lg p-8 ">
            <h1 className="mb-8 text-3xl font-bold">Final Summary Page</h1>
            <div className="text-2xl">
              <div>
                <div>You are all set to embark on this journey to Earth!</div>
                <div>
                  You have decided to{" "}
                  {!profile.goalJob.hasDegree
                    ? `pursue a degree in ${profile.goalJob.degree}${
                        profile.goalJob.educationPeriod === "None required" ||
                        profile.goalJob.educationPeriod === "N/A"
                          ? ""
                          : ` for ${profile.goalJob.educationPeriod}`
                      } and `
                    : ""}
                  become a {profile.goalJob.title} to earn{" "}
                  {formatCurrency(profile.currency, profile.earnAmount)} by{" "}
                  {profile.goalYear}!
                </div>
                During or after you earn this amount, here are things you want
                to do or purchase
                {categories.map((categoryName, index) => {
                  const category = profile.purchased[categoryName];
                  const color = colors[index % colors.length];
                  const customTextColor = textColors[index % textColors.length];
                  if (category.value > 0)
                    return (
                      <div key={categoryName} className="my-8">
                        <h2
                          className={`mb-4 text-2xl font-bold ${customTextColor}`}
                        >
                          {categoryName}
                        </h2>
                        <div
                          className={`max-h-96 overflow-y-scroll rounded-lg border p-4 ${color}`}
                          style={{ scrollbarColor: `${color} #4B5563` }}
                        >
                          {Object.keys(category).map((itemId) => {
                            const item = category[itemId];
                            if (item.quantity > 0) {
                              return (
                                <div
                                  key={`${categoryName}-${itemId}`}
                                  className="text-md mt-4 flex items-center justify-between text-black md:text-xl"
                                >
                                  <span>{`${item.name} (${formatCurrency(
                                    profile.currency,
                                    item.selectedPrice
                                  )}) x${item.quantity} `}</span>
                                  <span>
                                    {formatCurrency(
                                      profile.currency,
                                      item.selectedPrice * item.quantity
                                    )}
                                  </span>
                                </div>
                              );
                            }
                          })}
                        </div>
                      </div>
                    );
                })}
                <div>
                  And you will still have{" "}
                  {formatCurrency(
                    profile.currency,
                    profile.earnAmount - profile.spendAmount
                  )}{" "}
                  left to spare.
                </div>
                <div>
                  I wish you the best of luck and hope you achieve all your
                  goals. Good luck with your job search and stay safe!
                </div>
              </div>
            </div>
            <div className="mt-8">
              <button
                className="button-glitch mx-2 h-[50px] w-[150px] rounded-md bg-red-500 px-4 py-2 transition duration-300 ease-in-out hover:bg-red-600"
                role="button"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => setBye(true)}
              >
                {isHovered ? (
                  <div className="flex items-center">
                    <span>Good Bye</span>
                    <img src={SmileIcon} alt="Bye" className="ml-2 h-8 w-8" />
                  </div>
                ) : (
                  "Bye"
                )}{" "}
              </button>
              <button
                className="mx-2 h-[50px] w-[150px] rounded-md  px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-black"
                onClick={() => handleButtonClick(2)}
              >
                Not ready to leave?
              </button>
            </div>
            {bye && (
              <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center">
                <div className="absolute z-10 h-full w-full bg-[#083344] bg-opacity-75">
                  <div className=" absolute bottom-0 left-1/2 z-10 mb-10 flex h-1/6 w-4/5 -translate-x-1/2 transform items-center justify-center border-8 border-[#03121d] bg-[#02200f] bg-opacity-100">
                    <div className="space-letter text-md z-10 text-center text-[#1bc75a] md:text-xl">
                      <div className="flex flex-col md:flex-row">
                        {/* <TypeWriter
                          options={{
                            autoStart: true,
                            loop: false,
                            delay: 50,
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
          </div>
        </SpaceThemeBorder>
      </div>
    </div>
  );
}

export default finalSummary;
