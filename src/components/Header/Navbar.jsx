import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-center p-5 text-orange-400 gap-4 shadow-lg">
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
    </nav>
  );
};

export default Navbar;
