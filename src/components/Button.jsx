import React from "react";
const Button = ({ label, children }) => {
  return (
    <button
      type="submit"
      className="inline-flex items-center justify-center w-full px-5 py-3 my-2 text-sm font-medium leading-6 text-white bg-indigo-500 rounded-md shadow hover:bg-indigo-400 focus:outline-none"
    >
      {label || children || "button"}
    </button>
  );
};

export default Button;
