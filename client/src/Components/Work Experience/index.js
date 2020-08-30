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
      isHovered: {
        doc: false,
        doj: false,
        usps: false,
        usaf: false,
        odot: false,
        pentagon: false
      },
      workExperience: [
        {
          acronym: 'doc',
          color: 'outline-light',
          bgColor: 'light',
          project: 'US Department of Commerce',
          dates: 'Jun. 2020 - Aug. 2020',
          role: 'DevOps & AWS Developer',
          icon: doc
        },
        {
          acronym: 'doj',
          color: 'outline-info',
          bgColor: 'info',
          project: 'US Department of Justice',
          dates: 'May 2020 - Jun. 2020',
          role: 'Data Analytics Developer',
          icon: doj
        },
        {
          acronym: 'usps',
          color: 'outline-primary',
          bgColor: 'primary',
          project: 'US Postal Service INO',
          dates: 'Jul. 2018 - Apr. 2020',
          role: 'UI Team Lead / Developer',
          icon: stamp
        },
        {
          acronym: 'pentagon',
          color: 'outline-warning',
          bgColor: 'success',
          project: 'Pentagon - Food Vendor Solicitation',
          dates: 'May 2018 - Jan. 2019',
          role: 'Personal Venture - Owner',
          icon: pentagon
        },
        {
          acronym: 'usaf',
          color: 'outline-success',
          bgColor: 'danger',
          project: 'US Air Force Civil Engineers',
          dates: 'Feb. 2018 - Jul. 2018',
          role: 'Strategy & Data Consultant',
          icon: airforce
        },
        {
          acronym: 'odot',
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

  modalClick = (index) => {

    let { isOpen } = this.state;

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

  hoverAction = (card) => {

    let { isHovered } = this.state;

    isHovered[card] = !isHovered[card];

    this.setState({ isHovered });

  }

  render = () => {

    const { workExperience, isHovered } = this.state;

    const Pic = (image) => 
      <Img
        style={{ width: '200px' }} 
        src={image}
        loader={<img alt='work icon' src={blankIcon} style={{ width: '200px', borderRadius: '150px' }} />}
      />

    return (
      <header className="App-experience">
        <Container fluid>
          <h1>Work Experience</h1>
          <br/>
          <Row className="scrolling-wrapper flex-row flex-nowrap mt-4 pb-4">
            {
              workExperience.map((card, i) => {
                return (
                  <Col key={i}>
                    <Card 
                      onMouseOut={() => this.hoverAction(card.acronym)} 
                      onMouseOver={() => this.hoverAction(card.acronym)} 
                      bg={isHovered[card.acronym] ? "success" : "primary"}
                    >
                      <Card.Header as="h3" style={{ backgroundColor: '#383d47' }}>{card.project}</Card.Header>
                      <Card.Body style={{ backgroundColor: '#383d47' }}>
                        <Card.Title>{card.dates}</Card.Title>
                        {Pic(card.icon)}
                        <Card.Text>
                          {card.role}
                        </Card.Text>
                        <Button
                          variant={isHovered[card.acronym] ? "success" : "primary"}
                          onClick={ () => this.modalClick(i) }
                        >
                          Learn More
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                )
              })
            }
            <DOC isOpen={this.state.isOpen} modalClick={this.modalClick}/>
            <DOJ isOpen={this.state.isOpen} modalClick={this.modalClick}/>
            <USPS isOpen={this.state.isOpen} modalClick={this.modalClick}/>
            <USAF isOpen={this.state.isOpen} modalClick={this.modalClick}/>
            <ODOT isOpen={this.state.isOpen} modalClick={this.modalClick}/>
            <Pentagon isOpen={this.state.isOpen} modalClick={this.modalClick}/> 
          </Row>
        </Container>
      </header>
    )

  }

}

export default Experience;