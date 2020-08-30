import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

class DOC extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.isOpen.doc,
      modalClick: this.props.modalClick
    }

  }

  static getDerivedStateFromProps = (props, state) => {

    if (props.isOpen.doc !== state.isOpen.doc) {
      return { isOpen: props.isOpen.doc };
    }

    return null;

  }

  render = () => {

    const { isOpen, modalClick } = this.state;

    return (
      <Modal show={isOpen} onHide={() => modalClick(0)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Containerization and DevOps Effort</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              The purpose of this engagement was to take a microserviced application that was built quickly for demo purposes, and turn it into a modern containerized application
              ready for production. The original development team manually installed the application on an EC2 instance in a manner that was error prone and difficult to scale. As the
              lead DevOps developer, my three primary tasks were containerizing each microservice using Docker, orchestrating and networking them using Docker-Compose, and then preparing an 
              AWS Cloud environment for deployment. This was a difficult role because I had no background in any of the microservices, and had to learn each through containerization. I also
              had to fix many hardcoded networking variables hidden in the code not conducive to scaling in multiple cloud instances.
            </Row>
            <br/>
            <Row>
              I worked the following technologies for this role:
            </Row>
            <br/>
            <Row>
              <Col>
                <li>Docker</li>
                <li>Docker-Compose</li>
                <li>AWS EC2</li>
              </Col>
              <Col>
                <li>JavaScript & Python</li>
                <li>React & Vue</li>
                <li>Express.js & Flask</li>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => modalClick(0)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )

  }

}

export default DOC;