
import React from 'react';
import './header.css';
import { 
  Button,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl
} from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="white" expand="lg" fixed="top" >
    <Navbar.Brand href="#home" className="logo">Jeevanjyoti<span>.</span>CV</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#About">About</Nav.Link>
        <Nav.Link href="#Skills">Skills</Nav.Link>
        <Nav.Link href="#Services">Services</Nav.Link>
        <Nav.Link href="#Experience">Experience</Nav.Link>
        <Nav.Link href="#Education">Education</Nav.Link>
        <Nav.Link href="#Blogs">Blogs</Nav.Link>
        <Nav.Link href="#My Tutorials">My Tutorials</Nav.Link>
        <Nav.Link href="#Contacts">Contacts</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header;
