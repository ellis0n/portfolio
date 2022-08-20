import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navBar">
      <nav>
        <ul className="menus">
          <Link to="/bio">
            <li>BIO</li>
          </Link>
          <Link to="/work">
            <li>PROJECTS</li>
          </Link>
          <Link to="/design">
            <li>DESIGN</li>
          </Link>
          <Link to="/music">
            <li>MUSIC</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
