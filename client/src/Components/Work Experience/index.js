import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
// import usps from '../../images/usps.jpeg';

// TODO - add transitions
class Experience extends Component {

  constructor(props){
    super(props);

    this.state = {
      workExperiences: [
        {
          text: 'US Postal Service',
          subtext: 'Blockchain Implementation',
          dates: 'Jul. 2018 - Present',
          color: 'outline-primary',
          img: null
        },
        {
          text: 'US Air Force Civil Engineers',
          subtext: 'Strategic Consulting',
          dates: 'Feb. 2018 - Jul. 2018',
          color: 'outline-success',
          img: null
        },
        {
          text: 'Ohio Department of Transportation',
          subtext: 'PeopleSoft Implementation',
          dates: 'Sept. 2016 - Feb.2018',
          color: 'outline-danger',
          img: null
        },
        {
          text: 'Navy Exchange Service Command - Pentagon',
          subtext: 'Food Vendor Solicitation',
          dates: 'May 2018 - Jan. 2019',
          color: 'outline-warning',
          img: null
        }
      ],
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
            <Col md={3} xs={3}>
              <Button
                size='lg' 
                variant={this.state.workExperiences[this.state.iterator].color}
                onClick={ () => this.handleClick(-1) }
              >
                {'<'}
              </Button>
            </Col>
            <Col md={6} xs={6}>
              <h3>{this.state.workExperiences[this.state.iterator].text}</h3>
              <h4>{this.state.workExperiences[this.state.iterator].subtext}</h4>
              <h5>{this.state.workExperiences[this.state.iterator].dates}</h5>
            </Col>
            <Col md={3} xs={3}>
              <Button
                size='lg'
                variant={this.state.workExperiences[this.state.iterator].color}
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