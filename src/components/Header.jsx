import React from "react";
import "../Styles/header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1 className="heading">ellison glen may</h1>
      </Link>
    </header>
  );
};

export default Header;
