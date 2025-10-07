import React from 'react';
import './hero-component.css';
import joshua_profile from '../../../assets/images/Me-Gray-Suit.png';

export default function Hero() {
    return (
        <section className="section is-flex-tablet is-flex-justify-content-center is-flex-align-items-start portfolio-hero pt-sm-10 pt-md-15 pt-lg-25">
            <div className="column is-flex-tablet is-flex-align-items-start is-flex-direction-column">
                <h1 className="portfolio-hero__heading has-text-centered-mobile has-text-white title--2">Developing with <span>Excellence</span>, Guided by <span>Faith</span> and <span>Purpose</span>.</h1>
                <button className="portfolio-hero__btn btn btn--transparent-blue mt-5 px-2 py-2">View my resume</button>
            </div>
            <div className="column">
                <img className="portfolio-hero__image img-fluid-80" src={joshua_profile} alt="Joshua Williams Profile"></img>
            </div>
        </section>
    );
}

