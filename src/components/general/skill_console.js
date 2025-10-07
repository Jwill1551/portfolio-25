import React from "react";

export default function ProjectCard({ title, skills, type}) {
    return (
        <div className="skill-console my-lg-5">
            <div className="skill-console__title--wrapper is-flex is-justify-content-center is-align-items-center">
                <div className="skill-console__bullets is-flex ml-2 is-hidden-mobile">
                    <span className="skill-console__bullet"></span>
                    <span className="skill-console__bullet"></span>
                    <span className="skill-console__bullet"></span>
                </div>
                <h3 className="skill-console__title m-0 py-2 is-text-centered has-text-black">{title}</h3>
            </div>
            <div className={`skill-console__content skill-console__content--${type}`}>
                {skills}
            </div>
        </div>
    )
}