import React, { Component } from 'react';
import Cards from './cards';
import USPS from './usps';

class Experience extends Component {

  render = () => {

    return(
      <header className="App-experience">
        <h1>Work Experience</h1>
        <br/>
        <p 
          style={{ paddingLeft: '50px', paddingRight: '50px' }}>
          I have been working for IBM since August 2016. During that time, 
          I have been staffed on three different projects.
        </p>
        <br/>
        <Cards/>
        <br/>
        <br/>
        <USPS/>
      </header>
    )

  }

}

export default Experience;