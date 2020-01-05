import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import linkedin from '../../images/linkedin.svg'
import gmail from '../../images/gmail.svg';
import github from '../../images/github.svg';

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: {
        gmail: false,
        linkedin: false,
        github: false
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
      <header className="App-contact">
        <h1>Contact Me</h1>
        <br/>
        <Container style={ style }>
          <Row>
            <Col>
              <a href="mailto:jmmadsen16@gmail.com">
                <Image onLoad={ () => this.loaded('gmail') } className='contact-icon' src={gmail} rounded/>
              </a>
            </Col>
            <Col>
              <a href="https://www.linkedin.com/in/jacob-madsen-01604993" target="_blank" rel="noopener noreferrer">
                <Image onLoad={ () => this.loaded('linkedin') } className='contact-icon' src={linkedin} rounded/>
              </a>
            </Col>
            <Col>
            <a href="https://github.com/jmmadsen" target="_blank" rel="noopener noreferrer">
                <Image onLoad={ () => this.loaded('github') } className='contact-icon' src={github} rounded/>
              </a>
            </Col>
          </Row>
          <br/>
        </Container>
      </header>
    )

  }

}

export default Contact;