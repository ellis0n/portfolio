import React from "react";

const Sidebar = () => {
  return (
    <div className="sideBar">
      <header>
        <img
          className="profileIcon"
          alt="TV Eyes"
          src="https://avatars.githubusercontent.com/u/100211236?s=400&u=405056a16bc41cf8a1edf7e1307e399751aa58fc&v=4"
        ></img>
        <h2>Superior Rubber Factory</h2>
      </header>
      <nav>
        <ul>
          <li>CODE</li>
          <li>GRAPHIC</li>
          <li>MUSIC</li>
          <li>VIDEO</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
