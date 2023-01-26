import React from "react";
import { NavLink } from "react-router-dom";
const NavBarLogo = ({ link, src, label }) => {
  return (
    <NavLink
      to={link}
      className="flex items-center flex-none mr-3 overflow-hidden md:w-auto text-slate-200"
    >
      <img src={src} className="items-center inline-block h-8" alt="rr-logo" />
      <span className="mx-4 font-bold text-slate-800">{label}</span>
    </NavLink>
  );
};

export default NavBarLogo;
