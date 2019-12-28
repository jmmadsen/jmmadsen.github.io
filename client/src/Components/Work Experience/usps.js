import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

class USPS extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.isOpen.usps,
      modalClick: this.props.modalClick
    }

  }

  static getDerivedStateFromProps = (props, state) => {

    if (props.isOpen.usps !== state.isOpen.usps) {
      return { isOpen: props.isOpen.usps };
    }

    return null;

  }

  render = () => {

    const { isOpen, modalClick } = this.state;

    return (
      <Modal show={isOpen} onHide={modalClick} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Blockchain Implementation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              My current engagement is a blockchain implementation for the USPS International Shipping division. I began as a UI developer,
              building an analytics dashboard to intuitively display the millions of transactions recorded by the blockchain.
              As the project grew, I moved into the role of the UI Team Lead. I am responsible for the features implemented by a 
              team of six developers. I spend about 50% of my time writing code, and another 50% managing the direction
              of the UI with client and leadership stakeholders.
            </Row>
            <br/>
            <Row>
              I use or work with the following technologies on a regular basis:
            </Row>
            <br/>
            <Row>
              <Col>
                <li>JavaScript</li>
                <li>React</li>
                <li>HTML / CSS</li>
              </Col>
              <Col>
                <li>Node.js</li>
                <li>SQL / PostgreSQL</li>
                <li>IBM Cloud</li>
              </Col>
              <Col>
                <li>Git / GitHub</li>
                <li>Docker</li>
                <li>GitLab</li>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={modalClick}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )

  }

}

export default USPS;