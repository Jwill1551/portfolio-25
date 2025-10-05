import React from "react";

export default function ProjectCard({ title, skills, type}) {
    return (
        <div className="skill-console my-5">
            <div className="skill-console__title--wrapper d-flex justify-content-center align-items-center">
                <div className="skill-console__bullets d-flex ml-2">
                    <span className="skill-console__bullet"></span>
                    <span className="skill-console__bullet"></span>
                    <span className="skill-console__bullet"></span>
                </div>
                <h3 className="skill-console__title m-0 py-2">{title}</h3>
            </div>
            <div className={`skill-console__content skill-console__content--${type}`}>
                {skills}
            </div>
        </div>
    )
}