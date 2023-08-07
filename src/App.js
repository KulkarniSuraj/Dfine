import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";

function App() {
    const [definitions, setDefinitions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [currentCategory, setCurrentCategory] = useState("all");

    return (
        <>
            <Header />
            <main className="main">
              <CategoryFilter setCurrentCategory={setCurrentCategory}></CategoryFilter>
            </main>
        </>
    );
}
const Loader = () => {
    return <p className="message">Loading...</p>;
};
export default App;
