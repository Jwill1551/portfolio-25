import React from "react";
import styles from "./card-component--style.css";

const Card = (props) => {
  return (
    <div className="pt_card">
      <div className="pt_card__wrapper">
        <img src={props.img_src} alt={props.img_alt} />
        <div className="pt_card__menu">
          <div className="pt_card__title">{props.title}</div>
          <div className="pt_card__desc">{props.desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
