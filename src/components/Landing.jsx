import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import horseshoe from "../components/goodluck.png";

const Landing = () => {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="landingWrapper">
        <img className="horseshoe" src={horseshoe} alt="Horseshoe"></img>
      </div>
    </div>
  );
};

export default Landing;
