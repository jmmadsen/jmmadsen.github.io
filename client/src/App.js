import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/index.js';
import About from './Components/About/index.js';
import { IBM, CGI } from './Components/Work Experience/index.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand><Link exact={true} to='/'>Jacob Madsen</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link><Link to='/about'>About</Link></Nav.Link>
              <NavDropdown title="Work Experience" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to='/ibm'>IBM</Link></NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item><Link to='/cgi'>CGI Federal</Link></NavDropdown.Item>
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

        <Switch>
          <Route exact path='/' render={() => <Home/>}/>
          <Route path='/about' render={() => <About/>}/>
          <Route path='/ibm' render={() => <IBM/>}/>
          <Route path='/cgi' render={() => <CGI/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;