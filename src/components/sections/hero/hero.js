import React from 'react';
import './hero-component.css';
import joshua_profile from '../../../assets/images/Me-Gray-Suit.png';

export default function Hero() {
    return (
        <section id="hero" className="section columns is-multiline is-flex-tablet is-justify-content-center is-align-items-start portfolio-hero pt-sm-10 px-md-6 pt-md-8 pt-lg-10">
            <div className="column is-full is-two-fifths-desktop is-flex is-flex-align-items-start is-flex-direction-column">
                <h1 className="portfolio-hero__heading has-text-centered-mobile has-text-white title--1 mb-5">Developing with <span>Excellence</span>, Guided by <span>Faith</span> and <span>Purpose</span>.</h1>
                <h2 className="portfolio-hero__subheading has-text-left has-text-centered-mobile has-text-white title--3">
                    As a developer who believes in doing all things with integrity, I build software that not only works efficiently — but uplifts, inspires, and serves others.
                </h2>
                <button className="portfolio-hero__btn btn btn--transparent-blue mx-sm-auto my-sm-5 my-md-6 my-lg-5 p-3">View my resume</button>
            </div>
            <div className="column is-align-self-flex-end is-half-desktop">
                <img className="portfolio-hero__image img-fluid-80" src={joshua_profile} alt="Joshua Williams Profile"></img>
            </div>
        </section>
    );
}

