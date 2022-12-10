import RecipeSummary from './RecipeSummary';

export default function RecipeList({recipes}) {
    return (
        <>
            {recipes.map(recipe => <RecipeSummary key={recipe.idMeal} recipe={recipe} />)}
        </>
    );
}