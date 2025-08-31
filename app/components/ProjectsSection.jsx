import React from "react";
import ProjectCard from "./ProjectCard.jsx";

const projectsData = [
  {
    id: 1,
    title: "Next.Js Portfolio Site",
    description:
      "A personal portfolio website built with Next.js and Tailwind CSS ",
    image: "/Image/Projects/fashion-blog_madterbundles-2-724-1024x1024.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "E-commerce Template",
    description:
      "A template of an E-commerce site, made with JS, HTML and CSS. Currently only the front page is designed  ",
    image: "/Image/Projects/download.jpg",
    tag: ["All", "Web"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="Portfolio">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#7B2CBF]">
        My Projects
      </h2>
      <div>
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
