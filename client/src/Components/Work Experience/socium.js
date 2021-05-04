import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

class Socium extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.isOpen,
      modalClick: this.props.modalClick
    }

  }

  static getDerivedStateFromProps = (props, state) => {

    if (props.isOpen !== state.isOpen) {
      return { isOpen: props.isOpen };
    }

    return null;

  }

  render = () => {

    const { isOpen, modalClick } = this.state;

    return (
      <Modal show={isOpen} onHide={() => modalClick()} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Workflow Microservice Implementation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              I worked with the Defense Security Cooperation Agency to create a microserviced workflow application (Socium). Before, the legacy system
              was a monolithic application with low usage among employees. Additionally, it's data was siloed from other critical business units within the agency. I collaborated
              with a multi-disciplinary team of designers, front-end engineers, back-end engineers, and DBAs to deliver rapid enhancements and improvements to the new workflow system,
              Socium. I operated within a highly Agile environment that allowed my team to rapidly iterate and deploy improvements, responding quickly to requirements or integration
              requests from the client.
            </Row>
            <br/>
            <Row>
              As a Product Owner, I leveraged my prior experience as a software developer to effectively communicate with the client and our engineering team.
              My background allowed me to effectively design and prioritize features, set timelines, communicate issues, and manage expectations on both sides of the team.
            </Row>
            <br/>
            <Row>
              I worked with the following tools for this role:
            </Row>
            <br/>
            <Row>
              <Col>
                <li>Jira</li>
                <li>MS Word, Excel, PowerPoint, Teams</li>
              </Col>
              <Col>
                <li>GitLab</li>
                <li>Postgresql</li>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={() => modalClick()}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )

  }

}

export default Socium;