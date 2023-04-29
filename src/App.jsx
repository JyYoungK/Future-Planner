import React from "react";

function App() {
  return (
    <div className="h-full w-screen">
      <div className="flex h-1/6 flex-row justify-between border-2 border-black p-4">
        <div className="flex flex-row">
          <div className="text-2xl">Website Title</div>
          <div className="pl-12 text-xl"> Find Jobs</div>
          <div className="pl-12 text-xl"> Find Companies</div>
        </div>
        <div className="text-2xl"> Login</div>
      </div>
      <div className="flex h-1/6 flex-row border-2 border-black p-4">
        <div className="text-xl"> Country</div>
        <div className="pl-12 text-xl"> Province</div>
        <div className="pl-12 text-xl"> Job Category</div>
        <div className="pl-12 text-xl"> Job Title</div>
      </div>
    </div>
  );
}

export default App;
