import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

class DOJ extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.isOpen.doj,
      modalClick: this.props.modalClick
    }

  }

  static getDerivedStateFromProps = (props, state) => {

    if (props.isOpen.doj !== state.isOpen.doj) {
      return { isOpen: props.isOpen.doj };
    }

    return null;

  }

  render = () => {

    const { isOpen, modalClick } = this.state;

    return (
      <Modal show={isOpen} onHide={() => modalClick(3)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Criminal Investigation User Dashboard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              This short term role was to prepare a demo for the DoJ, in order to earn a spot to bid on a contract. The DoJ gave us tens of thousands of structured
              and unstructured documents related to two cases - a physician prescription abuse case, and a gang involved shooting. I worked with a team of data scientists
              to analyze, understand, and pull the story from each of the cases. I then worked to build a completely functioning UI and API from scratch to showcase our analytics
              and findings. I used a combination of powerful interactive visuals, such as Google Maps with data plottings, D3 network graphs that allowed hypothetical DoJ analysts 
              and lawyers to view the data from a high level with understanding, and easily drill down to their desired level of detail.
            </Row>
            <br/>
            <Row>
              I primarily used the following tools for this role:
            </Row>
            <br/>
            <Row>
              <Col>
                <li>JavaScript</li>
                <li>React</li>
                <li>D3 Visualizations</li>
              </Col>
              <Col>
                <li>Node.js / Express.js</li>
                <li>SQL / IBM Db2</li>
                <li>Google Maps APIs</li>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => modalClick(3)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )

  }

}

export default DOJ;