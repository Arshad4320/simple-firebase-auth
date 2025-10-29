import React from "react";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-center p-5  gap-4 shadow-lg">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold " : "text-gray-600"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold " : "text-gray-600"
        }
        to="/about"
      >
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-bold " : "text-gray-600"
        }
        to="/login"
      >
        Login
      </NavLink>
    </nav>
  );
};

export default Navbar;
