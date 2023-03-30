import React, { useState, useEffect } from "react";
import SpaceThemeBorder from "../../components/spaceThemeBorder";
import { profile } from "../../constant/profile";
import { formatCurrency } from "../../components/formatCurrency";
import Sparks from "../../components/earth/sparks";
import SmileIcon from "../../assets/Smile.png";

function finalSummary({ handleButtonClick }) {
  const [showSparks, setShowSparks] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowSparks(false);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const colors = [
    "blue-100",
    "red-100",
    "green-100",
    "yellow-100",
    "pink-200",
    "orange-200",
    "purple-100",
    "indigo-100",
    "gray-100",
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

  const categories = Object.keys(profile.purchased);
  categories.sort((a, b) => {
    const indexA = pieChartItems.indexOf(a);
    const indexB = pieChartItems.indexOf(b);
    return indexA - indexB;
  });

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
                          className={`max-h-96 overflow-y-scroll rounded-lg border p-4 bg-${color}`}
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
                onClick={() => handleButtonClick(8)}
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
            {/* <div className="mt-8">
              <button
                className="mx-2 rounded-md bg-blue-500 px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-600"
                onClick={() => handleButtonClick(2)}
              >
                Not ready to leave?
              </button>
            </div> */}
          </div>
        </SpaceThemeBorder>
      </div>
    </div>
  );
}

export default finalSummary;
