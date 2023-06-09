import React from 'react';
import './card.css';

function Card({title,logo,body}) {
  return (
    <div data-aos="fade-up" className='card'>
      <img src={logo} alt="" />
      <h5>{title}</h5>
      <p>{body}</p>
    </div>
  )
}

export default Card
