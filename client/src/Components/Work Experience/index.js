import React, { Component } from 'react';
import { Button, Container, Row, Col, Card, Figure } from 'react-bootstrap';
import stamp from '../../images/stamp.png';
import airforce from '../../images/airforce.png';
import car from '../../images/car.png';
import pentagon from '../../images/pentagon.png';

// TODO - add transitions
class Experience extends Component {

  constructor(props){
    super(props);

    this.state = {
      index: 0,
      learnMoreOpen: false,
      workExperience: [
        {
          color: 'outline-primary',
          bgColor: 'primary',
          project: 'US Postal Service',
          dates: 'Jul. 2018 - Present',
          role: 'UI Team Lead / Software Developer',
          icon: stamp
        },
        {
          color: 'outline-success',
          bgColor: 'success',
          project: 'US Air Force Civil Engineers',
          dates: 'Feb. 2018 - Jul. 2018',
          role: 'Strategy Consultant',
          icon: airforce
        },
        {
          color: 'outline-danger',
          bgColor: 'danger',
          project: 'Ohio Department of Transportation',
          dates: 'Sept. 2016 - Feb. 2018',
          role: 'Functional Consultant',
          icon: car
        },
        {
          color: 'outline-warning',
          bgColor: 'warning',
          project: 'Pentagon - Food Vendor Solicitation',
          dates: 'May 2018 - Jan. 2019',
          role: 'Personal Venture - Owner',
          icon: pentagon
        }
      ]
    }

  }

  handleClick = (num) => {

    const index = this.state.index + num;

    this.setState({ index });

  }

  render = () => {

    const { workExperience, index } = this.state;

    return(
      <header className="App-experience">
        <Container>
          <h1>Work Experience</h1>
          <br/>
          {
            index !== 0
            ? <Row>
                <Col>
                  <Button block size={'lg'}
                    variant={workExperience[index].color}
                    onClick={ () => this.handleClick(-1) }
                  >
                    {'See Previous'}
                  </Button>
                </Col>
              </Row>
            : null
          }
          <br/>
          <Row>
            <Col>
              <Card bg={workExperience[index].bgColor}>
                <Card.Header as="h2" style={{ backgroundColor: '#282c34' }}>{workExperience[index].project}</Card.Header>
                <Card.Body style={{ backgroundColor: '#282c34' }}>
                  <Card.Title>{workExperience[index].dates}</Card.Title>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={200}
                      height={150}
                      src={workExperience[index].icon}
                    />
                  </Figure>
                  <Card.Text>
                    {workExperience[index].role}
                  </Card.Text>
                  <Button variant={workExperience[index].bgColor}>Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <br/>
          {
            index !== workExperience.length - 1
            ? <Row>
                <Col>
                  <Button block size={'lg'}
                    variant={workExperience[index].color}
                    onClick={ () => this.handleClick(1) }
                  >
                    {'See More'}
                  </Button>
                </Col>
              </Row>
            : null
          }
          <br/>
        </Container>
      </header>
    )

  }

}

export default Experience;