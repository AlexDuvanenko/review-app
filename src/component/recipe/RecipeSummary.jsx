import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function RecipeSummary({recipe}) {
    return (
        <Col>
            <Card className="">
                <Link to={`${recipe.idMeal}`}>
                    <Card.Img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <Card.ImgOverlay className="d-none d-lg-flex">
                        <Card.Title className="text-white">{recipe.strMeal}</Card.Title>
                    </Card.ImgOverlay>
                    <Card.Body className="d-flex d-lg-none">
                        <Card.Title>{recipe.strMeal}</Card.Title>
                    </Card.Body>
                </Link>
            </Card>
        </Col>
    );
}