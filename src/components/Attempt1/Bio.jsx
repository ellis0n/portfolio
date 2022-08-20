import React from "react";
import Navbar from "./Navbar";
import Textbox from "./Textbox";
const Bio = () => {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>
          Hi, <br /> I'm Glen.
        </h1>
        <Textbox></Textbox>
      </div>
    </div>
  );
};

export default Bio;
