import React from 'react';
import './style.css';
import Logo from '../../assets/images/LogoCombo.png';
import Hamburger from '../../assets/images/hamburger.png';
import Close from '../../assets/images/iconfinder_x_293657.png';

import { Link } from 'react-scroll';

let arr = [{name: 'Home', id: 'header'}, 
{name: 'Services', id: 'services'}, {name: 'About', id: 'combo'}, 
{name: 'Booking', id: 'getStart'}, {name: 'Contact', id: 'footer'}];


const Navigation = props => {
  return (
    <div 
      className={`nav-bar ${props.hamburgerFlag ? 'white' : null} ${props.scrollY ? null : "white"}`}
    > 
      <img src={Logo} alt='logo' className='logo' />
      {!props.hamburgerFlag ? <img className='hamburger' src={Hamburger} alt='menu'  onClick={props.hamburgerClick} />
      : <img className='hamburger' src={Close} alt='close' onClick={props.hamburgerClick} />}
      <div className={`list ${props.hamburgerFlag ? 'open' : 'close'}`}>
        <ul >
          {arr.map((item, id) => {
            return (
              <li key={id}>
                <Link className='cool-link' to={item.id} offset={-50} spy={true} smooth={true} duration={500}>
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Navigation;