'use client';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">
      <img src="/icon.png" alt="Company Icon" style={{ width: '40px', height: '40px' }} />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Services"  id="basic-nav-dropdown" aria-label="Services dropdown">
          <NavDropdown.Item href="/services#seo">SEO</NavDropdown.Item>
          <NavDropdown.Item href="/services#social-media">Social Media</NavDropdown.Item>
          <NavDropdown.Item href="/services#ppc">PPC</NavDropdown.Item>
          <NavDropdown.Item href="/services#web-development">Web Development</NavDropdown.Item>
          <NavDropdown.Item href="/services#logo">Logo</NavDropdown.Item>
          <NavDropdown.Item href="/services#graphic-design">Graphic Design</NavDropdown.Item>
          <NavDropdown.Item href="/services#mobile-app-design">Mobile App Design</NavDropdown.Item>
          <NavDropdown.Item href="/services#creative-advertising">Creative Advertising</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="/digital-marketing">Digital Marketing</Nav.Link>
        <Nav.Link href="/seo">SEO</Nav.Link>
        <Nav.Link href="/web-development">Web Development</Nav.Link>
        <Nav.Link href="/about-us">About Us</Nav.Link>
        <Nav.Link href="/contact-us">Contact Us</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
