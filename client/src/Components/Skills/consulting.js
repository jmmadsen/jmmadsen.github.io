import React, { Component } from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import mentoring from '../../images/mentoring.png';
import leadership1 from '../../images/leadership1.png';
import leadership2 from '../../images/leadership2.png';
import client from '../../images/client.png';
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
            <Col md={12} xs={12}>
              <h2>
                Leadership and Mentoring
              </h2>
              <br/>
              <Row>
                <Col md={4} xs={4}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={mentoring}
                    />
                  </Figure>
                </Col>
                <Col md={4} xs={4}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={leadership1}
                    />
                  </Figure>
                </Col>
                <Col md={4} xs={4}>
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
                I manage teams of up to 6 members as a team lead. Also, I
                have mentored and taught new members subjects from scratch (React, SQL).
              </p>
            </Col>
          </div>
        </Row>
        <br/>
        <Row>
          <div>
          <hr style={{ border: '3px solid #28A745' }}/>
          <br/>
            <Col md={12} xs={12}>
              <h2>
                Client Relationships and Presentation
              </h2>
              <br/>
              <Row>
                <Col md={6} xs={6}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={client}
                    />
                  </Figure>
                </Col>
                <Col md={6} xs={6}>
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
                I have extensive experience working with clients through various projects. I am very comfortable
                presenting to all stakeholders, and communicating on behalf of the team. 
              </p>
            </Col>
          </div>
        </Row>
        <br/>
        <Row>
          <div>
          <hr style={{ border: '3px solid #28A745' }}/>
          <br/>
            <Col md={12} xs={12}>
              <h2>
                Microsoft Office
              </h2>
              <br/>
              <Row>
                <Col md={4} xs={4}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={word}
                    />
                  </Figure>
                </Col>
                <Col md={4} xs={4}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={excel}
                    />
                  </Figure>
                </Col>
                <Col md={4} xs={4}>
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
                I am well-versed in MS Office. Capable of writing VBA for spreadsheet automation, and
                designing professional slides for presentations and software wireframes.
              </p>
            </Col>
          </div>
        </Row>
        <br/>
        <Row>
          <div>
          <hr style={{ border: '3px solid #28A745' }}/>
          <br/>
            <Col md={12} xs={12}>
              <h2>
                Business Development
              </h2>
              <br/>
              <Row>
                <Col md={4} xs={4}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={bd1}
                    />
                  </Figure>
                </Col>
                <Col md={4} xs={4}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={bd2}
                    />
                  </Figure>
                </Col>
                <Col md={4} xs={4}>
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
                I have been involved in pre-proposal research and projection through both IBM and personal endeavors. 
                I am knowledgable in Federal procurement processes.
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