import { useContext, useState } from 'react';
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
    const [theme, setTheme] = useState(true);
    return (
        <Navbar bg="light" expand="lg" className='border border-bottom-success'>
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                        src="favicon.ico"
                        width="100"
                        height="30"
                        className="d-inline-block align-top"
                        alt=""
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
                        <li onClick={() => setTheme(!theme)}>
                            {theme ? <NavLink className='mx-3 fw-semibold text-decoration-none text-success'>Light
                            </NavLink>
                                : <NavLink className='mx-3 fw-semibold text-decoration-none text-success'>Dark
                                </NavLink>}
                        </li>
                    </Nav>
                    <Form className="d-flex">
                        <Navbar.Brand >

                            {
                                user?.photoURL ? <img title={user.displayName} className='rounded-circle mt-3 border' height='40px' src={user.photoURL} alt="" />
                                    :
                                    <span>
                                        <FaUserCircle width='50px' className='mt-4'></FaUserCircle>
                                    </span>
                            }
                        </Navbar.Brand>


                        {
                            user?.uid ? <>
                                <Button className='mx-2' variant="outline-success"><Link className='text-black text-decoration-none' onClick={logOut}>Logout</Link></Button>



                            </>
                                :
                                <>
                                    <Button className='mx-2' variant="outline-success"><Link to='/register' className='text-black text-decoration-none'>Register</Link></Button>
                                    <Button className='mx-2' variant="outline-success"><Link to='/login' className='text-black text-decoration-none'>Login</Link></Button>
                                </>
                        }


                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}

export default Header;