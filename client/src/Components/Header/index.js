import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

class NavBar extends Component {

  render = () => {

    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href='#home'>Jacob Madsen</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#link">About</Nav.Link>
            <NavDropdown title="Work Experience" id="basic-nav-dropdown">
              <NavDropdown.Item href="#link-to-ibm">IBM</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#link-to-cgi">CGI Federal</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Skills" id="basic-nav-dropdown">
              <NavDropdown.Item href="#link-to-technology">Technical</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#link-to-consulting">Consulting</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#link-to-finance">Finance</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Education" id="basic-nav-dropdown">
              <NavDropdown.Item href="#link-to-uva">University of Virginia</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )

  }

}

export default NavBar;