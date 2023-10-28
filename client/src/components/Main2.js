import React from 'react'
import './Main.css'
import greenLamp from './images/greenLamp.jpg'
import image from './images/car.jpg'
import Carousel from './pages/Carousel'
import { Link } from 'react-router-dom'

import img from './images/mainImg.jpg'

function Main2() {
  return (
    <div className='Main2-container'>
      <div className='Main2-wrap'>
        <div>
          <img src={img} alt='메인사진' style={{objectFit:"cover",height:"60vh", width:"100vw"}}></img>
        </div>
        <div>
          <div>오직 나를 위한 맞춤 주거지역</div>
          <button>바로가기</button>
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