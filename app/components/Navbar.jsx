"use client";

import React, { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { href: "#Home", title: "Home" },
  { href: "#Services", title: "Services" },
  { href: "#Portfolio", title: "Portfolio" },
  { href: "#Contact", title: "Contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2">
        <a href={"#Home"} className="text-5xl text-white font-semibold">
          <Image
            src="/Image/personal logo.png"
            alt="Logo"
            width={250}
            height={50}
          />
        </a>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-4 py-3 border rounded border-slate-200 text-slate-400 hover:text-[#7B2CBF] hover:border-[#7B2CBF]"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-4 py-3 border rounded border-slate-200 text-slate-400 hover:text-[#7B2CBF] hover:border-[#7B2CBF]"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.title}>
                <a
                  href={link.href}
                  className="text-white text-3xl mr-3 px-3 hover:text-[#7b2cbf]"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? (
        <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} />
      ) : null}
    </nav>
  );
};

export default Navbar;
