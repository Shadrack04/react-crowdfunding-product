import React from "react";
import { usePlan } from "../context/plan-context";

function ProgressBar() {
  const { state } = usePlan();
  const { amountReceived } = state;
  const progressPercent = 100 * (amountReceived / 100000) + "%";

  return (
    <div className=" my-2">
      <div className=" relative w-full h-4 rounded-full bg-gray-300 overflow-hidden">
        <div
          style={{ width: progressPercent }}
          className=" absolute top-0 left-0 bottom-0  bg-[hsl(176_50%_47%)]"
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
