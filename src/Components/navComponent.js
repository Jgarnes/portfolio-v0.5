import React from 'react';
import { Navbar, Nav, NavLink }from 'react-bootstrap';
import { Link, animateScroll as scroll, } from 'react-scroll';

function Navi () { 
    return (
    <Navbar expand="lg" sticky="top" bg="light" variant="light">
        <Navbar.Brand onClick={() => scroll.scrollToTop}>Jeremy Garnes</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar0-nav">
                <Nav className="ml-auto">
                <NavLink> <Link to="home" smooth={true} spy={true}>Home</Link></NavLink>
                <NavLink> <Link to="about" smooth={true} spy={true} duration={1000}>About/Skills</Link></NavLink>
                <NavLink> <Link to="project" smooth={true} spy={true} duration={1000}>Projects</Link></NavLink>
                <NavLink> <Link to="carousel" smooth={true} spy={true} duration={1000}>Carousel</Link></NavLink>
                <NavLink> <Link to="contact" smooth={true} spy={true} duration={1000}>Contact</Link></NavLink>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
    );
}

export default Navi;