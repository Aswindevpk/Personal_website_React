import React from "react";
import "./skills.css";
import { Card } from "../../components";
import backEnd from "../../assets/backendlogo.svg";
import FrontEnd from "../../assets/code-slash-outline.svg";
import Design from "../../assets/designLogo.svg";

import dj from '../../assets/skillLogo/dj.svg';
import figma from '../../assets/skillLogo/figma.svg';
import github from '../../assets/skillLogo/github.svg';
import js from '../../assets/skillLogo/js.svg';
import py from '../../assets/skillLogo/py.svg';
import react from '../../assets/skillLogo/react.svg';

function Skills() {
  const skillList = [
    {
      title: "UI Designer",
      logo: Design,
      body: "I value the content, stucture, font, color , Targeted Audience,etc",
    },
    {
      title: "UI Front-End Developer ",
      logo: FrontEnd,
      body: "I like to code the simple website from scratch in popular frameworks.",
    },
    {
      title: "Back-End Developer",
      logo: backEnd,
      body: "I mostly like to design the database and the main engine of the website",
    },
  ];
  return (
    <div className="skills">
      <div className="skills-card">
      {
        skillList.map((obj)=>(
          <Card title={obj.title} logo={obj.logo} body={obj.body} />
        ))
      }
      </div>
      <div className="skills-logo">
        <img src={figma} alt="" />
        <img src={react} alt="" />
        <img src={dj} alt="" />
        <img src={github} alt="" />
        <img src={py} alt="" />
        <img src={js} alt="" />
      </div>
    </div>
  );
}

export default Skills;
