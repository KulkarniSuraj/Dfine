import "./DefinitionList.css";
import Definition from "./Definition";

function DefinitionList({ definitions }) {
    if (definitions.length === 0) return (
        <p className="message">
            No definitions in this category!
        </p>
    )
    return (
        <section>
            <ul>
            {definitions.map((def) => (
                <Definition key={def.id} definition={def} />
            ))}
            </ul>
            <p>There is/are {definitions.length} definition/s available in this category.</p>
        </section>
    );
}
  export default DefinitionList;