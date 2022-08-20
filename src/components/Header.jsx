import React from "react";
import "../Styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="nav-Area">
        <Link to="/">
          <h1>superior rubber company, ltd. </h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;
