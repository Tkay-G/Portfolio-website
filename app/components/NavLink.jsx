import React from "react";

const NavLink = ({ href, title }) => {
  return (
    <a
      href={href}
      className="text-slate-400 mr-3 py-2 px-4 sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </a>
  );
};

export default NavLink;
