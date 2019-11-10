
import React from 'react';
import './header.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
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
    <Navbar className="nav-class" expand="lg" fixed="top" >
    <Navbar.Brand href="/" className="logo">Jeevanjyoti<span>.</span>CV</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link ><Link to='/' className="nav-link">About</Link></Nav.Link>
        <Nav.Link ><Link to='/skills' className="nav-link">Skills</Link></Nav.Link>
        <Nav.Link ><Link to='/services' className="nav-link">Services</Link></Nav.Link>
        <Nav.Link ><Link to='/experience' className="nav-link">Experience</Link></Nav.Link>
        <Nav.Link ><Link to='/education' className="nav-link">Education</Link></Nav.Link>
        <Nav.Link ><Link to='/blogs' className="nav-link">Blogs</Link></Nav.Link>
        <Nav.Link href="https://www.youtube.com/channel/UCBBIM64VES_mzLsXNSpgdLw" className="nav-link">My Tutorials</Nav.Link>
        <Nav.Link ><Link to='/contact' className="nav-link">Contacts</Link></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header;
