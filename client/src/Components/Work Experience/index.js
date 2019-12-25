import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
// import usps from '../../images/usps.jpeg';

class Experience extends Component {

  constructor(props){
    super(props);

    this.state = {
      workExperiences: ['test 1', 'test 2', 'test 3', 'test 4'],
      iterator: 0
    }
  }

  handleClick = (num) => {

    let newIterator = this.state.iterator + num;

    if (newIterator < 0) {
      newIterator = this.state.workExperiences.length - 1;
    }
    if (newIterator > this.state.workExperiences.length - 1) {
      newIterator = 0;
    }

    this.setState({ iterator: newIterator });

  }

  render = () => {

    return(
      <header className="App-experience">
        <Container>
          <h1>Work Experience</h1>
          <br/>
          <Row>
            <Col md={1} xs={1}>
              <Button
                size='lg' 
                variant={'outline-primary'}
                onClick={ () => this.handleClick(-1) }
              >
                {'<'}
              </Button>
            </Col>
            <Col md={10} xs={10}>
              {this.state.workExperiences[this.state.iterator]}
            </Col>
            <Col md={1} xs={1}>
              <Button
                size='lg'
                variant={'outline-primary'}
                onClick={ () => this.handleClick(1) }
              >
                {'>'}
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
    )

  }

}

export default Experience;