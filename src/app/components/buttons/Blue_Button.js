import React from "react";

const Blue_Button = (props) => {
  return (
    <a href={props.url} className="nav_btn hero_btn">
      {props.text}
    </a>
  );
};

export default Blue_Button;
