import "./CategoryFilter.css";
import { CATEGORIES } from "../categories.js";
const CategoryFilter = ({ handleCategory }) => {
  return (
    <aside>
      <ul className="category">
        <li key={"all"}>
          <button
            className="btn btn-all-categories"
            onClick={() => handleCategory("all")}
          >
            All
          </button>
        </li>
        {CATEGORIES.map((category) => (
          <li key={category.name} className="category">
            <button
              className="btn btn-category"
              onClick={() => {
                handleCategory(category.name.toLowerCase());
              }}
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
