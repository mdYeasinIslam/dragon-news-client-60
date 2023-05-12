import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { AuthContext, ModalContext } from '../../../contexts/UserContext';


const Header = () => {
    const { setShow } = useContext(ModalContext)
    const { user, logOut } = useContext(AuthContext)
    const handleShow = () => setShow(true);
    // console.log(user)
    const signOutAuth = () => {
        logOut()
            .then(() => {
                alert('You are loged out')
            })
            .catch(e => console.error(e))

    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                            <Link to='/' >Home</Link>

                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav >

                            {
                                user?.email ? <Button variant="light" onClick={signOutAuth}>Log Out</Button>
                                    :
                                    <>
                                        <Button variant="light"> <Link onClick={handleShow} to='/login' > log In </Link></Button>
                                        <Button variant="light"> <Link onClick={handleShow} to='/register' > Sign Up</Link></Button>
                                    </>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;