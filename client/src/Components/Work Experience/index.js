import React, { Component } from 'react';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import Img from 'react-image';
import DOC from './doc';
import DOJ from './doj';
import USPS from './usps';
import USAF from './usaf';
import ODOT from './odot';
import Pentagon from './pentagon';
import doc from '../../images/doc.png';
import doj from '../../images/doj.png';
import stamp from '../../images/stamp.png';
import airforce from '../../images/airforce.png';
import car from '../../images/car.png';
import pentagon from '../../images/pentagon.png';
import blankIcon from '../../images/blankIcon.png';

// TODO - add transitions
class Experience extends Component {

  constructor(props){
    super(props);

    this.state = {
      index: 0,
      isOpen: {
        doc: false,
        doj: false,
        usps: false,
        usaf: false,
        odot: false,
        pentagon: false
      },
      workExperience: [
        {
          color: 'outline-light',
          bgColor: 'light',
          project: 'US Department of Commerce',
          dates: 'Jun. 2020 - Aug. 2020',
          role: 'DevOps Developer',
          icon: doc
        },
        {
          color: 'outline-info',
          bgColor: 'info',
          project: 'US Department of Justice',
          dates: 'May 2020 - Jun. 2020',
          role: 'UI & Data Analytics Developer',
          icon: doj
        },
        {
          color: 'outline-primary',
          bgColor: 'primary',
          project: 'US Postal Service',
          dates: 'Jul. 2018 - Apr. 2020',
          role: 'UI Team Lead / Software Developer',
          icon: stamp
        },
        {
          color: 'outline-warning',
          bgColor: 'success',
          project: 'Pentagon - Food Vendor Solicitation',
          dates: 'May 2018 - Jan. 2019',
          role: 'Personal Venture - Owner',
          icon: pentagon
        },
        {
          color: 'outline-success',
          bgColor: 'danger',
          project: 'US Air Force Civil Engineers',
          dates: 'Feb. 2018 - Jul. 2018',
          role: 'Strategy Consultant',
          icon: airforce
        },
        {
          color: 'outline-danger',
          bgColor: 'warning',
          project: 'Ohio Department of Transportation',
          dates: 'Sept. 2016 - Feb. 2018',
          role: 'Functional Consultant',
          icon: car
        }
      ]
    }

  }

  handleClick = (num) => {

    const index = this.state.index + num;
    this.setState({ index });

  }

  modalClick = () => {

    let { isOpen, index } = this.state;

    if (index === 0) {
      isOpen['doc'] = !isOpen['doc'];
    } else if (index === 1) {
      isOpen['doj'] = !isOpen['doj'];
    } else if (index === 2) {
      isOpen['usps'] = !isOpen['usps'];
    } else if (index === 3) {
      isOpen['pentagon'] = !isOpen['pentagon'];
    } else if (index === 4) {
      isOpen['usaf'] = !isOpen['usaf'];
    } else {
      isOpen['odot'] = !isOpen['odot'];
    }

    this.setState({ isOpen });

  }

  render = () => {

    const { workExperience, index } = this.state;

    const Pic = () => 
      <Img
        style={{ width: '200px' }} 
        src={workExperience[index].icon}
        loader={<img alt='work icon' src={blankIcon} style={{ width: '200px', borderRadius: '150px' }} />}
      />

    return (
      <header className="App-experience">
        <Container>
          <h1>Work Experience</h1>
          <br/>
          {
            index !== 0
            ? <Row>
                <Col>
                  <Button block size={'lg'}
                    variant={workExperience[index].bgColor}
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
                  <Pic/>
                  <Card.Text>
                    {workExperience[index].role}
                  </Card.Text>
                  <Button
                    variant={workExperience[index].bgColor}
                    onClick={ () => this.modalClick() }
                  >
                    Learn More
                  </Button>
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
                    variant={workExperience[index].bgColor}
                    onClick={ () => this.handleClick(1) }
                  >
                    {'See More'}
                  </Button>
                </Col>
              </Row>
            : null
          }
          <br/>
          <DOC isOpen={this.state.isOpen} modalClick={this.modalClick}/>
          <DOJ isOpen={this.state.isOpen} modalClick={this.modalClick}/>
          <USPS isOpen={this.state.isOpen} modalClick={this.modalClick}/>
          <USAF isOpen={this.state.isOpen} modalClick={this.modalClick}/>
          <ODOT isOpen={this.state.isOpen} modalClick={this.modalClick}/>
          <Pentagon isOpen={this.state.isOpen} modalClick={this.modalClick}/>
        </Container>
      </header>
    )

  }

}

export default Experience;