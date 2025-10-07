import React from 'react';
import './skills-component.css';
import SectionTitle from '../../general/section_title';
import SkillBar from '../../general/skill_bar';
import SkillConsole from '../../general/skill_console';

/*** Skill Slider ***/
import Slider from 'react-slick';

export default function Skills() {
    const mobileSettings = {
    arrows: true,
    dots: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
        breakpoint: 1024, // below 1024px
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true
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
        <section className="section portfolio-skills">
            <div className="column is-full">
                <SectionTitle title="Skills & Technologies" />
            </div>
            
            <div class="columns is-multiline portfolio-skills__wrapper--desktop is-hidden-touch">
                <div className="column is-half">
                    <SkillConsole title={"Frontend Development"} 
                                skills={[<SkillBar skill_title={"Lorem Ipsom"} skill_level={5} />, 
                                        <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                        <SkillBar skill_title={"Lorem Ipsom"} skill_level={4}/>,
                                        <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                        <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>]} 
                                type={"progress"} />
                </div>
                <div className="column is-half">
                    <SkillConsole title={"Backend Development"} 
                                skills={[<SkillBar skill_title={"Lorem Ipsom"} skill_level={5} />, 
                                        <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                        <SkillBar skill_title={"Lorem Ipsom"} skill_level={4}/>,
                                        <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                        <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>]} 
                                type={"progress"} />
                </div>
                <div className="column is-half">
                    <SkillConsole title={"Programming Languages"} 
                                skills={[<SkillBar skill_title={"Lorem Ipsom"} skill_level={5} />, 
                                        <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                        <SkillBar skill_title={"Lorem Ipsom"} skill_level={4}/>,
                                        <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                        <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>]} 
                                type={"progress"} />
                </div>
                <div className="column is-half">
                    <SkillConsole title={"Tools & Platforms"}
                                skills={[<SkillBar skill_title={"Lorem Ipsom"} skill_level={5} />, 
                                        <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                        <SkillBar skill_title={"Lorem Ipsom"} skill_level={4}/>,
                                        <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                        <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>]} 
                                type={"badges"} />
                </div>
            </div>
            <div class="portfolio-skills__wrapper--mobile is-hidden-desktop">
                <Slider {...mobileSettings}>
                    <div className="column">
                        <SkillConsole title={"Frontend Development"} 
                                    skills={[<SkillBar skill_title={"Lorem Ipsom"} skill_level={5} />, 
                                            <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                            <SkillBar skill_title={"Lorem Ipsom"} skill_level={4}/>,
                                            <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                            <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>]} 
                                    type={"progress"} />
                    </div>
                    <div className="column">
                        <SkillConsole title={"Backend Development"} 
                                    skills={[<SkillBar skill_title={"Lorem Ipsom"} skill_level={5} />, 
                                            <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                            <SkillBar skill_title={"Lorem Ipsom"} skill_level={4}/>,
                                            <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                            <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>]} 
                                    type={"progress"} />
                    </div>
                    <div className="column">
                        <SkillConsole title={"Programming Languages"} 
                                    skills={[<SkillBar skill_title={"Lorem Ipsom"} skill_level={5} />, 
                                            <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                            <SkillBar skill_title={"Lorem Ipsom"} skill_level={4}/>,
                                            <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                            <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>]} 
                                    type={"progress"} />
                    </div>
                    <div className="column">
                        <SkillConsole title={"Tools & Platforms"}
                                    skills={[<SkillBar skill_title={"Lorem Ipsom"} skill_level={5} />, 
                                            <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                            <SkillBar skill_title={"Lorem Ipsom"} skill_level={4}/>,
                                            <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                            <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>]} 
                                    type={"badges"} />
                    </div>
                </Slider>
            </div>
        </section>
    );
}