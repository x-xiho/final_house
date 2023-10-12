import React, { useState, useEffect } from 'react';
import '../PagesCss/PageCss.css'
import axios from 'axios'

function Card(props) {
  const [heartdata, setHeartData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/deliver/heartList')
      .then(response => {
        setHeartData(response.data.backendHeartList)
      })

      .catch(error => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
      });
  }, [])

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


