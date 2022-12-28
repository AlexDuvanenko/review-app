import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeaderNav({children}) {
    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand as={Link} to="/">Review App</Navbar.Brand>
                <Nav>
                    {children}
                </Nav>
            </Container>
        </Navbar>
    );
}