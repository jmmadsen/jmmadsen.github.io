import React, { Component } from 'react';
import { Container, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import Technical from './technical';
import Consulting from './consulting';
import Finance from './finance';

class Skills extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedButton: 'technical'
    }
  }

  buttonClick = (name) => {

    this.setState({ selectedButton: name });

  }

  render = () => {

    return(
      <header className="App-skills">
        <Container>
          <h1>Skills</h1>
          <br/>
          <Row>
            <Col md={12} xs={12}>
              <ButtonToolbar style={{ justifyContent: 'center' }}>
                <Button 
                  style={{ margin: '10px' }} 
                  size='lg' 
                  variant="outline-primary"
                  active={ this.state.selectedButton === 'technical' }
                  onClick={ () => this.buttonClick('technical') }
                >
                  Technical
                </Button>
                <Button 
                  style={{ margin: '10px' }} 
                  size='lg' 
                  variant="outline-primary"
                  active={ this.state.selectedButton === 'consulting' }
                  onClick={ () => this.buttonClick('consulting') }
                >
                  Consulting
                </Button>
                <Button 
                  style={{ margin: '10px' }} 
                  size='lg' 
                  variant="outline-primary"
                  active={ this.state.selectedButton === 'finance' }
                  onClick={ () => this.buttonClick('finance') }
                >
                  Finance
                </Button>
              </ButtonToolbar>
            </Col>
          </Row>
          {
            this.state.selectedButton === 'technical'
            ? <Technical/> 
            : this.state.selectedButton === 'consulting'
            ? <Consulting/> 
            : <Finance/>
          }
          {/* Detailed Knowledge
          Working Knowledge
          Conceptual Knowledge */}
        </Container>
      </header>
    )

  }

}

export default Skills;