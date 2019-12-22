import React, { Component } from 'react';
import me from '../../images/me.jpg';
import resume from './resume.pdf';

class About extends Component {

  render = () => {

    return(
      <header className="App-about">
        <img src={me} alt='Me on the beach' style={{ height: '40vmin', borderRadius: '50%' }}/>
        <br/>
        <h2>A Little About Myself</h2>
        <br/>
        <p style={{ paddingLeft: '50px', paddingRight: '50px' }}>I am originally from the Washington D.C. area, 
          but currently live in Brooklyn, New York. In my free time, I enjoy playing pickup 
          basketball and trying various restaurants around the city (I am not much of a cook). I also firmly
          believe Season One of True Detective is the best season of television ever made.
        </p>
        <br/>
        <a
          href={ resume }
          style={{ color: '#61dafb' }}
          download='Jacob Madsen Resume'>
          Download My Resume
        </a>
      </header>
    )

    // TODO - ADD CONTACT ME SECTION

  }

}

export default About;