"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";

const AboutSection = () => {
  const [tab, setTab] = useState("Skills");
  const [startTransition, isPending] = useTransition();

  const handleTabClick = (id) => {
    setTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white about-section py-16 px-4 max-w-3xl mx-auto text-center">
      <div className="grid md:grid-cols-2 gap-8 items-center px-8 py-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/Image/logo v3.png"
          alt="logo intials"
          width={500}
          height={500}
          className="sm:item-center rounded-3xl mb-4"
        />
        <div>
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
          <div className="flex flex-row mt-9">
            <span className="mr-12 font-italic text-slate-400 hover:text-white border-b-[#7b2cbf] ">
              Skills
            </span>
            <span className="mr-12 font-italic text-slate-400 hover:text-white underline ">
              Certificates
            </span>
            <span className="mr-12 font-italic text-slate-400 hover:text-white underline ">
              Tools
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
