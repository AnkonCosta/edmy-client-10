import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

function Header() {
    const { user } = useContext(AuthContext);
    console.log(user)
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


                        {
                            user?.uid ? <Button className='mx-2' variant="outline-success"><Link to=''>Logout</Link></Button>
                                :
                                <>
                                    <Button className='mx-2' variant="outline-success"><Link to='/register'>Register</Link></Button>
                                    <Button className='mx-2' variant="outline-success"><Link to='/login'>Login</Link></Button>
                                </>
                        }


                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;