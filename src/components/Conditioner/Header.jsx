import React from "react";
// import "../App.css";
import telescope from "./telescope.png";

const Header = ({ props }) => {
  return (
    <div className="header">
      <img
        className="telescope"
        src={telescope}
        alt="Two disembodied hands holding a telescope"
      />

      <h1>CONDITIONER</h1>
      <h2>rock</h2>
    </div>
  );
};

export default Header;
