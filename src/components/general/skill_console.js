import React from "react";

/*** Console Icons ***/
export default function ProjectCard({ title, skills, type}) {
    return (
        <div className="skill-console">
            <div className="skill-console__title--wrapper is-flex is-justify-content-center is-align-items-center">
                <h3 className="skill-console__title m-0 py-2 is-text-centered has-text-black">{title}</h3>
            </div>
            <div className={`skill-console__content skill-console__content--${type}`}>
                {skills}
            </div>
        </div>
    )
}