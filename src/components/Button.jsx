import React from "react";

function Button({ children }) {
  return (
    <button className=" py-4 px-8 text-white text-lg bg-[hsl(176_50%_47%)] hover:bg-[hsl(176_72%_28%)] rounded-full">
      {children}
    </button>
  );
}

export default Button;
