"use client";
import Link from "next/link";
import { useState } from "react";
import NavLinks from "./NavLinks";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    id: 1,
    title: "About",
    path: "/about",
  },
  {
    id: 2,
    title: "Projects",
    path: "/projects",
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
  },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link href={"/"} className="font-semibold text-white text-5xl">
          Logo
        </Link>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              className="py-2 px-3 text-slate-200 hover:text-white rounded-sm border border-slate-20 hover:border-white"
              onClick={() => {
                setNavbarOpen((prev) => !prev);
              }}
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              className="py-2 px-3 border text-slate-200 border-slate-200 rounded-sm hover:text-white hover:border-white"
              onClick={() => {
                setNavbarOpen((prev) => !prev);
              }}
            >
              <XMarkIcon className="h-5 w-5 " />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="Navlinks">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link) => (
              <li key={link.id}>
                <NavLinks href={link.path} content={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
