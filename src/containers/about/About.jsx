import React from 'react';
import './about.css';
import profilePic from '../../assets/about_profile_pic.png';
import eduMap from '../../assets/education_map.svg';
import aboutBg from '../../assets/about-bg.svg';


function About() {
  return (
    <div className='about'>
      <p>More About Me</p>
      <div className='about-profile'>
        <img src={profilePic} alt="" />
        <p>I’m A Full Stack developer from kerala, Malappuram having a good knowlege in web frameworks, networks, database, github etc..</p>
      </div>
      <div className='about-education'>
        <img src={eduMap} alt="" />
        <img src={aboutBg} alt="" />
      </div>
    </div>
  )
}

export default About
