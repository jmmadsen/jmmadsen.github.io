import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../logo.svg';

class Home extends Component {

  render = () => {

    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <p>
                A simple website to introduce myself
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12} xs={12}>
              <a
                className="App-link"
                href="https://github.com/jmmadsen/jmmadsen.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Built using React - click here to see my code
              </a>
            </Col>
          </Row>
        </Container>
      </header>
    )

  }

}

export default Home;