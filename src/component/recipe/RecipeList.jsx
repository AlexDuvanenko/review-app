import { Row } from 'react-bootstrap';
import RecipeSummary from './RecipeSummary';

export default function RecipeList({recipes}) {
    return (
        <Row className="g-2" xs={1} sm={2} md={3} lg={4} xxl={6}>
            {recipes.map(recipe => <RecipeSummary key={recipe.idMeal} recipe={recipe} />)}
        </Row>
    );
}