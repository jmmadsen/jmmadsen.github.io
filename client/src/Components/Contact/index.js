import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import linkedin from '../../images/linkedin.svg'
import gmail from '../../images/gmail.svg';
import github from '../../images/github.svg';

class Contact extends Component {

  render = () => {

    return(
      <header className="App-contact">
        <h1>Contact Me</h1>
        <br/>
        <Container>
          <Row>
            <Col xs={4} md={4}>
              <Image style={{ cursor: 'pointer' }} onClick={() => window.open('mailto:jmmadsen16@gmail.com?subject=Website&body=Let\'s chat.')} src={gmail} rounded/>
            </Col>
            <Col xs={4} md={4}>
              <a href="https://www.linkedin.com/in/jacob-madsen-01604993">
                <Image src={linkedin} rounded/>
              </a>
            </Col>
            <Col xs={4} md={4}>
            <a href="https://github.com/jmmadsen">
                <Image src={github} rounded/>
              </a>
            </Col>
          </Row>
          <br/>
          <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </Container>
      </header>
    )

  }

}

export default Contact;