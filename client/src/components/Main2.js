import React from 'react'
import './Main2.css'
import Carousel from './pages/Carousel'
import { useNavigate } from 'react-router-dom'


function Main2() {
  const navigate = useNavigate();
  return (
    <div className='Main2-container'>

      <div className='Main2-wrap'>
      <div className='Main2-square'></div>
        <div className='Main2-image-wrap'>
          {/* <img src={img} alt='메인사진' className='Main2-image'></img> */}

          <div className='Main2-text-wrap'>
            <div className='Main2-text-main'>오직 나를 위한 맞춤 주거지역</div>
            <button className='Main2-text-btn' onClick={() => { navigate('/myhome'); }}>지금 바로 추천받기</button>
          </div>
        </div>



      </div>

      <div className='Main2-bottom-wrap'>
        <div className='Main2-card'>
          <Carousel />
        </div>

      </div>

    </div>
  )
}

export default Main2