import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className=" flex justify-between items-center  h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold">Github Search</h3>
      <span>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `mr-4 ${isActive ? "text-[#93ceff] underline" : ""}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/favourites"
          className={({ isActive }) =>
            `${isActive ? "text-[#93ceff] underline" : ""}`
          }
        >
          Favourites
        </NavLink>
      </span>
    </nav>
  );
};

export default Navigation;
