import React from "react";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-3xl"
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>
      <div className="bg-black bg-opacity-60 p-4 rounded-xl w-full text-white">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default ProjectCard;
