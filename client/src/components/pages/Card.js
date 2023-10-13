import React, { useState, useEffect } from 'react';
import '../PagesCss/PageCss.css'
import axios from 'axios'

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


