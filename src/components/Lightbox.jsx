import React, { useState } from "react";
import { images } from "../data";
import "../Styles/lightbox.css";

const Lightbox = () => {
  const [nextImage, setNextImage] = useState("");
  const [display, setDisplay] = useState(false);

  const imageThumb = images.map((image) => (
    <img className="imageThumb" onClick={() => showImage(image)} src={image} />
  ));

  const showImage = (image) => {
    setNextImage(image);
    setDisplay(true);
  };

  const hideLightBox = () => {
    setDisplay(false);
  };

  const showNext = (e) => {
    e.stopPropagation();
    let curIndex = images.indexOf(nextImage);
    if (curIndex >= images.length - 1) {
      setDisplay(false);
    } else {
      let next = images[curIndex + 1];
      setNextImage(next);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let curIndex = images.indexOf(nextImage);
    if (curIndex <= 0) {
      setDisplay(false);
    } else {
      let last = images[curIndex - 1];
      setNextImage(last);
    }
  };

  return (
    <>
      <div>{imageThumb}</div>

      {display ? (
        <div id="lightbox" onClick={hideLightBox}>
          <button onClick={showPrev}>⭠</button>
          <img id="lightbox-img" src={nextImage}></img>
          <button onClick={showNext}>⭢</button>
        </div>
      ) : null}
    </>
  );
};

export default Lightbox;
