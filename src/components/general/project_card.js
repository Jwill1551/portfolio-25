export default function ProjectCard({ title, description, imageUrl, projectUrl }) {
    return (
        <div className="column project-card">
            <img className="project-card__image img-fluid" src={imageUrl} alt={`${title} Screenshot`} />
            <a className="project-card__link is-hidden-tablet" href={projectUrl} target="_blank" rel="noopener noreferrer">
                <h3 className="project-card__title--mobile">{title}</h3>
            </a>
            <h3 className="project-card__title text--1 is-hidden-mobile">{title}</h3>
            <div className="project-card__content is-hidden-mobile">
                <p className="project-card__description text--4">{description}</p>
                <a className="project-card__link" href={projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    )
}