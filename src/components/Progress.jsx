import React from "react";
import ProgressBar from "./ProgressBar";

function Progress() {
  return (
    <div className=" px-10 py-5">
      <div className=" flex flex-col items-center md:flex-row md:justify-start md:gap-20">
        <div className=" flex flex-col items-center border-b-1 md:border-b-0 md:border-r-1 border-stone-300 pb-3 md:pr-6 my-2">
          <p className=" text-4xl font-bold">
            $<span>89,914</span>
          </p>
          <p className=" text-md text-gray-500">
            of $<span>100,000 backed</span>
          </p>
        </div>
        <div className=" flex flex-col items-center border-b-1 md:border-b-0 md:border-r-1 border-stone-300 pb-3 md:pr-6 my-2">
          <p className=" text-4xl font-bold">5,007</p>
          <p className=" text-md text-gray-500">total backers</p>
        </div>
        <div className=" flex flex-col items-center pb-3 my-2">
          <p className=" text-4xl font-bold">56</p>
          <p className=" text-md text-gray-500">days left</p>
        </div>
      </div>
      <ProgressBar />
    </div>
  );
}

export default Progress;
