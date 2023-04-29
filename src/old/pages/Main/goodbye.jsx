import { useEffect } from "react";
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
      className="flex w-full flex-col  text-3xl font-black text-yellow-500 md:text-5xl"
      style={backgroundStyle}
    >
      <div className="my-4">Thank you</div>
      <div className="my-4">Made by</div>
      <div className="my-4">Junyoung Kang</div>
    </div>
  );
}

export default goodbye;
