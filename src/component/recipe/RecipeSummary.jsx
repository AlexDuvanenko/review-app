import { Link } from 'react-router-dom';

export default function RecipeSummary({recipe}) {
    return (
        <div className="p-3">
            <Link to={`${recipe.idMeal}`}>{recipe.strMeal}</Link>
        </div>
    );
}