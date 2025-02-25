import { FaDollarSign } from "react-icons/fa6";
import { usePlan } from "../context/plan-context";

function InputComp({ minimumAmount, inputAmount, handleInput }) {
  return (
    <div className=" relative w-full">
      <FaDollarSign className=" absolute text-stone-500 left-4 top-1/2 w-6 h-6 transform -translate-y-1/2" />
      <input
        value={inputAmount}
        onChange={(e) => handleInput(e, minimumAmount || 0)}
        type="text"
        className=" text-xl  border-2 border-gray-300 inline-block w-28 py-4 pl-10 rounded-full focus:outline-none focus:ring-2 focus:ring-[hsl(176_50%_47%)]"
      />
    </div>
  );
}

export default InputComp;
