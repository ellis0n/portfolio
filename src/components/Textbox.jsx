import React from "react";
import "../Styles/textbox.css";
const Textbox = ({ intro, text, text2, text3, text4, list, list2, list3 }) => {
  return (
    <div className="textbox">
      <h1>{intro}</h1>
      <h2>{text}</h2>
      <p>{text2}</p>
      <ol>
        {list.map((listed) => {
          return <li>{listed}</li>;
        })}
      </ol>
      <p>{text3}</p>
      <ol>
        {list2.map((listed, index) => {
          return (
            <div key={index}>
              <li>
                <a href={listed.url}>{listed.id}</a>
              </li>
            </div>
          );
        })}
      </ol>
      <p>{text4}</p>
      <ol>
        {list3.map((listed, index) => {
          return (
            <div key={index}>
              <li>
                <a href={listed.url}>{listed.id}</a>
              </li>
            </div>
          );
        })}
      </ol>
    </div>
  );
};

export default Textbox;
