import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

class GSA extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.isOpen.doc,
      modalClick: this.props.modalClick
    }

  }

  static getDerivedStateFromProps = (props, state) => {

    if (props.isOpen.gsa !== state.isOpen.gsa) {
      return { isOpen: props.isOpen.gsa };
    }

    return null;

  }

  render = () => {

    const { isOpen, modalClick } = this.state;

    return (
      <Modal show={isOpen} onHide={() => modalClick(0)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>AWS Architect</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              Currently, I am the lead AWS architect for a GSA project to automate their various procurement services. My main
              responsibilities for this role were designing the networking and application architecture for AWS, provisioning the various
              AWS services (EC2 instances, ECR, ELB, Postgres RDS, etc.), designing a monitoring system to capture all critical service logs,
              and working with the leads of the UI and AI/ML development teams to orchestrate and deploy their applciations.
            </Row>
            <br/>
            <Row>
              I am working with the following technologies for this role:
            </Row>
            <br/>
            <Row>
              <Col>
                <li>EC2, ECR, ELB, and other AWS services</li>
                <li>IAM, SSO, and Integration APIs</li>
              </Col>
              <Col>
                <li>Docker</li>
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

export default GSA;