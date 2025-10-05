export default function ProjectCard({ title, description, imageUrl, projectUrl }) {
    return (
        <div className="project-card">
            <img className="project-card__image img-fluid" src={imageUrl} alt={`${title} Screenshot`} />
            <h3 className="project-card__title">{title}</h3>
            <div className="project-card__content d-none">
                <p className="project-card__description">{description}</p>
                <a className="project-card__link" href={projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
        </div>
    )
}