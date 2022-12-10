import RecipeSummary from './RecipeSummary';

export default function RecipeList({recipes}) {
    return (
        <div className="sm:columns-2 lg:columns-3 py-2">
            {recipes.map(recipe => <RecipeSummary key={recipe.idMeal} recipe={recipe} />)}
        </div>
    );
}