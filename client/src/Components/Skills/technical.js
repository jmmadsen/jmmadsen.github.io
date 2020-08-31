import React, { Component } from 'react';
import { Container, Row, Col, Figure } from 'react-bootstrap';
import js from '../../images/js.svg';
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
import ibmcloud from '../../images/ibmcloud.png';

class Technical extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loaded: {
        one: false,
        two: false,
        three: false,
        four: false
      } 
    }
  }

  loaded = (pic) => {

    let { loaded } = this.state;
    loaded[pic] = true;

    this.setState({ loaded });

  }

  render = () => {

    const style = Object.values(this.state.loaded).every((val) => val === true) ? {} : { visibility: 'hidden' };

    return(
      <Container style={ style }>
        <br/>
        <Row>
          <div>
          <br/>
            <Col>
              <h2>
                Front-End
              </h2>
              <br/>
              <Row>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      onLoad={ () => this.loaded('one') }
                      width={140}
                      height={90}
                      src={js}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      onLoad={ () => this.loaded('two') }
                      width={140}
                      height={90}
                      src={react}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      onLoad={ () => this.loaded('three') }
                      width={140}
                      height={90}
                      src={html}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      onLoad={ () => this.loaded('four') }
                      width={140}
                      height={90}
                      src={css}
                    />
                  </Figure>
                </Col>
              </Row>
              <br/>
              <p>
                I use JavaScript on a daily basis, and have experience building websites and 
                user interfaces with React (including this website).
              </p>
            </Col>
          </div>
        </Row>
        <br/>
        <Row>
          <div>
          <hr style={{ border: '3px solid #007BFF' }}/>
          <br/>
            <Col>
              <h2>
                Back-End
              </h2>
              <br/>
              <Row>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={node}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={pg}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={ibmcloud}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={rest}
                    />
                  </Figure>
                </Col>
              </Row>
              <br/>
              <p>
                I am very familiar with using Node.js and Express to build APIs. I also 
                have experience with database design and management using PostgreSQL.
              </p>
            </Col>
          </div>
        </Row>
        <br/>
        <Row>
          <div>
          <hr style={{ border: '3px solid #007BFF' }}/>
          <br/>
            <Col>
              <h2>
                Data Analytics and Automation
              </h2>
              <br/>
              <Row>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={sql}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={python}
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
              </Row>
              <br/>
              <p>
                I am comfortable analyzing large datasets using SQL and Python (Pandas/NumPy). I also have 
                experience automating routine tasks with Python and VBA.
              </p>
            </Col>
          </div>
        </Row>
        <br/>
        <Row>
          <div>
          <hr style={{ border: '3px solid #007BFF' }}/>
          <br/>
            <Col>
              <h2>
                Developer Tools
              </h2>
              <br/>
              <Row>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={octocat}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={docker}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={gitlab}
                    />
                  </Figure>
                </Col>
                <Col>
                  <Figure style={{ display: 'inline-block' }}>
                    <Figure.Image
                      width={140}
                      height={90}
                      src={npm}
                    />
                  </Figure>
                </Col>
              </Row>
              <br/>
              <p>
                I am experienced in modern software development tools, processes, and best practices. I
                regularly work with modern, microserviced cloud architectures.
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