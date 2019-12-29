import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Route, Switch, HashRouter } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';
import Home from './Components/Home/index.js';
import About from './Components/About/index.js';
import Experience from './Components/Work Experience/index.js';
import Skills from './Components/Skills/index.js';
import Education from './Components/Education/index.js';
import Contact from './Components/Contact/index.js';

function App() {

  const [active, setActive] = useState('home');

  return (
    <div className="App">
      <HashRouter>
        <Navbar bg="light" expand="lg">
          <LinkContainer exact to='/'><Navbar.Brand onClick={ () => setActive('home') }>Jacob Madsen</Navbar.Brand></LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <LinkContainer to='/about'><Nav.Link onClick={ () => setActive('about') } active={ active === 'about' }>About</Nav.Link></LinkContainer>
              <LinkContainer to='/skills'><Nav.Link onClick={ () => setActive('skills') } active={ active === 'skills' }>Skills</Nav.Link></LinkContainer>
              <LinkContainer to='/experience'><Nav.Link onClick={ () => setActive('experience') } active={ active === 'experience' }>Work Experience</Nav.Link></LinkContainer>
              <LinkContainer to='/education'><Nav.Link onClick={ () => setActive('education') } active={ active === 'education' }>Education</Nav.Link></LinkContainer>
              <LinkContainer to='/contact'><Nav.Link onClick={ () => setActive('contact') } active={ active === 'contact' }>Contact Me</Nav.Link></LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/experience' component={Experience}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/education' component={Education}/>
          <Route path='/contact' component={Contact}/>
        </Switch>
      </HashRouter>
    </div>
  );
  
}

export default App;