import { Link } from 'react-router-dom';

export default function RecipeSummary({recipe}) {
    return (
        <div className="p-3 group">
            <Link to={`${recipe.idMeal}`}>
                {/* <img src={recipe.strMealThumb} className="group-hover:blur-sm group-hover:brightness-50 transition duration-500"></img> */}
                <img src={recipe.strMealThumb} className="backdrop-blur-sm bg-white/30 group-hover:backdrop-opacity-20 transition duration-500"></img>
                <h2>{recipe.strMeal}</h2>
            </Link>
        </div>
    );
}