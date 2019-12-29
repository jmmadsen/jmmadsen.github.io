import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import linkedin from '../../images/linkedin.svg'
import gmail from '../../images/gmail.svg';
import github from '../../images/github.svg';

const Contact = () => {

  return(
    <header className="App-contact">
      <h1>Contact Me</h1>
      <br/>
      <Container>
        <Row>
          <Col>
            <a href="mailto:jmmadsen16@gmail.com">
              <Image className='contact-icon' src={gmail} rounded/>
            </a>
          </Col>
          <Col>
            <a href="https://www.linkedin.com/in/jacob-madsen-01604993" target="_blank" rel="noopener noreferrer">
              <Image className='contact-icon' src={linkedin} rounded/>
            </a>
          </Col>
          <Col>
          <a href="https://github.com/jmmadsen" target="_blank" rel="noopener noreferrer">
              <Image className='contact-icon' src={github} rounded/>
            </a>
          </Col>
        </Row>
        <br/>
      </Container>
    </header>
  )

}

export default Contact;