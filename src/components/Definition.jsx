import { CATEGORIES } from "../categories";
import "./Definition.css"

function Definition({ definition }) {
    return (
        <li key={definition.id} className="definition">
            <p>
                {definition.description}
                <a className="source" href={definition.source} target="_blank">
                    (Source)
                </a>
            </p>
            <span
                className="tag"
                style={{
                    backgroundColor: CATEGORIES.find(
                        (cat) => cat.name.toLowerCase() === definition.category.toLowerCase()
                    ).color,
                }}
            >
                {definition.category}
            </span>
        </li>
    );
}

export default Definition;
