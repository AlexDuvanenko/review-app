import RecipeSummary from './RecipeSummary';

export default function RecipeList({recipes}) {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {recipes.map(recipe => <RecipeSummary key={recipe.idMeal} recipe={recipe} />)}
        </div>
    );
}