import React from 'react';
import './header.css'
import {Navbar} from '../../components';
import heroImg from '../../assets/heroImg.svg'
import folderOutline from '../../assets/folder-outline.svg'
import chatOutline from '../../assets/chatbubbles-outline.svg'
import twitter from '../../assets/twitter.svg'
import linkedIn from '../../assets/linkedin.svg'
import gitHub from '../../assets/github.svg'

function Header() {
  return (
    <div>
        <Navbar/>
        <div className='header'>
          <div data-aos="fade-up" className='header-content'>
            <h1 >I'm Aswin Dev</h1>
            <h2>Full Stack Web Developer</h2>
            <div className='header-content_btn'>
              <div className='header-content_btn-folio'>
                <img src={folderOutline} alt="" srcset="" />
                <p>My Portfolio</p>
              </div>
              <div className='header-content_btn-talk'>
                <img src={chatOutline} alt="" srcset="" />
                <p>Let's Talk</p>
              </div>
            </div>
            <div className='header-content-social'>
              <img src={gitHub} alt="" />
              <img src={twitter} alt="" />
              <img src={linkedIn} alt="" />
            </div>
          </div>
          <div data-aos="fade-up" className='header-graphics'>
            <img src={heroImg} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Header
