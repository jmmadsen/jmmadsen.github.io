import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'react-image';
import me from '../../images/me4.jpg';
import blankIcon from '../../images/blankIcon.png';
import resume from './resume.pdf';

class About extends Component {

  render = () => {

    const Pic = () => 
      <Img
        style={{ height: '40vmin', borderRadius: '50%' }} 
        src={me}
        loader={<img alt='me on beach' src={blankIcon} style={{ height: '40vmin', borderRadius: '50%' }} />}
      />

    return(
      <header className="App-about">
        <Container>
          <Row>
            <Col>
              <h1>A Little About Myself</h1>
            </Col>
          </Row>
          <br/>
          <Pic/>
          <br/>
          <br/>
          <Row>
            <Col>
              <p>I am originally from the Washington D.C. area, 
                but currently live in Brooklyn, New York. In my free time, I enjoy playing pickup 
                basketball and trying various restaurants around the city (I am not much of a cook).
              </p>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <a
                href={ resume }
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