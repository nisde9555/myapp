import React from 'react';
import './style.css';
import Plane from '../../assets/images/aeroplane.svg';
import { Link } from 'react-scroll';

const header = props => {
  return (
    <div className='header-wrapper' id={props.id}>
      <div className='content'>
        <h2>
          Touch the sky with <span style={{fontWeight: '700'}}>combo</span> flight
        </h2>
        <p style={{color: "white"}}>
          Feel the magic pleasure during a our flight
        </p>
      </div>
      <Link className='link' to='services' offset={-50} spy={true} smooth={true} duration={500}>
        <img
          style={{transform: 'rotateX(180deg)', cursor: 'pointer', marginBottom: '20px'}}
          src={Plane} 
          alt='plane' 
          height='70px' 
          width='70px' 
          className='image'
        />
      </Link>
    </div>
  )
}

export default header;