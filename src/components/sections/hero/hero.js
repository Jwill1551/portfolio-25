import React from 'react';
import './hero-component.css';
import joshua_profile from '../../../assets/images/Me-Gray-Suit.png';

export default function Hero() {
    return (
        <section id="hero" className="section is-flex-tablet is-justify-content-center is-align-items-start portfolio-hero pt-sm-6 pt-md-8 pt-lg-10">
            <div className="column is-two-fifths is-flex-tablet is-flex-align-items-start is-flex-direction-column">
                <h1 data-aos="fade-right" className="portfolio-hero__heading has-text-centered-mobile has-text-white title--1 mb-5">Developing with <span>Excellence</span>, Guided by <span>Faith</span> and <span>Purpose</span>.</h1>
                <h2 data-aos="fade-right" className="portfolio-hero__subheading has-text-left has-text-centered-mobile has-text-white title--3">
                    As a developer who believes in doing all things with integrity, I build software that not only works efficiently — but uplifts, inspires, and serves others.
                </h2>
                <button data-aos="fade-right" className="portfolio-hero__btn btn btn--transparent-blue mt-5 p-3">View my resume</button>
            </div>
            <div  data-aos="fade-up" className="column is-half">
                <img className="portfolio-hero__image img-fluid-80" src={joshua_profile} alt="Joshua Williams Profile"></img>
            </div>
        </section>
    );
}

