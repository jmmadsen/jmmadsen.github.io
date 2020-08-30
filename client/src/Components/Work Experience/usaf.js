import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

class USAF extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.isOpen.usaf,
      modalClick: this.props.modalClick
    }

  }

  static getDerivedStateFromProps = (props, state) => {

    if (props.isOpen.usaf !== state.isOpen.usaf) {
      return { isOpen: props.isOpen.usaf };
    }

    return null;

  }

  render = () => {

    const { isOpen, modalClick } = this.state;

    return (
      <Modal show={isOpen} onHide={() => modalClick(4)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>USAF CE Strategy Engagement</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              For this project, I was in the role of a strategic consultant. I would work in the Pentagon
              with senior Air Force officers to develop career education and retention programs for their troops. This included
              examining historical data and feedback across different units to develop new educational approaches, in accordance
              with the 2018 USAF strategic initiatives.
            </Row>
            <br/>
            <Row>
              This role was my first opportunity to work within a US military project. The following are
              examples of my day to day responsibilities:
            </Row>
            <br/>
            <Row>
              <Col>
                <li>
                  Traveling to the Air Force Institute of Technology to participate in workshops developing 2019 educational
                  initiatives for the broader AF Civil Engineer enterprise
                </li>
                <li>
                  Working with the IBM marketing team to create pamphlets, flyers, videos, and social media pages
                  to help the USAF CE spread their educational directives to airmen across the world
                </li>
                <li>
                  Developing slides and documentation to support the senior CE educational officer for daily and weekly meetings
                </li>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => modalClick(4)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )

  }

}

export default USAF;