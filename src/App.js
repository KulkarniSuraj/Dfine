import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import DefinitionList from "./components/DefinitionList";

function App() {
    const [definitions, setDefinitions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCategory, setCurrentCategory] = useState("all");

    return (
        <>
            <Header />
            <main className="main">
              <CategoryFilter setCurrentCategory={setCurrentCategory}></CategoryFilter>
              <DefinitionList definitions={initialList}></DefinitionList>
            </main>
        </>
    );
}
const Loader = () => {
    return <p className="message">Loading...</p>;
};
export default App;

const initialList = [
  {
    id: 1,
    text: 'ITIL stands for Information Technology Infrastructure Library.',
    source: 'https://en.wikipedia.org/wiki/ITIL#:~:text=The%20Information%20Technology%20Infrastructure%20Library,the%20needs%20of%20the%20business.',
    category: 'ITIL',
  },
];