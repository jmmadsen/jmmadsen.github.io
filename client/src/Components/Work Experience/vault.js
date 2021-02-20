import React, { Component } from 'react';
import { Modal, Button, Container, Row, Col } from 'react-bootstrap';

class Vault extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isOpen: this.props.isOpen.doc,
      modalClick: this.props.modalClick
    }

  }

  static getDerivedStateFromProps = (props, state) => {

    if (props.isOpen.vault !== state.isOpen.vault) {
      return { isOpen: props.isOpen.vault };
    }

    return null;

  }

  render = () => {

    const { isOpen, modalClick } = this.state;

    return (
      <Modal show={isOpen} onHide={() => modalClick(-1)} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>User Interface Team Lead</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              The US Air Force issued a code challenge to potential vendors, using a subset of public ocean vessel geospatial data matched
              with intersections of satellite coverage. This was a large IBM effort that involved many different skillsets such as AI/ML, DevSecOps,
              big data integration, and institutional military expertise. My role as the UI Team Lead was to build a React dashboard and API to connect
              to our Elasticsearch datastore, and protect this application through Keycloak authentication. Our React UI displayed geospatial satellite
              hits in 2D and 3D on a world map, utilizing WebGL to plot the visualizations.
            </Row>
            <br/>
            <Row>
              I worked with the following technologies for this role:
            </Row>
            <br/>
            <Row>
              <Col>
                <li>React</li>
                <li>Node.js</li>
                <li>ElasticSearch</li>
                <li>WebGL</li>
              </Col>
              <Col>
                <li>AWS</li>
                <li>Red Hat OpenShift</li>
                <li>Docker</li>
                <li>Keycloak IAM/SSO</li>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => modalClick(-1)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    )

  }

}

export default Vault;