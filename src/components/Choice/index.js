import React from 'react';
import './style.css';
import Luggage from '../../assets/images/luggage.svg';
import Booking from '../../assets/images/booking.svg';
import Hotel from '../../assets/images/hotel.svg';

const Choice = props => {
  return (
    <div className='choice-wrapper' id={props.id}> 
      <div className='header'>
        <p style={{fontSize: '30px'}}>
          Make the best <span style={{fontWeight: '700'}}>combo</span> choice  
        </p>
        <p style={{fontSize: '20px', color: 'rgba(0,0,0,0.3)'}}>
          We offer the services which are the most <br/> favorable for our loyal passengers
        </p>
      </div> 
      <div className='content'>
        <div className='box'>
          <img src={Luggage} alt='luggage' />
          <p className='header'>Safety Luggages</p>
          <p className='subheader'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit dolor magna eget est lorem ipsum dolor. Quam elementum</p>
        </div>
        <div className='box'>
          <img src={Booking} alt='booking' />
          <p className='header'>Check in via app</p>
          <p className='subheader'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit dolor magna eget est lorem ipsum dolor. Quam elementum</p>
        </div>
        <div className='box'>
          <img src={Hotel} alt='hotel' />
          <p className='header'>Premimum hotel</p>
          <p className='subheader'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Hendrerit dolor magna eget est lorem ipsum dolor. Quam elementum</p>
        </div>
      </div>
    </div>
  )
}

export default Choice;