import SectionTitle from '../../general/section_title';
import ProjectCard from '../../general/project_card';
import './project-component.css'

/*** React Slick Slider & Carousel ***/
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/*** Project Images ***/
import jigsaw_health from '../../../assets/images/jigsaw-health-overview.png';
import orchard_overview from '../../../assets/images/jigsaw-orchard-overview.png';
import sdg_overview from '../../../assets/images/saturday-dog-club-overview.png';
import oxbow_overview from '../../../assets/images/oxbow-overview.png';
import eclipse_overview from '../../../assets/images/eclipse-overview.png';
import dhbc_overview from '../../../assets/images/dhbc-overview.png';

export default function Projects() {
    const settings = {
    arrows: true,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1024, // below 1024px
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            centerMode: true
        }
        },
        {
        breakpoint: 768, // below 768px (mobile)
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
        }
    ]
    };
    return (
        <section className="section is-fluid portfolio-projects">
            <SectionTitle title="Projects & Collaborations" />
                <div className="project__wrapper w-100 py-sm-5 py-md-10 py-lg-15">
                        <Slider {...settings}>
                            <ProjectCard title={"Jigsaw Health"} 
                                            description={"Developed custom Shopify features and improved site performance for Jigsaw Health, a supplement brand known for its magnesium products. Worked on accessible UI components, optimized page loading, and refined product interactions to enhance user experience and conversions."} 
                                            imageUrl={jigsaw_health} 
                                            projectUrl={"https://www.jigsawhealth.com/"} />
                            <ProjectCard title={"Tuesday Night Pickleball"} 
                                            description={"Built and maintained the official event site for Tuesday Night Pickleball, a live entertainment experience at The Orchard. Integrated ticketing functionality, media galleries, and event schedules to capture the energy of the venue and streamline user engagement."} 
                                            imageUrl={orchard_overview} 
                                            projectUrl={"https://www.jigsawhealth.com/pages/arizona-pickleball-league"} />
                            <ProjectCard title={"Saturday Dog Club"} 
                                            description={"Contributed to the development of Saturday Dog Club, an ecommerce brand focused on premium pet products. Implemented responsive design and ADA-compliant UI elements to ensure an inclusive, mobile-friendly shopping experience."} 
                                            imageUrl={sdg_overview} 
                                            projectUrl={"https://saturdaydogclub.com/"} />
                            <ProjectCard title={"The Oxbow"} 
                                            description={"Helped design and develop The Oxbow website — a hospitality and retail hub — blending modern design with rustic aesthetics. Focused on building a seamless layout system and smooth navigation to reflect the brand’s welcoming and high-end atmosphere."} 
                                            imageUrl={oxbow_overview} 
                                            projectUrl={"https://theoxbowbozeman.com/"} />
                            <ProjectCard title={"Eclipse Fremont"} 
                                            description={"Worked on Eclipse Fremont, a property website showcasing modern apartment living. Contributed to interactive floor plan components, custom animations, and streamlined performance for a polished user experience."} 
                                            imageUrl={eclipse_overview} 
                                            projectUrl={"https://www.eclipsefremont.com/"} />
                            <ProjectCard title={"Desert Hills Bible Church"} 
                                            description={"Assisted in developing and maintaining the church’s WordPress site by building new components, editing ministry and content pages, and helping implement custom forms. Contributed to improving site usability, accessibility, and consistency across various sections of the website."} 
                                            imageUrl={dhbc_overview} 
                                            projectUrl={"https://deserthillschurch.com/"} />
                        </Slider>
                </div>
        </section>
    );
}

