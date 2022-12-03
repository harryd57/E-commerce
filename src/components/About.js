import React from 'react';
import madiba6 from '../img/madiba6.jpeg'


const About = () => {
  return (
    <section className='about'>
      <div className="container about-container">
        <div className="row">
          <div className="col-sm-12 col-lg-6">
          <img src={madiba6} alt="madiba" />
          </div> 
          <div className="col-sm-12 col-lg-6 px-5 about-title">
          <div>
            <h2 className='text-center'><strong>Brain Behind Bucks</strong></h2>
            <div className="title-underline bg-warning"></div>
          </div>
          <div className='my-4 about-text'>
          <h3>Awobajo Samod</h3>
          <p>A Student, <br />
            An Engineer,<br /> 
            A Computer scientist, <br />
            A Chelsea fan⚽, <br />
            A Bucks fan🏀<br />
            A Sports lover🏀⚽🎾, <br />
            An Aspiring football coach and analyst</p>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;