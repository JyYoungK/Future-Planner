import React from "react";

function spaceThemeBorder({ children }) {
  return (
    <div class="rounded-2xl border-8 border-white bg-gray-900 shadow-md">
      <div class=" border-8 border-black ">
        <div class=" border-4 border-yellow-500 p-10">{children}</div>
      </div>
    </div>
  );
}

export default spaceThemeBorder;
