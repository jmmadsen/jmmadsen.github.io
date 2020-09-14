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
              Currently a full stack engineer on an automation initiativefor the Department of Veterans Affairs. I am working on integrating Appian and homegrown applications with
              with IAM and identity management tools.
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
              </Col>
              <Col>
                <li>AWS EC2</li>
                <li>Keycloak and RHEL</li>
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