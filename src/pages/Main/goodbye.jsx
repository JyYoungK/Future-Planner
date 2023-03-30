import React from "react";

import SpaceBackground from "../../assets/SpaceBackground.gif";

function goodbye() {
  const backgroundStyle = {
    backgroundImage: `url(${SpaceBackground})`,
    backgroundSize: "cover",
    height: "96vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div
      className="flex w-full flex-col justify-between"
      style={backgroundStyle}
    >
      <div className="mb-5 text-3xl text-white">Thank you</div>
      <div className="text-2xl text-white">Made by: Junyoung Kang</div>
    </div>
  );
}

export default goodbye;
