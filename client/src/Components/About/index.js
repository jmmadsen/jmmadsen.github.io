import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'react-image';
import me from '../../images/me4.jpg';
import resume from './resume.pdf';

class About extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: false
    }
  }

  loaded = () => {

    this.setState({ loaded: true });

  }

  render = () => {

    const style = this.state.loaded ? {} : { visibility: 'hidden' };

    return(
      <header className="App-about">
        <Container style={ style }>
          <Row>
            <Col>
              <h1>A Little About Myself</h1>
            </Col>
          </Row>
          <br/>
          <Img
            style={{ height: '40vmin', borderRadius: '50%' }}
            onLoad={ this.loaded } 
            src={me}
          />
          <br/>
          <br/>
          <Row>
            <Col>
              <p>
                I am originally from the Washington D.C. area, 
                but currently live in Austin, Texas. In my free time, I enjoy playing basketball, 
                golf, and trying various restaurants around the city (I am not much of a cook).
              </p>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <a
                href={ resume }
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#61dafb' }}
                download='Jacob Madsen Resume'>
                Download My Resume
              </a>
            </Col>
          </Row>
        </Container>
      </header>
    )

  }

}

export default About;