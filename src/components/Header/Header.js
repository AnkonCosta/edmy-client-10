import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

function Header() {
    const { user, logOut } = useContext(AuthContext);
    console.log(user)
    return (
        <Navbar bg="light" expand="lg" className='border border-bottom-success'>
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
                        className="mx-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className='mx-3 fw-semibold text-decoration-none text-success' to='/'>Home</NavLink>
                        <NavLink className='mx-3 fw-semibold text-decoration-none text-success' to='/courses'>Courses</NavLink>
                        <NavLink className='mx-3 fw-semibold text-decoration-none text-success' to='/blog' >
                            Blog
                        </NavLink>
                        <NavLink className='mx-3 fw-semibold text-decoration-none text-success' to='/faqs' >
                            FAQ's
                        </NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <Navbar.Brand >

                            {
                                user?.photoURL ? <img className='rounded-circle mt-3 border' height='40px' src={user.photoURL} alt="" />
                                    :
                                    <span>
                                        <FaUserCircle width='50px' className='mt-4'></FaUserCircle>
                                    </span>
                            }
                        </Navbar.Brand>


                        {
                            user?.uid ? <>
                                <Button className='mx-2' variant="outline-success"><Link onClick={logOut}>Logout</Link></Button>



                            </>
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