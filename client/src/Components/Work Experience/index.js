import React, { Component } from 'react';
import { Button, Container, Row, Col, Card, Tabs, Tab } from 'react-bootstrap';
import Img from 'react-image';
import Vault from './vault';
import GSA from './gsa';
import VA from './va';
import DOC from './doc';
import DOJ from './doj';
import USPS from './usps';
import USAF from './usaf';
import ODOT from './odot';
import Pentagon from './pentagon';
import gsa from '../../images/aws.png';
import va from '../../images/soldier.png';
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
      index: -1,
      isOpen: {
        vault: false,
        gsa: false,
        va: false,
        doc: false,
        doj: false,
        usps: false,
        usaf: false,
        odot: false,
        pentagon: false
      },
      workExperience: [
        {
          acronym: 'vault',
          color: 'outline-danger',
          bgColor: 'light',
          project: 'US Air Force - Code Challenge',
          dates: 'Jan. 2021',
          role: 'Developer & UI Team Lead',
          icon: airforce
        },
        {
          acronym: 'gsa',
          color: 'outline-danger',
          bgColor: 'light',
          project: 'General Services Administration',
          dates: 'Nov. 2020 - Feb. 2021',
          role: 'AWS Architect & Developer',
          icon: gsa
        },
        {
          acronym: 'va',
          color: 'outline-light',
          bgColor: 'light',
          project: 'US Department of Veterans Affairs',
          dates: 'Aug. 2020 - Feb. 2021',
          role: 'Full Stack & AWS Developer',
          icon: va
        },
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
          role: 'PeopleSoft HR Consultant',
          icon: car
        }
      ]
    }

  }

  modalClick = (index) => {

    let { isOpen } = this.state;

    if (index === -1) {
      isOpen['vault'] = !isOpen['vault'];
    } else if (index === 0) {
      isOpen['gsa'] = !isOpen['gsa'];
    } else if (index === 1) {
      isOpen['va'] = !isOpen['va'];
    } else if (index === 2) {
      isOpen['doc'] = !isOpen['doc'];
    } else if (index === 3) {
      isOpen['doj'] = !isOpen['doj'];
    } else if (index === 4) {
      isOpen['usps'] = !isOpen['usps'];
    } else if (index === 5) {
      isOpen['pentagon'] = !isOpen['pentagon'];
    } else if (index === 6) {
      isOpen['usaf'] = !isOpen['usaf'];
    } else {
      isOpen['odot'] = !isOpen['odot'];
    }

    this.setState({ isOpen });

  }

  render = () => {

    const { workExperience } = this.state;

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
          <Tabs defaultActiveKey="ibm" style={{ color: 'green' }}>
            <Tab eventKey="deloitte" title="Deloitte" disabled>
              <Col>
                Mar. 2021 - Present
              </Col>
            </Tab>
            <Tab eventKey="ibm" title="IBM">
              <Row>
                <Col>
                  Aug. 2016 - Feb. 2021
                </Col>
              </Row>
              <Row className="scrolling-wrapper flex-row flex-nowrap mt-4 pb-4">
                {
                  workExperience.map((card, i) => {
                    return (
                      <Col key={i - 1}>
                        <Card 
                          bg="primary"
                        >
                          <Card.Header as="h3" style={{ backgroundColor: '#383d47' }}>{card.project}</Card.Header>
                          <Card.Body style={{ backgroundColor: '#383d47' }}>
                            <Card.Title>{card.dates}</Card.Title>
                            {Pic(card.icon)}
                            <Card.Text>
                              {card.role}
                            </Card.Text>
                            <Button
                              variant="primary"
                              onClick={ () => this.modalClick(i - 1) }
                            >
                              Learn More
                            </Button>
                          </Card.Body>
                        </Card>
                      </Col>
                    )
                  })
                }
                <Vault isOpen={this.state.isOpen} modalClick={this.modalClick}/>
                <GSA isOpen={this.state.isOpen} modalClick={this.modalClick}/>
                <VA isOpen={this.state.isOpen} modalClick={this.modalClick}/>
                <DOC isOpen={this.state.isOpen} modalClick={this.modalClick}/>
                <DOJ isOpen={this.state.isOpen} modalClick={this.modalClick}/>
                <USPS isOpen={this.state.isOpen} modalClick={this.modalClick}/>
                <USAF isOpen={this.state.isOpen} modalClick={this.modalClick}/>
                <ODOT isOpen={this.state.isOpen} modalClick={this.modalClick}/>
                <Pentagon isOpen={this.state.isOpen} modalClick={this.modalClick}/> 
              </Row>
            </Tab>
          </Tabs>
          <br/>
        </Container>
      </header>
    )

  }

}

export default Experience;