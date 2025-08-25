import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            Hello, I'm Taku
          </h1>
          <p className="text-gray-300 text-lg lg:text-4xl mb-5">
            Welcome to my portfolio
          </p>
          <p className="text-gray-400 mb-6">Discover my projects and skills.</p>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[450px] h-[450px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/Image/heroImage.png"
              alt="Hero Image"
              width={300}
              height={300}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-10/22 left-10/22"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
