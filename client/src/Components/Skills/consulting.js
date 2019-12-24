import React, { Component } from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import octocat from '../../images/octocat.png';
import npm from '../../images/npm.png';
import gitlab from '../../images/gitlab.png';
import docker from '../../images/docker.png';
import client from '../../images/client.png';
import presentation from '../../images/presentation.png';
import word from '../../images/word.png';
import excel from '../../images/excel.png';
import powerpoint from '../../images/powerpoint.png';
import bd1 from '../../images/bd1.png';
import bd2 from '../../images/bd2.png';
import bd3 from '../../images/bd3.png';

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
                Well-versed in MS Office. Capable of writing VBA for spreadsheet automation, and
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
                Been involved in pre-proposal research and projection through both IBM and personal endeavors. 
                Knowledgable in Federal procurement processes.
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