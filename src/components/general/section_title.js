export default function SectionTitle({ title }) {
    return (
        <div className="section-title column is-full">
            <h2 className="section-title__heading--mobile is-hidden-tablet has-text-white is-flex is-justify-content-center title--3">{title}</h2>
            <h2 className="section-title__heading is-hidden-mobile has-text-white is-flex is-flex-justify-content-start is-flex-align-items-center title--3">{title}</h2>
        </div>
    );
}