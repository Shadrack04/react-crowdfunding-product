import { FaDollarSign } from "react-icons/fa6";

function InputComp() {
  return (
    <div className=" relative w-full">
      <FaDollarSign className=" absolute text-stone-500 left-4 top-1/2 w-6 h-6 transform -translate-y-1/2" />
      <input
        type="text"
        className=" text-xl  border-2 border-gray-300 inline-block w-28 py-4 px-10 rounded-full focus:outline-none focus:ring-2 focus:ring-[hsl(176_50%_47%)]"
      />
    </div>
  );
}

export default InputComp;
