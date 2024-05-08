import React from "react";
import NavLinks from "./NavLinks";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLinks
            href={link.path}
            content={link.title}
            key={index}
          ></NavLinks>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
