import React from 'react';
import './style.css';

const getStart = props => {
  return (
    <div className='getStart-wrapper' id={props.id}>
      <p style={{fontSize: '25px'}}>
        Reserve your flight <span style={{color: 'black'}}>already</span> today
      </p>
      <p style={{fontWeight: '300'}}>
        Take Your cards per good prices 
      </p>
      <button>
        Get start
      </button>
    </div>
  )
}

export default getStart;