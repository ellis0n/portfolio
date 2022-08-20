import React from "react";
import Header from "./Header";
import Globe from "./Globe";
import Footer from "./Footer";
import "./conditioner.css";

const Conditioner = () => {
  return (
    <div className="conditionerApp">
      <Header />
      <Globe />
      <Footer />
    </div>
  );
};

export default Conditioner;
