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
            <div className="columns">
                <SectionTitle title="Get In Touch" />
            </div>
            <div className="column text-center">
                <div className="columns is-align-items-center portfolio-contact__content py-md-8 py-lg-10">
                  <IconContext.Provider value={{ color: "black", className: "pro-technologies", size: "3em",}}>
                    <div className="column is-one-third-tablet is-half-desktop is-hidden-mobile is-flex is-align-items-center">
                        <div className="portfolio-contact__social first_social_item">
                            <MdAlternateEmail />
                        </div>
                        <a href="mailto:d.willjoshua@gmail.com" className="portfolio-contact__btn btn my-5 px-2 py-4">
                            <span className='btn__text text--3'>Click Here To Contact Me</span>
                        </a>
                    </div>
                    <div className="social_icon_wrapper column is-flex is-justify-content-space-evenly is-align-items-center is-flex-wrap-wrap">
                            <div class="social_icon p-2 mt-sm-4 is-hidden-tablet">
                                <a href="mailto:d.willjoshua@gmail.com" className="portfolio-contact__social">
                                    <MdAlternateEmail />
                                </a>
                                <span className="has-text-white">Email</span>
                            </div>
                            <div class="social_icon p-md-0 p-2 mt-sm-4 mt-md-3 mt-lg-3 is-relative">
                                <a href="https://github.com/Jwill1551" className="portfolio-contact__social">
                                    <FaGithub />
                                </a>
                                 <span className="has-text-white">Github</span>
                            </div>
                            <div class="social_icon p-md-0 p-2 mt-sm-4 mt-md-3 mt-lg-3 is-relative">
                                <a href="https://www.linkedin.com/in/joshua-williams-933498184" className="portfolio-contact__social">
                                    <TiSocialLinkedinCircular />
                                </a>
                                <span className="has-text-white">Linkedin</span>
                            </div>
                            <div class="social_icon p-md-0 p-2 mt-sm-4 mt-md-3 mt-lg-3 is-relative">
                                <a href="https://gcu-csm.symplicity.com/students/app/profile" className="portfolio-contact__social">
                                    <IoSchool />
                                </a>
                                <span className="has-text-white">Education</span>
                            </div>
                            <div class="social_icon p-md-0 p-2 mt-sm-4 mt-md-3 mt-lg-3 is-relative">
                                <a href="https://dev.to/jwill1551" className="portfolio-contact__social">
                                    <PiDevToLogo />
                                </a>
                                <span className="has-text-white">DEV.to</span>
                            </div>
                    </div>
                  </IconContext.Provider>
                </div>
            </div>
        </section>
    );
}