import React from 'react';
import './style.css';
import Logo from '../../assets/images/LogoComboFooter2.png';
import Place from '../../assets/images/where_to_vote-24px.svg';
import Phone from '../../assets/images/smartphone-24px.svg';

const Footer = props => {
  return (
    <div className='footer-wrapper' id={props.id}>
      <div className='box1'>
        <img src={Logo} alt='logo' />
      </div>
      <div className='box2'>
        <p style={{marginTop: '0', textTransform: 'uppercase'}}>
          Contact with us
        </p>
        <div className='info' style={{marginBottom: '10px'}}>
          <img src={Place} alt='place' style={{marginRight: '5px'}} />
          <span>8809 Fairviw St. Brooklyn NY 11209</span>
        </div>
        <div className='info'>
          <img src={Phone} alt='phone' style={{marginRight: '5px'}} />
          <span>+1 2129860427</span>
        </div>
      </div>
      <div className='box3'>
        <p style={{textTransform: 'uppercase', marginTop: '0'}}> 
          Newsletters
        </p>
        <span style={{opacity: '0.4'}}>
          Get new infos about low cost flights.
        </span>
        <input type="text" placeholder='denisgrof@gmail.com' />
        <button>
          Send
        </button>
      </div>
    </div>
  )
}

export default Footer;