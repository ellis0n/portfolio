import React from "react";
import "../Styles/showcase.css";
import Project from "../components/Project";
const Showcase = ({ items, key, img }) => {
  console.log(items);
  return (
    <div className="showcase">
      <div key={key}>
        <h1 id={items.id}>{items.id}</h1>
        <h2>{items.sub}</h2>
        <img src={img} alt={items.alt} />
        <p>{items.text}</p>
      </div>
    </div>
  );
};

export default Showcase;
