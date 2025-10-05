export default function SkillBar({ skill_title, skill_level }) {
    return (
        <div className="skill-bar d-flex m-0 p-2">
            <div className="skill-bar__content d-flex justify-content-between w-100 py-1 px-2">
                <span className="skill-bar__skill-title">{skill_title}</span>
                <span className="skill-bar__skill-level">{skill_level}</span>
            </div>
        </div>
    );
}