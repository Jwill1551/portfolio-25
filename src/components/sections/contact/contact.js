import React from 'react';
import './contact-component.css';
import SectionTitle from '../../general/section_title';

/*** Import Icons For Social Contact ***/
import { IconContext } from 'react-icons';
import { MdAlternateEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { IoSchool } from "react-icons/io5";
import { PiDevToLogo } from "react-icons/pi";


export default function Contact() {
    return (
        <section id="contact" className="section portfolio-contact">
            <div className="column">
                <SectionTitle title="Get In Touch" />
            </div>
            <div className="column text-center">
                <div className="columns is-align-items-center portfolio-contact__content py-sm-6 py-md-8 py-lg-10">
                  <IconContext.Provider value={{ color: "black", className: "pro-technologies", size: "3em",}}>
                    <div className="column is-hidden-mobile is-flex is-align-items-center">
                        <div className="portfolio-contact__social first_social_item">
                            <MdAlternateEmail />
                        </div>
                        <button className="portfolio-contact__btn btn my-5 px-2 py-4">Click Here To Contact Me</button>
                    </div>
                    <div className="column is-flex is-justify-content-space-evenly is-align-items-center is-flex-wrap-wrap">
                            <div className="portfolio-contact__social is-hidden-tablet">
                                <MdAlternateEmail />
                            </div>
                            <div className="portfolio-contact__social">
                                <FaGithub />
                            </div>
                            <div className="portfolio-contact__social">
                                <TiSocialLinkedinCircular />
                            </div>
                            <div className="portfolio-contact__social">
                                <IoSchool />
                            </div>
                            <div className="portfolio-contact__social">
                                <PiDevToLogo />
                            </div>
                    </div>
                  </IconContext.Provider>
                </div>
            </div>
        </section>
    );
}