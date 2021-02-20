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
      <Modal show={isOpen} onHide={() => modalClick(1)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Full Stack Engineer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              Full stack engineer on an automation initiative for the Department of Veterans Affairs. I worked on 
              integrating Appian and homegrown applications with IAM and SSO tools. Some of my tasks included integrating DoD CAC card
              credentials with Keycloak for a seamless SSO process for government employees, creating health check and cron job microservices
              to monitor and update various critical applications, integrating our services with Elasticsearch to provide a holistic view of our
              stack, and orchestrating/deploying our containerized applications into AWS.
            </Row>
            <br/>
            <Row>
              I worked with the following technologies for this role:
            </Row>
            <br/>
            <Row>
              <Col>
                <li>Docker</li>
                <li>Filebeats</li>
                <li>ElasticSearch</li>
                <li>Kibana</li>
              </Col>
              <Col>
                <li>AWS GovCloud</li>
                <li>RHEL</li>
                <li>IAM, SSO, and Integration APIs</li>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => modalClick(1)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )

  }

}

export default VA;