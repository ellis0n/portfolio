import React from "react";
import Dropdown from "./Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
          </button>
          <Dropdown dropdown={dropdown} submenus={items.submenu} />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;
