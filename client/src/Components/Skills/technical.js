import React, { Component } from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import js from '../../images/js.png';
import react from '../../images/react.png';
import html from '../../images/html.png';
import css from '../../images/css.png';
import node from '../../images/nodejs.png';
import rest from '../../images/rest.png';
import pg from '../../images/postgresql.png';

class Technical extends Component {

  render = () => {

    return(
      <Container>
        <br/>
        <Row>
          <div>
          <hr style={{ border: '3px solid #007BFF' }}/>
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
      </Container>
    )

  }

}

export default Technical;