import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navBar">
      <header>
        <img
          className="profileIcon"
          alt="TV Eyes"
          src="https://avatars.githubusercontent.com/u/100211236?s=400&u=405056a16bc41cf8a1edf7e1307e399751aa58fc&v=4"
        ></img>
        <h2>Glen May</h2>
      </header>
      <div className="nav">
        <nav>
          <ul>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/bio">
              <li>BIO</li>
            </Link>
            <Link to="/conditioner">
              <li id="sublink">CONDITIONER</li>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
