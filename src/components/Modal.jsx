import PropTypes from "prop-types";
import { useEffect } from "react";

function Modal({ children }) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);
  return (
    <div className=" fixed inset-0 flex pt-10 pb-1 z-50 bg-black/50">
      <div className=" absolute right-5 top-15"></div>
      <div className="flex flex-col p-4 pb-8 bg-white w-[90%] max-h-[95vh] md:w-[60%] mx-auto mt-4 shadow-lg rounded-xl overflow-hidden">
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  children: PropTypes.any,
};

export default Modal;
