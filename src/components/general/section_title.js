export default function SectionTitle({ title }) {
    return (
        <div className="section-title text-center text-white my-8">
            <h2 className="section-title__heading d-flex justify-content-start align-items-center">{title}</h2>
        </div>
    );
}