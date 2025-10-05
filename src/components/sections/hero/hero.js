import React from 'react';
import './hero-component.css';
import joshua_profile from '../../../assets/images/Me-Gray-Suit.png';

export default function Hero() {
    return (
        <section className="row justify-content-center portfolio-hero pt-25">
            <div className="col-4 d-flex flex-column align-items-start">
                <h1 className="portfolio-hero__heading text-white">Hi, my name is <span>Joshua</span>.<br></br>
                A Software <span>Developer</span>,<br></br>
                with a passion for <span>Christ</span>.</h1>
                <button className="portfolio-hero__btn btn btn--transparent-blue mt-5 px-2 py-2">View my resume</button>
            </div>
            <div className="col-4">
                <img className="portfolio-hero__image img-fluid" src={joshua_profile} alt="Joshua Williams Profile"></img>
            </div>
        </section>
    );
}

