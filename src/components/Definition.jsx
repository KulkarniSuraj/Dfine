import { CATEGORIES } from "../categories";
import "./Definition.css"

function Definition({ definition }) {
    return (
        <li key={definition.id}>
            <p>
                {definition.text}
                <a className="source" href={definition.source} target="_blank">
                    (Source 🔗)
                </a>
            </p>
            <span
                className="tag"
                style={{
                    backgroundColor: CATEGORIES.find(
                        (cat) => cat.name === definition.category
                    ).color,
                }}
            >
                {definition.category}
            </span>
        </li>
    );
}

export default Definition;
