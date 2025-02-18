import React from "react";

function Card({ children }) {
  return (
    <div className=" flex flex-col bg-white w-[90%] md:w-[60%] mx-auto mt-4 shadow-lg rounded-xl">
      {children}
    </div>
  );
}

export default Card;
