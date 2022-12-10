import { Link } from 'react-router-dom';

export default function RecipeSummary({recipe}) {
    return (
        <>
            <ul>
                <li>
                    <Link to={`${recipe.idMeal}`}>{recipe.strMeal}</Link>
                </li>
            </ul>
        </>
    );
}