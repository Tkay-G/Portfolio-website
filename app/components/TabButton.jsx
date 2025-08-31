import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-[#7b2cbf]"
    : "text-slate-400 border-b border-[#7b2cbf] hover:text-white";
  return (
    <button onClick={selectTab}>
      <p className={`mr-12 font-italic hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
