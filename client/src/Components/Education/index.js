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
          <div>
            <Figure style={{ display: 'inline-block' }}>
              <Figure.Image
                width={70}
                height={30}
                alt="171x180"
                src={theory}
              />
            </Figure>
            <p>Theory of Financial Markets</p>
          </div>
          <div>
            <Figure style={{ display: 'inline-block' }}>
              <Figure.Image
                width={70}
                height={30}
                alt="171x180"
                src={behavioral}
              />
            </Figure>
            <p>Behavioral Finance</p>
          </div>
          <div>
            <Figure style={{ display: 'inline-block' }}>
              <Figure.Image
                width={75}
                height={35}
                alt="171x180"
                src={bank}
              />
            </Figure>
            <p>Money and Banking</p>
          </div>
          <div>
            <Figure style={{ display: 'inline-block' }}>
              <Figure.Image
                width={70}
                height={30}
                alt="171x180"
                src={economics}
              />
            </Figure>
            <p>Microeconomics and Macroeconomics</p>
          </div>
          <div>
            <Figure style={{ display: 'inline-block' }}>
              <Figure.Image
                width={70}
                height={30}
                alt="171x180"
                src={statistics}
              />
            </Figure>
            <p>Statistics and Econometrics</p>
          </div>
          <div>
            <Figure style={{ display: 'inline-block' }}>
              <Figure.Image
                width={70}
                height={30}
                alt="171x180"
                src={project}
              />
            </Figure>
            <p>Project Management</p>
          </div>
          <div style={{ fontSize: '8px' }}>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </Container>
      </header>
    )

  }

}

export default Educations;