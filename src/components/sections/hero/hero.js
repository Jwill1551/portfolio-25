import React, {useEffect} from 'react';
import './hero-component.css';
import joshua_profile from '../../../assets/images/Me-Gray-Suit--updated.png';
import joshua_resume from '../../../assets/files/my-resume-dev.pdf';

export default function Hero() {
    useEffect(() => {
    const img = document.querySelector('.portfolio-hero__image');
    if (img) img.classList.add('loaded');
    }, []);

    return (
        <section id="hero" className="section columns is-multiline is-flex-tablet is-justify-content-center is-align-items-start portfolio-hero pt-sm-10 px-md-6 pt-md-8 pt-lg-12">
            <div className="column is-full is-two-fifths-desktop is-flex is-flex-align-items-start is-flex-direction-column">
                <h1 class="portfolio-hero__heading has-text-centered-mobile has-text-white title--2 mb-5">Hi, my name is <span>Johsua</span>.</h1>
                <h2 className="portfolio-hero__heading has-text-centered-mobile has-text-white title--3 mb-2">Developing with <span>Excellence</span>, Guided by <span>Faith</span> and <span>Purpose</span>.</h2>
                <p className="portfolio-hero__content has-text-left has-text-centered-mobile has-text-white title--5">
                    As a developer who believes in doing all things with integrity, I build software that not only works efficiently — but uplifts, inspires, and serves others.
                </p>
                <a href={joshua_resume} download="newfilename" className="portfolio-hero__btn btn btn--transparent-blue mx-sm-auto my-sm-5 my-md-6 my-lg-5 p-3">Download my resume</a>
            </div>
            <div className="column is-align-self-flex-end is-half-desktop">
                <img className="portfolio-hero__image img-fluid-80" src={joshua_profile} alt="Joshua Williams Profile"></img>
            </div>
        </section>
    );
}

