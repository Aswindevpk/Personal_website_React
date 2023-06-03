import React from 'react';
import twitter from '../../assets/twitter.svg'
import linkedIn from '../../assets/linkedin.svg'
import gitHub from '../../assets/github.svg'
import './footer.css'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer-social'>
        <img src={gitHub} alt="" />
        <img src={linkedIn} alt="" />
        <img src={twitter} alt="" />
      </div>
      <p> © 2023 Aswin Dev  All rights reserved.</p>
    </div>
  )
}

export default Footer
