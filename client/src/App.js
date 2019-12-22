import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import Home from './Components/Home/index.js';
import About from './Components/About/index.js';
import Experience from './Components/Work Experience/index.js';
import { Technical, Consulting, Finance } from './Components/Skills/index.js';
import UVA from './Components/Education/index.js';


function App() {

  return (
    <div className="App">
      <HashRouter>
        <Navbar bg="light" expand="lg">
          <LinkContainer exact to='/'><Navbar.Brand>Jacob Madsen</Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to='/about'><Nav.Link>About</Nav.Link></LinkContainer>
              <LinkContainer to='/experience'><Nav.Link>Work Experience</Nav.Link></LinkContainer>
              <NavDropdown title="Skills" id="basic-nav-dropdown">
                <LinkContainer to='/technical'><NavDropdown.Item>Technical</NavDropdown.Item></LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to='/consulting'><NavDropdown.Item>Consulting</NavDropdown.Item></LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to='/finance'><NavDropdown.Item>Finance</NavDropdown.Item></LinkContainer>
              </NavDropdown>
              <NavDropdown title="Education" id="basic-nav-dropdown">
                <LinkContainer to='/uva'><NavDropdown.Item>University of Virginia</NavDropdown.Item></LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/experience' component={Experience}/>
          <Route path='/technical' component={Technical}/>
          <Route path='/consulting' component={Consulting}/>
          <Route path='/finance' component={Finance}/>
          <Route path='/uva' component={UVA}/>
        </Switch>
      </HashRouter>
    </div>
  );
  
}

export default App;