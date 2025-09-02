"use client";
import React, { useState } from "react";
import ServiceCard from "./ServiceCard.jsx";
import ServiceTag from "./ServiceTag.jsx";

const projectsData = [
  {
    id: 1,
    title: "I'll Build a Responsive Website",
    description:
      "A fiverr Gig, where I will build a responsive website for you, using HTML, CSS and JavaScript. Add ons are available",
    image: "/Image/Projects/projectE-com.png",
    tag: ["All", "Fiverr"],
    gitUrl: "/",
    previewUrl: "https://www.fiverr.com/s/0bB8mbv",
  },
  {
    id: 2,
    title: "Ko-Fi Services",
    description:
      "Services can also be requested on Ko-fi, all within my capabilities.",
    image: "/Image/AboutImg_1.jpg",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ServicesSection = () => {
  const [tag, setTag] = useState("All");

  const filterProjects = projectsData.filter((project) =>
    tag === "All" ? true : project.tag.includes(tag)
  );

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };
  return (
    <section id="Services">
      <h2 className="text-4xl font-bold mb-12 text-center text-[#7B2CBF]">
        My Services
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2">
        <ServiceTag
          onClick={handleTagChange}
          tag="All"
          isSelected={tag === "All"}
          name="All"
        />
        <ServiceTag
          onClick={handleTagChange}
          tag="Fiverr"
          isSelected={tag === "Fiverr"}
          name="Fiverr"
        />
        <ServiceTag
          onClick={handleTagChange}
          tag="Ko-Fi"
          isSelected={tag === "Ko-Fi"}
          name="Ko-Fi"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filterProjects.map((project) => (
          <ServiceCard
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

export default ServicesSection;
