import React, { Component } from 'react';
import { Figure, Container, Row, Col } from 'react-bootstrap';
import uva from '../../images/uva.png';
import theory from '../../images/analytics.svg';
import behavioral from '../../images/thinking.svg';
import bank from '../../images/piggy-bank.svg';
import economics from '../../images/profits.svg';
import statistics from '../../images/diagram.svg';
import project from '../../images/manager.svg';

class Educations extends Component {

  render = () => {

    return(
      <header className="App-education">
        <Container>
          <h1>Education</h1>
          <br/>
          <img src={uva} alt='The Rotunda' style={{ height: '40vmin', borderRadius: '50%' }}/>
          <br/>
          <p>University of Virginia</p>
          <br/>
          <Row>
            <Col md={12} xs={12}>
              <p>
                I studied at UVA from 2012 - 2016, where I majored in Economics and minored in Leadership Studies.
                Below is a list of my relevant coursework.
              </p>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col md={6} xs={6}>
              <Figure>
                <Figure.Image
                  width={70}
                  height={30}
                  src={theory}
                />
                <Figure.Caption style={{ color: 'white' }}>
                  Theory of Financial Markets
                </Figure.Caption>
              </Figure>
            </Col>
            <Col md={6} xs={6}>
              <Figure>
                <Figure.Image
                  width={70}
                  height={30}
                  src={behavioral}
                />
                <Figure.Caption style={{ color: 'white' }}>
                  Behavioral Finance
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <Row>
            <Col md={6} xs={6}>
              <Figure style={{ display: 'inline-block' }}>
                <Figure.Image
                  width={75}
                  height={35}
                  src={bank}
                />
                <Figure.Caption style={{ color: 'white' }}>
                  Money and Banking
                </Figure.Caption>
              </Figure>
            </Col>
            <Col md={6} xs={6}>
              <Figure style={{ display: 'inline-block' }}>
                <Figure.Image
                  width={70}
                  height={30}
                  src={economics}
                />
                <Figure.Caption style={{ color: 'white' }}>
                  Microeconomics and Macroeconomics
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <Row>
            <Col md={6} xs={6}>
              <Figure style={{ display: 'inline-block' }}>
                <Figure.Image
                  width={70}
                  height={30}
                  src={statistics}
                />
                <Figure.Caption style={{ color: 'white' }}>
                  Statistics and Econometrics
                </Figure.Caption>
              </Figure>
            </Col>
            <Col md={6} xs={6}>
              <Figure style={{ display: 'inline-block' }}>
                <Figure.Image
                  width={70}
                  height={30}
                  src={project}
                />
                <Figure.Caption style={{ color: 'white' }}>
                  Project Management
                </Figure.Caption>
              </Figure>
            </Col>
          </Row>
          <br/>
          <div style={{ fontSize: '8px' }}>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </Container>
      </header>
    )

  }

}

export default Educations;