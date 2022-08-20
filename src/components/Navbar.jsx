import React from "react";
import { Link } from "react-router-dom";
import "../Styles/navbar.css";
import MenuItems from "./MenuItems";
import { menuItems } from "../data";

const Navbar = () => {
  return (
    <div className="navBar">
      <nav>
        <ul className="menus">
          {menuItems.map((menu, index) => {
            return <MenuItems items={menu} key={index} />;
          })}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
