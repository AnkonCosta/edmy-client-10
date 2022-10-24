import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        src="site.png"
                        width="100"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/courses'>Courses</NavLink>
                        <NavLink to='/blog' >
                            Blog
                        </NavLink>
                        <NavLink to='/faqs' >
                            FAQ's
                        </NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <Navbar.Brand >
                            <img
                                src="site.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>

                        <Button variant="outline-success">Register</Button>
                        <Button variant="outline-success">Login</Button>
                        <Button variant="outline-success">Logout</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;