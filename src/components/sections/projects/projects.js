import React from 'react';
import SectionTitle from '../../general/section_title';
import ProjectCard from '../../general/project_card';
import './project-component.css';

/*** Swiper Carousel ***/
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

/*** React Icons ***/
import { IconContext } from "react-icons";
import { FaSass, FaJsSquare, FaShopify, FaBootstrap, FaArrowRight } from "react-icons/fa";
import { TiHtml5 } from "react-icons/ti";
import { GrWordpress } from "react-icons/gr";

/*** Project Images ***/
import jigsaw_health from '../../../assets/images/jigsaw-health-overview.png';
import orchard_overview from '../../../assets/images/jigsaw-orchard-overview.png';
import sdg_overview from '../../../assets/images/saturday-dog-club-overview.png';
import oxbow_overview from '../../../assets/images/oxbow-overview.png';
import eclipse_overview from '../../../assets/images/eclipse-overview.png';
import dhbc_overview from '../../../assets/images/dhbc-overview.png';

export default function Projects() {
  return (
    <section id="projects" className="section portfolio-projects">
      <div className="columns">
        <SectionTitle title="Projects & Collaborations" />
      </div>

      <div className="project__wrapper w-100 py-sm-6 py-md-8 py-lg-10">
        <Swiper
           modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
                0: {
                    navigation: false
                },
                768: {
                slidesPerView: 2,
                navigation: true,
                pagination: false
                },
                1024: {
                slidesPerView: 4,
                navigation: true,
                pagination: false
                }
            }}
        >
          <SwiperSlide>
            <ProjectCard
              title="Jigsaw Health"
              description="Developed custom Shopify features and improved site performance for Jigsaw Health, a supplement brand known for its magnesium products. Worked on accessible UI components, optimized page loading, and refined product interactions to enhance user experience and conversions."
              imageUrl={jigsaw_health}
              projectUrl="https://www.jigsawhealth.com/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Tuesday Night Pickleball"
              description="Built and maintained the official event site for Tuesday Night Pickleball, a live entertainment experience at The Orchard. Integrated ticketing functionality, media galleries, and event schedules to capture the energy of the venue and streamline user engagement."
              imageUrl={orchard_overview}
              projectUrl="https://www.jigsawhealth.com/pages/arizona-pickleball-league"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Saturday Dog Club"
              description="Contributed to the development of Saturday Dog Club, an ecommerce brand focused on premium pet products. Implemented responsive design and ADA-compliant UI elements to ensure an inclusive, mobile-friendly shopping experience."
              imageUrl={sdg_overview}
              projectUrl="https://saturdaydogclub.com/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="The Oxbow"
              description="Helped design and develop The Oxbow website — a hospitality and retail hub — blending modern design with rustic aesthetics. Focused on building a seamless layout system and smooth navigation to reflect the brand’s welcoming and high-end atmosphere."
              imageUrl={oxbow_overview}
              projectUrl="https://theoxbowbozeman.com/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Eclipse Fremont"
              description="Worked on Eclipse Fremont, a property website showcasing modern apartment living. Contributed to interactive floor plan components, custom animations, and streamlined performance for a polished user experience."
              imageUrl={eclipse_overview}
              projectUrl="https://www.eclipsefremont.com/"
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard
              title="Desert Hills Bible Church"
              description="Assisted in developing and maintaining the church’s WordPress site by building new components, editing ministry and content pages, and helping implement custom forms. Contributed to improving site usability, accessibility, and consistency across various sections of the website."
              imageUrl={dhbc_overview}
              projectUrl="https://deserthillschurch.com/"
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="column portfolio-projects__cta mt-sm-2">
        <a href="https://github.com/Jwill1551" className="btn btn--transparent-blue p-3">
          View more projects
        </a>
      </div>

      <div className="columns is-multiline is-flex is-justify-content-space-evenly portfolio-projects__technologies mt-7">
        <div data-aos="fade-right" className="column mb-sm-3 mb-lg-0 is-full-touch is-one-third-desktop is-flex-touch is-justify-content-center project_icon__title has-text-white title is-flex is-align-items-center">
          <h3 className="mb-lg-1 mr-lg-2">Technologies Used</h3>
          <span className="is-hidden-touch icon__arrow"><FaArrowRight /></span>
        </div>
        <IconContext.Provider value={{ color: "white", className: "pro-technologies", size: "4em" }}>
          <div data-aos="flip-right" className="column is-narrow project_icon__wrapper"><FaJsSquare /></div>
          <div data-aos="flip-right" className="column is-narrow project_icon__wrapper"><FaSass /></div>
          <div data-aos="flip-right" className="column is-narrow project_icon__wrapper"><TiHtml5 /></div>
          <div data-aos="flip-right" className="column is-narrow project_icon__wrapper"><FaBootstrap /></div>
          <div data-aos="flip-right" className="column is-narrow project_icon__wrapper"><FaShopify /></div>
          <div data-aos="flip-right" className="column is-narrow project_icon__wrapper"><GrWordpress /></div>
        </IconContext.Provider>
      </div>
    </section>
  );
}