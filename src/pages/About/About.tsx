import React from 'react';
import ContactFormWrapper from 'components/ContactForm/Wrapper';
import './About.scss';

function About() {
  return (
    <div className='about-page'>
      <h1>About page</h1>

      <div>
        <ContactFormWrapper />
      </div>
    </div>
  );
}

export default About;
