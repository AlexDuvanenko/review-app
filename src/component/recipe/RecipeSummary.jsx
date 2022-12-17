import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RecipeSummary({recipe}) {
    return (
        <Col>
            <Card className="bg-dark text-white">
                <Link to={`${recipe.idMeal}`}>
                    <Card.Img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <Card.ImgOverlay>
                        <Card.Title>{recipe.strMeal}</Card.Title>
                    </Card.ImgOverlay>
                </Link>
            </Card>
        </Col>
    );
}