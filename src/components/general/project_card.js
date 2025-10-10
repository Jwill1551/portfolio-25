export default function ProjectCard({ title, description, imageUrl, projectUrl }) {
    return (
        <div className="project-card">
            <div className="prjoect-card__content--wrapper pb-sm-5 pb-lg-4">
                <img className="project-card__image img-fluid" src={imageUrl} loading="lazy" alt={`${title} Screenshot`} />
                <h3 className="project-card__title text--1 py-2 px-md-6 px-lg-4">{title}</h3>
                <p className="project-card__description text--5 px-md-6 px-lg-4 is-hidden-touch">{description}</p>
            </div>
            <a className="project-card__link my-2" href={projectUrl} target="_blank" rel="noopener noreferrer">View Project</a>
        </div>
    )
}