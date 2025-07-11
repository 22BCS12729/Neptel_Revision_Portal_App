import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="brand">
        <h1>
          <NavLink to="/">NPTEL REVISION PORTAL</NavLink>
        </h1>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <a
            href="https://onlinecourses.nptel.ac.in/noc22_cs61/course"
            target="_blank"
          >
            Go to course
          </a>
        </li>
        <li>
          <a href="https://github.com/22BCS12729" target="_blank">
            Git Hub
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
