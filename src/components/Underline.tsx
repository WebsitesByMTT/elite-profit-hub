import React from "react";

const Underline = () => {
  return (
    <div className="relative group w-full h-1 bg-[#fff] rounded-full overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[#00FFAF] transform -translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
    </div>
  );
};

export default Underline;
