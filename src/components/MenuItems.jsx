import React from "react";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  const [color, setColor] = useState("black");

  const handleDropDown = (e) => {
    setDropdown((prev) => !prev);
  };

  return (
    <li className="menu-items">
      {items.submenu ? (
        <div>
          <button
            type="button"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={handleDropDown}
          >
            {items.title}{" "}
          </button>
          <Dropdown dropdown={dropdown} submenus={items.submenu} />
        </div>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;
