import React from 'react';
import twitter from '../../assets/twitter.svg'
import linkedIn from '../../assets/linkedin.svg'
import gitHub from '../../assets/github.svg'
import './footer.css'

function Footer() {
  return (
    <div id='footer' className='footer'>
      <div className='footer-social'>
      <a
      href="https://github.com/Aswindevpk">
                <img src={gitHub} alt="" />
              </a>
              <a href="https://twitter.com/AswinDev_pk">
                <img src={twitter} alt="" />
              </a>
              <a href="https://www.linkedin.com/in/aswin-dev-p-k-266a63211/">
                <img src={linkedIn} alt="" />
              </a>
      </div>
      <p> © 2023 Aswin Dev  All rights reserved.</p>
    </div>
  )
}

export default Footer
