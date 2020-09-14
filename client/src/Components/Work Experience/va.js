import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

class VA extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.isOpen.doc,
      modalClick: this.props.modalClick
    }

  }

  static getDerivedStateFromProps = (props, state) => {

    if (props.isOpen.va !== state.isOpen.va) {
      return { isOpen: props.isOpen.va };
    }

    return null;

  }

  render = () => {

    const { isOpen, modalClick } = this.state;

    return (
      <Modal show={isOpen} onHide={() => modalClick(0)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Full Stack Engineer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              Currently a full stack engineer on an automation initiativefor the Department of Veterans Affairs. I am working on 
              integrating Appian and homegrown applications with IAM and SSO tools.
            </Row>
            <br/>
            <Row>
              I am working with the following technologies for this role:
            </Row>
            <br/>
            <Row>
              <Col>
                <li>Docker</li>
                <li>IAM, SSO, and Integration APIs</li>
              </Col>
              <Col>
                <li>AWS EC2</li>
                <li>RHEL</li>
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

export default VA;