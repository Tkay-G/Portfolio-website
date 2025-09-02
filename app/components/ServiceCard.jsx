import React from "react";
import Link from "next/link";
import { EyeIcon } from "@heroicons/react/24/outline";

const ServiceCard = ({ title, description, imgUrl, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        {/* Overlay */}
        <div className="overlay absolute top-0 left-0 w-full h-full bg-[#181818] opacity-0 group-hover:opacity-80 transition-opacity duration-500  flex space-x-8 items-center justify-center">
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 rounded-full border-slate-300 hover:border-white flex items-center justify-center"
          >
            <EyeIcon
              className="h-8 w-8 text-slate-300 cursor-pointer hover:text-white"
              aria-label="Preview "
            />
          </Link>
        </div>
      </div>
      {/* Card Bottom */}
      <div className="py-6 px-4 bg-[#181818] bg-opacity-60 p-4 rounded-b-xl w-full text-white">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-slate-400">{description}</p>
      </div>
    </div>
  );
};
export default ServiceCard;
