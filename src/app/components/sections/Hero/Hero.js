import React from "react";
import styles from "./hero-component--style.css";
import Image from "next/image";
import Blue_Button from "../../buttons/Blue_Button";

const Hero = (props) => {
  return (
    <section id="hero" className="container-fluid pt-8">
      <div className="row hero__wrapper">
        <div className="col-5 hero_column--left">
          <h2 className="mb-6 pt-6 hero_title">
            Hi, my name is <span>Joshua</span>.<br />A Software
            <span> Developer</span>,<br />
            with a passion for <span>Christ</span>.
          </h2>

          <Blue_Button url="#" text="Download Resume" />
        </div>
        <div className="col-4 hero_column--right">
          <div className="hero_img-wrapper">
            <img
              className="img-fluid"
              src={props.img.src}
              alt="Joshua Williams"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
