import React, { useState } from "react";
import SpaceThemeBorder from "../components/spaceThemeBorder";
import AstronautImage from "../assets/Astronaut.png";
import Countries from "../components/countries";
import dropdownStyle from "../components/countrySelect.css?inline";

function countrySelect({ handleButtonClick, setCountry }) {
  const [speechIndex, setSpeechIndex] = useState(0);
  const [build, setBuild] = useState(false);
  const [tutorialOn, setTutorialOn] = useState(false);
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

  return (
    <div className="flex w-screen items-center justify-center">
      <div className="h-4/5 w-5/6">
        <SpaceThemeBorder>
          {/* <div class="mb-5 flex items-center justify-center">
        <Countries class={dropdownStyle} setCountry={setCountry} />
      </div> */}
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <img
              src={AstronautImage}
              alt="Astronaut"
              style={{ maxWidth: "40%", maxHeight: "50%" }}
              className="animate-bounce-slow"
            />
            {tutorialOn && (
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
                {/* The span element above is used to create the point at the bottom of the speech bubble */}
              </div>
            )}
            {!tutorialOn && (
              <div className="mb-5 flex  items-center justify-center">
                <div className="flex-row text-white">
                  Country to launch:
                  <Countries
                    className={dropdownStyle}
                    setCountry={setCountry}
                  />
                </div>
              </div>
            )}
          </div>
        </SpaceThemeBorder>
      </div>
    </div>
  );
}

export default countrySelect;

// <button
//   className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
//   onClick={() => handleButtonClick(3)}
// >
//   Continue
// </button>
