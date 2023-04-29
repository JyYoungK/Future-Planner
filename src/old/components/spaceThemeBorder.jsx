import React from "react";

function spaceThemeBorder({ children }) {
  return (
    <div className="h-full w-full rounded-2xl border-8 border-white bg-gray-900 shadow-md">
      <div className="h-full w-full border-8 border-black">
        <div className="h-full w-full border-4 border-yellow-500 p-2 md:p-10">
          {children}
        </div>
      </div>
    </div>
  );
}

export default spaceThemeBorder;
