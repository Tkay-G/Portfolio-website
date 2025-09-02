"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard.jsx";
import ProjectTag from "./ProjectTag.jsx";

const projectsData = [
  {
    id: 1,
    title: "Next.Js Portfolio Site",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS ",
    image: "/Image/Projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tkay-G/Portfolio-website",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "E-commerce Template",
    description:
      "A template of an E-commerce site, made with JS, HTML and CSS. Currently only the front page is designed  ",
    image: "/Image/Projects/projectE-com.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Tkay-G/E-commerce_Temp.git",
    previewUrl: "https://tkay-g.github.io/E-commerce_Temp/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");

  const filterProjects = projectsData.filter((project) =>
    tag === "All" ? true : project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  return (
    <section id="Portfolio">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#7B2CBF]">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2">
        <ProjectTag
          onClick={handleTagChange}
          tag="All"
          isSelected={tag === "All"}
          name="All"
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Web"
          isSelected={tag === "Web"}
          name="Web"
        />
        <ProjectTag
          onClick={handleTagChange}
          tag="Mobile"
          isSelected={tag === "Mobile"}
          name="Mobile"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filterProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
