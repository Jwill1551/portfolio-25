export default function SkillBar({ skill_title, skill_level }) {
    return (
        <div className="skill-bar d-flex m-0 p-2">
            <div className="skill-bar__content is-flex is-justify-content-space-between w-100 py-1 px-2">
                <div className="skill-bar__progress"></div>
                <span className="skill-bar__skill-title">{skill_title}</span>
                <span className="skill-bar__skill-level">{skill_level} / 5</span>
            </div>
        </div>
    );
}