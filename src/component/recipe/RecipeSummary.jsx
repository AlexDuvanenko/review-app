import { Link } from 'react-router-dom';

export default function RecipeSummary({recipe}) {
    return (
        <div className="group relative flex content-center">
            <Link to={`${recipe.idMeal}`}>
                <img src={recipe.strMealThumb} alt={recipe.strMeal} className="relative group-hover:blur-sm group-hover:brightness-50 transition duration-500"></img>
                <div className="opacity-0 absolute flex justify-center items-center z-10 left-0 top-0 w-full h-full transition duration-500 text-white text-xl font-semibold group-hover:opacity-100">{recipe.strMeal}</div>
            </Link>
        </div>
    );
}