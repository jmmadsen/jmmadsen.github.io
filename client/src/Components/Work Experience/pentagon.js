import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

class Pentagon extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.isOpen.pentagon,
      modalClick: this.props.modalClick
    }

  }

  static getDerivedStateFromProps = (props, state) => {

    if (props.isOpen.pentagon !== state.isOpen.pentagon) {
      return { isOpen: props.isOpen.pentagon };
    }

    return null;

  }

  render = () => {

    const { isOpen, modalClick } = this.state;

    return (
      <Modal show={isOpen} onHide={modalClick} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Navy Exchange Food Vendor Contract</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              This contract was a personal venture outside of my employment with IBM. I created an LLC and partnered with a 
              Charlottesville, VA area fast casual restaurant to submit a bid for restaurant space in the
              Pentagon. As the primary bidder on the contract, I worked to develop a business plan, managed the relationship
              with relevant Navy officials, and created an RFP to formally submit for consideration.
            </Row>
            <br/>
            <Row>
              Although our submission was ultimately not selected at the end of the solicitation, I learned valuable 
              business management principles throughout this process, such as the following:
            </Row>
            <br/>
            <Row>
              <Col>
                <li>
                  Seeking and retaining legal counsel for forming an LLC, and creating a subcontractor relationship
                </li>
                <li>
                  Developing a five year business plan, including all relevant financial projections and funding considerations
                </li>
                <li>
                  Learning the solicitation process, attending information sessions in the Pentagon, and handling communication
                  with Pentagon officials
                </li>
                <li>
                  Developing, writing, and managing a proposal response from beginning to end
                </li>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={modalClick}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )

  }

}

export default Pentagon;