import React from "react";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
      </div>
      <div className="py-6 px-4 bg-[#181818] bg-opacity-60 p-4 rounded-b-xl w-full text-white">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
};
export default ProjectCard;
