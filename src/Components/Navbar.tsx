import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link to="/">all</Link>
      <span> </span>
      <Link to="/?todos=active">active</Link>
      <span> </span>
      <Link to="/?todos=completed">completed</Link>
    </nav>
  );
};

export default Navbar;
