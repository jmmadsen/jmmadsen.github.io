import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import odot from '../../images/odot.png';
import odotCopy from '../../images/odot copy.png';
import usaf from '../../images/usaf.jpg';
import usps from '../../images/usps.png'

class Cards extends Component {

  render = () => {

    return(
      <Row>
        <Col>
          <Card bg='dark' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={odotCopy} />
            <Card.Body style={{ backgroundColor: 'white'}}>
              <Button variant='secondary'>ODOT</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={usaf} />
            <Card.Body>
              <Button variant="secondary">USAF</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={usps} />
            <Card.Body>
              <Button variant="secondary">USPS</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    )

  }

}

export default Cards;