import React from "react";

/*** Console Icons ***/
import { RiFullscreenFill } from "react-icons/ri";
import { CgMinimizeAlt } from "react-icons/cg";
import { IoIosClose } from "react-icons/io";
import { IconContext } from "react-icons";

export default function ProjectCard({ title, skills, type}) {
    return (
        <div className="skill-console">
            <div className="skill-console__title--wrapper is-flex is-justify-content-center is-align-items-center">
                <IconContext.Provider value={{ color: "#47DBFF", className: "pro-technologies", size: "0.5em",}}>
                <div className="skill-console__bullets is-flex ml-2 is-hidden-touch">
                    <span className="skill-console__bullet"></span>
                    <span className="skill-console__bullet"></span>
                    <span className="skill-console__bullet"></span>
                </div>
                </IconContext.Provider>
                <h3 className="skill-console__title m-0 py-2 is-text-centered has-text-black">{title}</h3>
            </div>
            <div className={`skill-console__content skill-console__content--${type}`}>
                {skills}
            </div>
        </div>
    )
}