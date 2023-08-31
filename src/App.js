import { useEffect, useState } from "react";
import supabase from "./supabase";
import "./App.css";
import Header from "./components/Header";
import CategoryFilter from "./components/CategoryFilter";
import DefinitionList from "./components/DefinitionList";

function App() {
    const [definitions, setDefinitions] = useState([]);
    const [currentCategory, setCurrentCategory] = useState("all");

    useEffect(() => {
        async function getDefinitions() {
            let query = supabase.from("Definition").select("*");
            if (currentCategory.toLowerCase() !== "all") {
                query = query.eq("category", currentCategory.toLowerCase());
            }

            let { data: Definition, error } = await query;
            if (!error) setDefinitions(Definition);
            else alert("Something went wrong");
        }
        getDefinitions();
    }, [currentCategory]);

    return (
        <>
            <Header />
            <main className="main">
                <CategoryFilter
                    handleCategory={setCurrentCategory}
                ></CategoryFilter>
                <DefinitionList definitions={definitions}></DefinitionList>
            </main>
        </>
    );
}
export default App;
