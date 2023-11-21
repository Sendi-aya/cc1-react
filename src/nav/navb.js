import React from 'react';
import image from './logo for my com 0 (1).png';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';


export default function NavgBasicExample() { const changeTheme = (theme) => {
    document.getElementById('bd').style.backgroundColor =
      theme === 'light' ? 'white' : 'black';
 };
  return (
    <div className="nv">


    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                      
                <Navbar.Brand href="/">
                  <img src={image} className='im' alt="aya" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home" className="nav-link font-weight-bold">
                        ACCUEIL
                        </Nav.Link>
                        <Nav.Link as={Link} to="/tp1-react" className="nav-link font-weight-bold">
                        Calculatrice
                        </Nav.Link>
                        <Nav.Link as={Link} to="/tp2-react" className="nav-link font-weight-bold">
                        SLIDER
                        </Nav.Link>
                        <Nav.Link as={Link} to="/tp3-react" className="nav-link font-weight-bold">
                          TO-DO LIST
                        </Nav.Link>
                        <Nav.Link as={Link} to="/tp4-react" className="nav-link font-weight-bold">
                          API
                        </Nav.Link>
                        <NavDropdown title="Theme" id="basic-nav-dropdown">
                          <NavDropdown.Item onClick={() => changeTheme('light')}>Light</NavDropdown.Item>
                          <NavDropdown.Item onClick={() => changeTheme('dark')}>Dark</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
  </div>


  );
}
