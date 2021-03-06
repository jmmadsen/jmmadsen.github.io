import React, { Component } from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import supplydemand from '../../images/supplydemand.png';
import portfolio from '../../images/portfolio.png';
import nyse from '../../images/nyse.png';
import python from '../../images/python.png';
import robinhood from '../../images/robinhood.svg';
import trading from '../../images/trading.png';

class Finance extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: {
        one: false,
        two: false,
        three: false
      } 
    }
  }

  loaded = (pic) => {

    let { loaded } = this.state;
    loaded[pic] = true;

    this.setState({ loaded });

  }

  render = () => {

    const style = Object.values(this.state.loaded).every((val) => val === true) ? {} : { visibility: 'hidden' };

    return(
      <Container style={ style }>
        <br/>
        <Row>
          <div>
          <br/>
            <Col>
              <h2>
                Markets and Investing
              </h2>
              <br/>
              <Row>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      onLoad={ () => this.loaded('one') }
                      width={140}
                      height={90}
                      src={nyse}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      onLoad={ () => this.loaded('two') }
                      width={140}
                      height={90}
                      src={supplydemand}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      onLoad={ () => this.loaded('three') }
                      width={140}
                      height={90}
                      src={portfolio}
                    />
                  </Figure>
                </Col>
              </Row>
              <br/>
              <p>
                I enjoy staying up-to-date with market news and research, and larger economic trends. I also
                study strategies for actively managing my own portfolio.
              </p>
            </Col>
          </div>
        </Row>
        <br/>
        <Row>
          <div>
          <hr style={{ border: '3px solid #DC3545' }}/>
          <br/>
            <Col>
              <h2>
                Porftolio Automation
              </h2>
              <br/>
              <Row>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={python}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={robinhood}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={trading}
                    />
                  </Figure>
                </Col>
              </Row>
              <br/>
              <p>
                I am currently using Python and the Robinhood API (no trading fees) to
                 create an automated options trading app.
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