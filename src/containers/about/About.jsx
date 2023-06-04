import React from 'react';
import './about.css';
import profilePic from '../../assets/about_profile_pic.png';
import eduMap from '../../assets/education_map.svg';
import aboutBg from '../../assets/about-bg.svg';


function About() {
  return (
    <div id='about' className='about'>
      <p data-aos="fade-up" >More About Me</p>
      <div data-aos="fade-up" className='about-profile'>
        <img src={profilePic} alt="" />
        <p>I’m A Full Stack Developer from kerala, Malappuram having a good knowldege in web frameworks, networks, databases, git etc..</p>
      </div>
      <div data-aos="fade-up" className='about-education'>
        <img src={eduMap} alt="" />
        <img src={aboutBg} alt="" />
      </div>
    </div>
  )
}

export default About
