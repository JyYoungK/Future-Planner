import React, { useState } from "react";
import Countries from "../components/countries";
import dropdownStyle from "../components/countrySelect.css?inline";
import SpaceThemeBorder from "../components/spaceThemeBorder";
import AstronautImage from "../assets/Astronaut.png";

function countrySelect({ handleButtonClick, setCountry }) {
  const [speechIndex, setSpeechIndex] = useState(0);
  const speeches = [
    "Hello? Hello? Can you hear me?",
    "Great! You can hear me!",
    "By the way my name is Junyoung and I can help you get to Earth!",
    "First we need to build a rocket to get there!",
    "Don't worry! I know it's your first time building one but it's not a rocket science!",
    "I can help you build it! I just built my first one yesterday haha!",
    "Shall we get started?",
  ];

  function handleNextSpeech() {
    if (speechIndex === speeches.length - 2) {
      document.getElementById("next-button").textContent =
        "Let's build a rocket!";
      document.getElementById("next-button").style.backgroundColor = "red";
    } else if (speechIndex === speeches.length - 1) {
      handleButtonClick(3);
    }
    setSpeechIndex((prevIndex) => prevIndex + 1);
  }

  return (
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

        <div
          className="relative my-4 bg-white p-4 shadow-md"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 70%, 60% 70%, 20% 100%, 40% 70%, 0 70%)",
            height: "200px", // Set a fixed height for the speech bubble
            width: "400px",
          }}
        >
          <p className="text-lg">{speeches[speechIndex]}</p>
          <button
            id="next-button"
            onClick={handleNextSpeech}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 transform rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            Next
          </button>
          <span
            className="absolute h-6 w-6 rotate-45 transform bg-white"
            style={{ left: "-3px", bottom: "-3px" }}
          ></span>
          {/* The span element above is used to create the point at the bottom of the speech bubble */}
        </div>
      </div>
    </SpaceThemeBorder>
  );
}

export default countrySelect;

// <button
//   className="mx-2 rounded-md bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600"
//   onClick={() => handleButtonClick(3)}
// >
//   Continue
// </button>
