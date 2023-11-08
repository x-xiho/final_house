import React from 'react';
import '../PagesCss/PageCss.css'

function Card(props) {

  return (
    <div className='Card-container'>
      
      <div className='Card-title'>
        {props.title}
      </div>

      <div className='Card-region'>
        {props.region}
      </div>

      <hr className='Card-hr' />

      <div className='Card-hash'>
        {props.hash}
      </div>

    </div>
  )
}

export default Card


