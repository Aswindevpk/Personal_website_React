import React from "react";
import "./header.css";
import { Navbar } from "../../components";
import heroImg from "../../assets/hero-img.png";
import folderOutline from "../../assets/folder-outline.svg";
import chatOutline from "../../assets/chatbubbles-outline.svg";
import twitter from "../../assets/twitter.svg";
import linkedIn from "../../assets/linkedin.svg";
import gitHub from "../../assets/github.svg";
import ReactGa from 'react-ga4';

function Header() {
  const portfolioClick = () =>{
    ReactGa.event({
      category: 'action-button',
      action: 'portfolio button clicked'
    });
  }
  const talkClick = () =>{
    ReactGa.event({
      category: 'action-button',
      action: 'let"s talk button clicked'
    });
  }
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
    <div>
      <Navbar />
      <div id="home" className="header">
        <div data-aos="fade-up" className="header-content">
          <h1>I'm Aswin Dev</h1>
          <h2>Full Stack Web Developer</h2>
          <div className="header-content_btn">
            <a onClick={portfolioClick} href="https://github.com/Aswindevpk?tab=repositories">
              <div className="header-content_btn-folio">
                <img src={folderOutline} alt="" srcset="" />
                <p>My Portfolio</p>
              </div>
            </a>
            <a onClick={talkClick} href="https://wa.me/+919995338872">
              <div className="header-content_btn-talk">
                <img src={chatOutline} alt="" srcset="" />
                <p>Let's Talk</p>
              </div>
            </a>
          </div>
          <div className="header-content-social">
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
        </div>
        <div data-aos="fade-up" className="header-graphics">
          <img src={heroImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Header;
