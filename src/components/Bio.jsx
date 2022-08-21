import React from "react";
import Navbar from ".//Navbar";
import Header from "./Header";
import Textbox from "./Textbox";
import { bio } from "../data";
import Footer from "./Footer";
import Contact from "./Contact";

const Bio = () => {
  return (
    <div>
      <Header></Header>
      <Navbar />
      <Textbox
        intro={bio.intro}
        text={bio.text}
        text2={bio.text2}
        list={bio.list}
        text3={bio.text3}
        list2={bio.list2}
        text4={bio.text4}
        list3={bio.list3}
      />
      <Contact />
      <Footer />
    </div>
  );
};

export default Bio;
