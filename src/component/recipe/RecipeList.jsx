import RecipeSummary from './RecipeSummary';

export default function RecipeList({recipes}) {
    return (
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 my-4">
            {recipes.map(recipe => <RecipeSummary key={recipe.idMeal} recipe={recipe} />)}
        </div>
    );
}