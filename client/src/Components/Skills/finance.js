import React, { Component } from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import supplydemand from '../../images/supplydemand.png';
import portfolio from '../../images/portfolio.png';
import nyse from '../../images/nyse.png';
import python from '../../images/python.png';
import robinhood from '../../images/robinhood.svg';

class Finance extends Component {

  render = () => {

    return(
      <Container>
        <br/>
        <Row>
          <div>
          <br/>
            <Col md={12} xs={12}>
              <h2>
                Markets and Investing
              </h2>
              <br/>
              <Row>
                <Col md={4} xs={4}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={nyse}
                    />
                  </Figure>
                </Col>
                <Col md={4} xs={4}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={supplydemand}
                    />
                  </Figure>
                </Col>
                <Col md={4} xs={4}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={portfolio}
                    />
                  </Figure>
                </Col>
              </Row>
              <br/>
              <p>
                I enjoy staying updated with daily market news and moves, and larger economic trends. I also
                research strategies for actively managing my own portfolio.
              </p>
            </Col>
          </div>
        </Row>
        <br/>
        <Row>
          <div>
          <hr style={{ border: '3px solid #DC3545' }}/>
          <br/>
            <Col md={12} xs={12}>
              <h2>
                Porftolio Automation
              </h2>
              <br/>
              <Row>
                <Col md={6} xs={6}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={python}
                    />
                  </Figure>
                </Col>
                <Col md={6} xs={6}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={robinhood}
                    />
                  </Figure>
                </Col>
              </Row>
              <br/>
              <p>
                I am currently using Python and the Robinhood API (no trading fees) to
                 create an automated derivatives trading app.
              </p>
            </Col>
          </div>
        </Row>
        <br/>
      </Container>
    )

  }

}

export default Finance;