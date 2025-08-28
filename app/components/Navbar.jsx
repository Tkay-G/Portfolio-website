import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const navLinks = [
  { href: "#home", title: "Home" },
  { href: "#about", title: "About" },
  { href: "#services", title: "Services" },
  { href: "#portfolio", title: "Portfolio" },
  { href: "#contact", title: "Contact" },
];

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          Logo goes here
        </Link>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 lg:p-0 mt-4 md:mt-0 flex-col md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.href} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
