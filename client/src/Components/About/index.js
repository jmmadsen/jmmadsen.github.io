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
            <Col>
              <h1>A Little About Myself</h1>
            </Col>
          </Row>
          <br/>
          <img src={me} alt='Me on the beach' style={{ height: '40vmin', borderRadius: '50%' }}/>
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