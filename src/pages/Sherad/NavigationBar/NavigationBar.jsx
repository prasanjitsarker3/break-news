import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';


const NavigationBar = () => {
    const { user } = useContext(AuthContext)
    return (
        <Container className='py-2'>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto fs-6 fw-bold d-flex align-items-center">
                            <Link to='/category/0'>Home</Link>
                            <Nav.Link href="#pricing">News</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user && <FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }
                            {
                                user ? <Button variant="secondary">Logout</Button> :
                                    <Link to='/login'> <Button variant="secondary">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;