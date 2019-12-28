import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

class Home extends Component {

  render = () => {

    return (
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo"/> */}
        <Container>
          <Row>
            <Col>
              <h1>
                Jacob Madsen
              </h1>
            </Col>
          </Row>
          <br/>
          <br/>
          <br/>
          <Row>
            <Col>
            <div id="wrapD3Cube">
              <div id="D3Cube">
                <div id="side1"></div>
                <div id="side3"><h3 style={{ position: 'absolute', top: '25%' }}>Software Developer</h3></div>
                <div id="side2"><h3 style={{ position: 'absolute', top: '25%' }}>Technology Consultant</h3></div>
                <div id="side4"><h3 style={{ lineHeight: '150px' }}>Team Lead</h3></div>
                <div id="side5"><h3 style={{ position: 'absolute', top: '25%' }}>Data Scientist</h3></div>
                <div id="side6"></div>
              </div>
            </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>
                A simple website to introduce myself
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
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