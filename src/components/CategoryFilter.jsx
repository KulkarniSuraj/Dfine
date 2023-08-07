import "./CategoryFilter.css";
const CategoryFilter = ({ setCurrentCategory }) => {
    const CATEGORIES = [
        { name: "ITIL", color: "#3b82f6" },
        { name: "Infra", color: "#16a34a" },
        { name: "Tech", color: "#ef4444" },
    ];
    return (
        <aside>
            <ul className="category">
                <li key={"all"}>
                    <button
                        className="btn btn-all-categories"
                        onClick={() => setCurrentCategory("all")}
                    >
                        All
                    </button>
                </li>
                {CATEGORIES.map((category) => (
                    <li key={category.name} className="category">
                        <button
                            className="btn btn-category"
                            onClick={() => setCurrentCategory(category.name)}
                            style={{ backgroundColor: category.color }}
                        >
                            {category.name}
                        </button>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default CategoryFilter;
