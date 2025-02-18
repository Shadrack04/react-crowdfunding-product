import React from "react";

function ProgressBar() {
  return (
    <div className=" my-2">
      <div className=" relative w-full h-4 rounded-full bg-gray-300 overflow-hidden">
        <div className=" absolute top-0 left-0 bottom-0 w-20 bg-[hsl(176_50%_47%)]"></div>
      </div>
    </div>
  );
}

export default ProgressBar;
