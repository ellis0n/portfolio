import React from "react";

//  PATH, CLASS
const Image = (props) => {
  return (
    <div className={props.class}>
      <img src="{props.path}" alt=""></img>
    </div>
  );
};

export default Image;
