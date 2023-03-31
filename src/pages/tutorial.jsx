import React from "react";
import SpaceThemeBorder from "../components/spaceThemeBorder";
import { profile } from "../constant/profile";

function tutorial({ handleButtonClick }) {
  function handleTutorial(response) {
    profile.tutorial = response;
    handleButtonClick(2);
  }

  return (
    <div className="flex w-screen items-center justify-center text-white">
      <div className="h-4/5 w-5/6">
        <SpaceThemeBorder>
          <div className="rounded-lg p-8 ">
            <h1 className="mb-8 text-3xl font-bold">
              Do you wish to start with a tutorial?
            </h1>

            <div className="mt-8">
              <button
                className="mx-2 h-[50px] w-[150px] rounded-md border-2 border-white px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-black"
                onClick={() => handleTutorial(true)}
              >
                Yes
              </button>
              <button
                className="mx-2 h-[50px] w-[150px] rounded-md border-2 border-white px-4 py-2 transition duration-300 ease-in-out hover:bg-white hover:text-black"
                onClick={() => handleTutorial(false)}
              >
                No
              </button>
            </div>
          </div>
        </SpaceThemeBorder>
      </div>
    </div>
  );
}

export default tutorial;
