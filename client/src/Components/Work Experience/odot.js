import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

class ODOT extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.isOpen.odot,
      modalClick: this.props.modalClick
    }

  }

  static getDerivedStateFromProps = (props, state) => {

    if (props.isOpen.odot !== state.isOpen.odot) {
      return { isOpen: props.isOpen.odot };
    }

    return null;

  }

  render = () => {

    const { isOpen, modalClick } = this.state;

    return (
      <Modal show={isOpen} onHide={modalClick} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>PeopleSoft Implementation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              For my ODOT project, I was in the role of a functional consultant. ODOT was consolidating their HR, financial,
              and procurement processes into the PeopleSoft ecosystem, while also aligning with PeopleSoft upgrades across the state 
              of Ohio. I would travel to Columbus every week Monday through Thursday to work directly with ODOT representatives in designing
              this new system.
            </Row>
            <br/>
            <Row>
              This role gave me invaluable experience in learning the software development life cycle. I was in this role from requirements
              gathering through post-implementation support. The following are examples of my duties:
            </Row>
            <br/>
            <Row>
              <Col>
                <li>
                  Participated in complete end-to-end SDLC: requirements mapping and discovery sessions, functional design 
                  specifications, conference room pilots, creation of test scripts, system integration testing, 
                  user integration testing, and go-live
                </li>
                <li>
                  Designed complex deliverables including solution blueprints, solution alternatives, functional design specifications, 
                  configuration designs, and test scripts
                </li>
                <li>
                  Completed system configuration, data staging, and unit testing within PeopleSoft test environments to ensure that IBM’s 
                  solutions met the client’s requirements
                </li>
                <li>
                  Involved in daily client facing interactions, ranging from: leading weekly meetings, presenting conference room pilots, 
                  participating in design reviews, and facilitating SIT and UAT
                </li>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={modalClick}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )

  }

}

export default ODOT;