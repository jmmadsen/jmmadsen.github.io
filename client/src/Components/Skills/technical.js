import React, { Component } from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import js from '../../images/js.png';
import react from '../../images/react.png';
import html from '../../images/html.png';
import css from '../../images/css.png';
import node from '../../images/nodejs.png';
import rest from '../../images/rest.png';
import pg from '../../images/postgresql.png';
import python from '../../images/python.png';
import excel from '../../images/excel.png';
import sql from '../../images/sql.png';
import octocat from '../../images/octocat.png';
import npm from '../../images/npm.png';
import gitlab from '../../images/gitlab.png';
import docker from '../../images/docker.png';

class Technical extends Component {

  render = () => {

    return(
      <Container>
        <br/>
        <Row>
          <div>
          <br/>
            <Col md={12} xs={12}>
              <h2>
                Front-End
              </h2>
              <br/>
              <Row>
                <Col md={3} xs={3}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={js}
                    />
                  </Figure>
                </Col>
                <Col md={3} xs={3}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={react}
                    />
                  </Figure>
                </Col>
                <Col md={3} xs={3}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={html}
                    />
                  </Figure>
                </Col>
                <Col md={3} xs={3}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={css}
                    />
                  </Figure>
                </Col>
              </Row>
              <br/>
              <p>
                I work with JavaScript on a daily basis, and have on project 
                experience implementing a real-time analytics dashboard through React.  
              </p>
            </Col>
          </div>
        </Row>
        <br/>
        <Row>
          <div>
          <hr style={{ border: '3px solid #007BFF' }}/>
          <br/>
            <Col md={12} xs={12}>
              <h2>
                Back-End
              </h2>
              <br/>
              <Row>
                <Col md={4} xs={4}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={node}
                    />
                  </Figure>
                </Col>
                <Col md={4} xs={4}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={rest}
                    />
                  </Figure>
                </Col>
                <Col md={4} xs={4}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={pg}
                    />
                  </Figure>
                </Col>
              </Row>
              <br/>
              <p>
                I am very familiar with using Node.js and Express to build APIs. I also 
                have experience with database design and management through Postgresql.
              </p>
            </Col>
          </div>
        </Row>
        <br/>
        <Row>
          <div>
          <hr style={{ border: '3px solid #007BFF' }}/>
          <br/>
            <Col md={12} xs={12}>
              <h2>
                Data Analytics and Automation
              </h2>
              <br/>
              <Row>
                <Col md={4} xs={4}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={sql}
                    />
                  </Figure>
                </Col>
                <Col md={4} xs={4}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={python}
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
              </Row>
              <br/>
              <p>
                Comfortable analyzing large datasets using SQL and Pandas/NumPy. I also have experience automating routine tasks
                through Python and VBA.
              </p>
            </Col>
          </div>
        </Row>
        <br/>
        <Row>
          <div>
          <hr style={{ border: '3px solid #007BFF' }}/>
          <br/>
            <Col md={12} xs={12}>
              <h2>
                Developer Tools
              </h2>
              <br/>
              <Row>
                <Col md={3} xs={3}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={octocat}
                    />
                  </Figure>
                </Col>
                <Col md={3} xs={3}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={npm}
                    />
                  </Figure>
                </Col>
                <Col md={3} xs={3}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={gitlab}
                    />
                  </Figure>
                </Col>
                <Col md={3} xs={3}>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={docker}
                    />
                  </Figure>
                </Col>
              </Row>
              <br/>
              <p>
                Experienced in modern software development tools, processes, and best practices. Understand and
                regularly work with microserviced architecture.
              </p>
            </Col>
          </div>
        </Row>
        <br/>
      </Container>
    )

  }

}

export default Technical;