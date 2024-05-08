import React from "react";
import NavLinks from "./NavLinks";

const MenuOverlay = ({ links }) => {
  console.log(links);
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li>
          <NavLinks href={link.path} content={link.title}></NavLinks>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
