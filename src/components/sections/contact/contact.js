import React from 'react';
import './contact-component.css';
import SectionTitle from '../../general/section_title';

/*** Import Icons For Social Contact ***/
import icon__email from '../../../assets/icons/icon--email.svg';
import icon__linkedin from '../../../assets/icons/icon--linkedin.svg';
import icon__github from '../../../assets/icons/icon--github.svg';
import icon__dev from '../../../assets/icons/icon--dev.svg';
import icon__education from '../../../assets/icons/icon--education.svg';


export default function Contact() {
    return (
        <section className="section portfolio-contact">
            <div className="column">
                <SectionTitle title="Get In Touch" />
            </div>
            <div className="column text-center">
                <div className="columns is-align-items-center portfolio-contact__content">
                    <div className="column is-hidden-mobile is-flex is-align-items-center">
                        <div className="portfolio-contact__social first_social_item">
                            <img className="portfolio-contact__icon" src={icon__email} alt="Email Icon" />
                        </div>
                        <button className="portfolio-contact__btn btn my-5 px-2 py-2">Click Here To Contact Me</button>
                    </div>
                    <div className="column is-flex is-justify-content-space-evenly is-align-items-center is-flex-wrap-wrap">
                        <div className="portfolio-contact__social is-hidden-tablet">
                            <img className="portfolio-contact__icon" src={icon__email} alt="Email Icon" />
                        </div>
                        <div className="portfolio-contact__social">
                            <img className="portfolio-contact__icon" src={icon__github} alt="Github Icon" />
                        </div>
                        <div className="portfolio-contact__social">
                            <img className="portfolio-contact__icon" src={icon__linkedin} alt="LinkedIn Icon" />
                        </div>
                        <div className="portfolio-contact__social">
                            <img className="portfolio-contact__icon" src={icon__education} alt="Education Icon" />
                        </div>
                        <div className="portfolio-contact__social">
                            <img className="portfolio-contact__icon" src={icon__dev} alt="Dev.to Icon" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}