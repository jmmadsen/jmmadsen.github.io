import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import me from '../../images/me.jpg';
import resume from './resume.pdf';

class About extends Component {

  render = () => {

    return(
      <header className="App-about">
        <Container>
          <Row>
            <Col md={12} xs={12}>
              <h1>A Little About Myself</h1>
            </Col>
          </Row>
          <br/>
          <img src={me} alt='Me on the beach' style={{ height: '40vmin', borderRadius: '50%' }}/>
          <br/>
          <br/>
          <Row>
            <Col md={12} xs={12}>
              <p>I am originally from the Washington D.C. area, 
                but currently live in Brooklyn, New York. In my free time, I enjoy playing pickup 
                basketball and trying various restaurants around the city (I am not much of a cook). I also firmly
                believe Season One of True Detective is the best season of television ever made.
              </p>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col md={12} xs={12}>
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