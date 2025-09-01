"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "Skills",
    content: (
      <ul className="list-disc pl-2 list-inside">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Python</li>
      </ul>
    ),
  },

  {
    title: "Certificates",
    id: "Certificates",
    content: (
      <ul className="list-disc pl-2 list-inside">
        <li>JavaScript Essentials Cisco NetAcad</li>
      </ul>
    ),
  },

  {
    title: "Tools",
    id: "Tools",
    content: (
      <ul className="list-disc pl-2 list-inside">
        <li>VsCode</li>
        <li>Canva</li>
        <li>DaVinci Resolve</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section
      id="About"
      className="text-white about-section py-16 px-4  max-w-5xl mx-auto text-center"
    >
      <div className="grid w-full md:grid-cols-2 gap-8 items-center px-8 py-4 xl:gap-24 sm:py-16 xl:px-8">
        <Image
          src="/Image/AboutImg_2.jpg"
          alt="logo intials"
          width={1000}
          height={1000}
          className="item-center rounded-3xl mb-4 md:w-full h-auto "
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-[#7b2cbf] text-4xl font-bold mb-6">About Me</h2>
          <p className="text:-base lg:text-lg text-white">
            I'm passionate aspiring developer currently working on Web
            Development and I have a passion for development of IT solutions and
            apps. I love creating beautiful, performant, and accessible user
            experiences. I have experience working with {""}
            <span className="text-transparent bg-clip-text bg-[#b45eff]">
              HTML, CSS, JavaScript, React, Next.js, and Python.
            </span>
            I'm always eager to learn new technologies and improve my skills.
            When I'm not coding, I enjoy reading, listening to music, and gaming
          </p>
          <div className="flex flex-row justify-start mt-9">
            <TabButton
              selectTab={() => handleTabChange("Skills")}
              active={tab === "Skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("Certificates")}
              active={tab === "Certificates"}
            >
              {" "}
              Certificates{" "}
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("Tools")}
              active={tab === "Tools"}
            >
              {" "}
              Tools{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
