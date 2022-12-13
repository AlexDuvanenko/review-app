import { useState, useEffect } from "react";
import RecipeList from '../component/recipe/RecipeList';
import { APP_TITLE_PREFIX } from "../index";

const url = 'https:/www.themealdb.com/api/json/v1/1/search.php?f=c';

export default function Recipes() {
    const [recipes, setRecipes] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        document.title = `${APP_TITLE_PREFIX} - Recipes`;
        
        fetch(url)
            .then((res) => res.json())
            .then(data => {
                setRecipes(data.meals);
            })
            .catch(error => {
                console.error("Error fetching data", error);
            })
            .finally(() => setLoading(false));
    }, []);

    return ( 
        <div>
            <h1 className="text-3xl font-semi-bold">Recipes</h1>
            {loading && <h2 className="py-2">Loading, please wait...</h2>}
            {(!!recipes.length && !loading) && <RecipeList recipes={recipes} />}
        </div>
    );
}