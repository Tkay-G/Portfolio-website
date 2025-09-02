import React from "react";

const ServiceTag = ({ name, onClick, isSelected }) => {
  const buttonStyle = isSelected
    ? "rounded-full border-2 border-[#7b2cbf]"
    : "rounded-full border-2 border-slate-600 hover:border-white ";
  return (
    <div className="text-white flex flex-row justify-center items-center gap-2 mb-5">
      <button
        className={`${buttonStyle} rounded-full border-2 py-3 px-6 cursor-pointer text-xl`}
        onClick={() => onClick(name)}
      >
        {name}
      </button>
    </div>
  );
};
export default ServiceTag;
