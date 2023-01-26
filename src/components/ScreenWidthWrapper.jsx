import React from "react";
const ScreenWidthWrapper = ({ children }) => {
  return (
    <div className="relative w-full px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
      {children}
    </div>
  );
};

export default ScreenWidthWrapper;
