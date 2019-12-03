import React from 'react';
import './style.css';

const Crew = props => {
  return(
    <div className='crew-wrapper'>
      <p style={{fontWeight: '400', fontSize: '30px'}}>
        Fly with our awesome <span style={{fontWeight: '700'}}>combo</span> crew
      </p>
      <p style={{fontSize: '20px', color: 'rgba(0,0,0,0.3)'}}>
        Meet our company and kindly staff
      </p>
      <div className='wrapper-image'>
        <div className="image" style={{backgroundPositionY: props.offset * 0.7}}>
        </div>  
      </div>
      <div className='text'>
        <p>
          <span style={{fontWeight: '700', fontSize: '25px'}}>L</span>orem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed scelerisque nibh vitae urna pellentesque dignissim. Phasellus cursus lectus lectus, et accumsan 
          elit fringilla in. Nam in ullamcorper nibh. Vestibulum id felis eros. Praesent et gravida libero, 
          in dapibus odio. Ut vel ultrices metus. Phasellus fringilla dui sit amet neque gravida, eget 
          sollicitudin ipsum egestas. 
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque nibh vitae urna 
          pellentesque dignissim. Phasellus cursus lectus lectus, et accumsan elit fringilla in. Nam 
          in ullamcorper nibh. Vestibulum id felis eros. Praesent et gravida libero, in 
           <span style={{color: 'red', opacity: '0.5'}}> danger</span> odio. Ut vel ultrices metus. Phasellus fringilla dui sit 
          amet neque gravida, eget sollicitudin ipsum egestas. 
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque nibh vitae urna 
          pellentesque dignissim. Phasellus cursus lectus lectus, et accumsan elit fringilla in. Nam 
          in ullamcorper nibh. Vestibulum id felis eros. Praesent et gravida libero, in dapibus odio. 
          Ut vel ultrices metus. Phasellus fringilla dui sit amet neque gravida, eget sollicitudin ipsum 
          egestas. 
        </p>
      </div>
    </div>
  )
}

export default Crew;