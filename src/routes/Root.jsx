import { Container, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import HeaderNav from "../component/nav/HeaderNav";

export default function Root() {
    return (
        <>
            <HeaderNav>
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/about">About</Nav.Link>
                <Nav.Link as={Link} to="/recipes">Recipes</Nav.Link>
            </HeaderNav>
            <Container fluid>
                <Outlet />
            </Container>
        </>
    );
}