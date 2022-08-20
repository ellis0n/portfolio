import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { showcases } from "../data";
import Showcase from "./Showcase";

const Work = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <div>
        {showcases.map((showcase, index) => {
          return <Showcase items={showcase} key={index} img={showcase.img} />;
        })}
      </div>
    </div>
  );
};

export default Work;
