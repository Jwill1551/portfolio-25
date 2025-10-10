export default function SectionTitle({ title }) {
    return (
        <div className="section-title column is-full">
            <h2 className="section-title__heading--mobile is-hidden-tablet has-text-white is-flex is-justify-content-center title--3">{title}</h2>
            <h2 data-aos="fade-left" className="section-title__heading is-hidden-mobile has-text-white is-flex is-justify-content-start is-align-items-center title is-5 title--3">{title}</h2>
        </div>
    );
}