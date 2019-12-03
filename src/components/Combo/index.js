import React from 'react';
import './style.css';
import Mobile from '../../assets/images/mobile_app3.png';
import ADB from '../../assets/images/adb-24px.svg';
import Android from '../../assets/images/android-24px.svg';
import Phone from '../../assets/images/smartphone-24px.svg';

const Combo = props => {
  return ( 
    <div className='combo-wrapper' id={props.id}>
      <p>
        Get a knowlegde about <span className='bold'>combo</span> rules <br/>
        on <span className='bold'>combo</span> mobile app
      </p>
      <div className='content'>
        <div className='info'>
          <p style={{fontSize: '15px'}}>
            Download our mobile app for free:
          </p>
          <div className="icons">
            <img src={ADB} alt='adb' />
            <img src={Android} alt='android' />
            <img src={Phone} alt='phone' />
          </div>
          <p style={{fontSize: '25px'}}>
            Simply-<span style={{color: 'grey'}}>Fast</span>-<span style={{color: 'red'}}>Easy</span>
          </p>
          <p style={{fontSize: '20px'}}>
            Book your card via <span style={{color: 'red'}}>combo</span> app
          </p>
        </div>
        <div className='image'>
          <img src={Mobile} alt='mobile' style={{marginBottom: '-3px'}} />
        </div>
      </div>
    </div>
  )
}

export default Combo;