import React, { Component } from 'react';
import { Container, Row, Col, ButtonToolbar, Button } from 'react-bootstrap';
import Technical from './technical';
import Consulting from './consulting';
import Finance from './finance';

class Skills extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedButton: 'technical',
      colorScheme: 'outline-primary'
    }
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
                  variant={this.state.colorScheme}
                  active={ this.state.selectedButton === 'technical' }
                  onClick={ () => this.setState({ selectedButton: 'technical', colorScheme: 'outline-primary' }) }
                >
                  Technical
                </Button>
                <Button 
                  style={{ margin: '10px' }} 
                  size='lg' 
                  variant={this.state.colorScheme}
                  active={ this.state.selectedButton === 'consulting' }
                  onClick={ () => this.setState({ selectedButton: 'consulting', colorScheme: 'outline-success' }) }
                >
                  Consulting
                </Button>
                <Button 
                  style={{ margin: '10px' }} 
                  size='lg' 
                  variant={this.state.colorScheme}
                  active={ this.state.selectedButton === 'finance' }
                  onClick={ () => this.setState({ selectedButton: 'finance', colorScheme: 'outline-danger' }) }
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
        </Container>
      </header>
    )

  }

}

export default Skills;