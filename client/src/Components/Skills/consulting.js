import React, { Component } from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import mentoring from '../../images/mentoring.png';
import leadership1 from '../../images/leadership1.png';
import leadership2 from '../../images/leadership2.png';
import client from '../../images/client.png';
import meeting from '../../images/meeting.png';
import presentation from '../../images/presentation.png';
import word from '../../images/word.png';
import excel from '../../images/excel.png';
import powerpoint from '../../images/powerpoint.png';
import bd1 from '../../images/bd1.png';
import bd2 from '../../images/bd2.png';
import bd3 from '../../images/bd3.png';

//TODO: cache images for faster loading (use a CDN and utilize caching)

class Consulting extends Component {

  render = () => {

    return(
      <Container>
        <br/>
        <Row>
          <div>
          <br/>
            <Col>
              <h2>
                Leadership and Mentoring
              </h2>
              <br/>
              <Row>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={mentoring}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={leadership1}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={leadership2}
                    />
                  </Figure>
                </Col>
              </Row>
              <br/>
              <p>
                As a team lead, I manage teams of up to 6 members. Also, I
                mentor new members on team processes and technologies (e.g. React, SQL, GitLab).
              </p>
            </Col>
          </div>
        </Row>
        <br/>
        <Row>
          <div>
          <hr style={{ border: '3px solid #28A745' }}/>
          <br/>
            <Col>
              <h2>
                Client Relationships and Presentations
              </h2>
              <br/>
              <Row>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={client}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={meeting}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={presentation}
                    />
                  </Figure>
                </Col>
              </Row>
              <br/>
              <p>
                I have extensive client facing-experience through various projects. I am comfortable
                presenting to project stakeholders, and communicating on behalf of the team. 
              </p>
            </Col>
          </div>
        </Row>
        <br/>
        <Row>
          <div>
          <hr style={{ border: '3px solid #28A745' }}/>
          <br/>
            <Col>
              <h2>
                Business Development
              </h2>
              <br/>
              <Row>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={bd1}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={bd2}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={bd3}
                    />
                  </Figure>
                </Col>
              </Row>
              <br/>
              <p>
                I have been involved in strategic research and RFP development efforts for both 
                IBM and personal ventures. I am knowledgable in Federal procurement processes.
              </p>
            </Col>
          </div>
        </Row>
        <br/>
        <Row>
          <div>
          <hr style={{ border: '3px solid #28A745' }}/>
          <br/>
            <Col>
              <h2>
                Microsoft Office
              </h2>
              <br/>
              <Row>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={word}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={excel}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={powerpoint}
                    />
                  </Figure>
                </Col>
              </Row>
              <br/>
              <p>
                I am well-versed in MS Office - capable of writing VBA for spreadsheet automation, and
                designing professional slides for presentations and software wireframes.
              </p>
            </Col>
          </div>
        </Row>
        <br/>
      </Container>
    )

  }

}

export default Consulting;