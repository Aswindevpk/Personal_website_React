import React from 'react';
import twitter from '../../assets/twitter.svg'
import linkedIn from '../../assets/linkedin.svg'
import gitHub from '../../assets/github.svg'
import './footer.css'
import ReactGa from 'react-ga4'

function Footer() {
  const gitClick = () =>{
    ReactGa.event({
      category: 'social-button',
      action: 'git hub button clicked'
    });
  }
  const twitterClick = () =>{
    ReactGa.event({
      category: 'social-button',
      action: 'twitter button clicked'
    });
  }
  const linkedinClick = () =>{
    ReactGa.event({
      category: 'social-button',
      action: 'linkedin button clicked'
    });
  }
  return (
    <div id='footer' className='footer'>
      <div className='footer-social'>
            <a onClick={gitClick} href="https://github.com/Aswindevpk">
              <img src={gitHub} alt="" />
            </a>
            <a onClick={twitterClick} href="https://twitter.com/AswinDev_pk">
              <img src={twitter} alt="" />
            </a>
            <a onClick={linkedinClick} href="https://www.linkedin.com/in/aswin-dev-p-k-266a63211/">
              <img src={linkedIn} alt="" />
            </a>
      </div>
      <p> © 2023 Aswin Dev  All rights reserved.</p>
    </div>
  )
}

export default Footer
