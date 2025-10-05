import React from 'react';
import './skills-component.css';
import SectionTitle from '../../general/section_title';
import SkillBar from '../../general/skill_bar';
import SkillConsole from '../../general/skill_console';

export default function Skills() {
    return (
        <section className="row row-cols-2 portfolio-skills">
            <div className="col-12">
                <SectionTitle title="Skills & Technologies" />
            </div>
            <div className="col">
                <SkillConsole title={"Frontend Development"} 
                              skills={[<SkillBar skill_title={"Lorem Ipsom"} skill_level={5} />, 
                                       <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                       <SkillBar skill_title={"Lorem Ipsom"} skill_level={4}/>,
                                       <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                       <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>]} 
                              type={"progress"} />
            </div>
            <div className="col">
                <SkillConsole title={"Backend Development"} 
                              skills={[<SkillBar skill_title={"Lorem Ipsom"} skill_level={5} />, 
                                       <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                       <SkillBar skill_title={"Lorem Ipsom"} skill_level={4}/>,
                                       <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                       <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>]} 
                              type={"progress"} />
            </div>
            <div className="col">
                <SkillConsole title={"Programming Languages"} 
                              skills={[<SkillBar skill_title={"Lorem Ipsom"} skill_level={5} />, 
                                       <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                       <SkillBar skill_title={"Lorem Ipsom"} skill_level={4}/>,
                                       <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                       <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>]} 
                              type={"progress"} />
            </div>
            <div className="col">
                <SkillConsole title={"Tools & Platforms"}
                              skills={[<SkillBar skill_title={"Lorem Ipsom"} skill_level={5} />, 
                                       <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                       <SkillBar skill_title={"Lorem Ipsom"} skill_level={4}/>,
                                       <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>,
                                       <SkillBar skill_title={"Lorem Ipsom"} skill_level={3}/>]} 
                              type={"badges"} />
            </div>
        </section>
    );
}