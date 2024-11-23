import React from "react";
import styles from "./hero-component--style.css";
import Image from "next/image";

const Hero = (props) => {
  return (
    <section id="hero" className="container">
      <div className="row hero__wrapper">
        <div className="col-6 hero_column--left">
          <h2 className="mb-6 hero_title">
            Hi, my name is <span>Joshua</span>. A Software
            <span>Developer</span>, with a passion for <span>Christ</span>.
          </h2>

          <button className="hero_btn">Download Resume</button>
        </div>
        <div className="col-6 hero_column--right">
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
