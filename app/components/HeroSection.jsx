import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section id="Home">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            Heyyy, I'm {""}
            <span className="text-transparent bg-clip-text bg-[#7B2CBF]">
              Taku
            </span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg lg:text-4xl mb-6">
            Welcome to my portfolio site, get to know me and my work!
          </p>
          <div>
            <button className="text-white px-6 py-3 w-full sm:w-fit rounded-full bg-[#252525] mr-4 hover:bg-slate-200 hover:text-black mb-4">
              <a href="#Contact">Hire Me</a>
            </button>
            {/* <button className="text-white px-6 py-3 w-full sm:w-fit rounded-full bg-[#252525] mr-4 hover:bg-slate-200 hover:text-black mb-4">
              Download My CV
            </button> 
            */}
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
          <div className="rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/Image/heroImage.png"
              alt="Hero Image"
              width={250}
              height={250}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-10/22 left-10/22 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
