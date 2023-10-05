import React from 'react'
import './Main.css'
import greenLamp from './images/greenLamp.jpg'
import image from './images/car.jpg'
import Carousel from './pages/Carousel'
import { Link } from 'react-router-dom'

function Main() {
  return (
<div className='Main-container'>
  

<div className='Main-top-wrap'>
  <div className='Main-text'>
<div>나를위한</div>
<div>주거지역</div>
</div>
<div className='Main-button'>
<Link to="/myhome">바로가기</Link>
</div>
<div>
<img src={greenLamp} alt="초록색조명사진" style={{display:"flex", width:"600px",height: "350px",objectFit:"cover",justifyContent:"end"}}/>
</div>
</div>

<div className='Main-bottom-wrap'>
  <div className='Main-card'>
<Carousel/>
</div>
</div>



</div> 
// 전체 div 
  )
}

export default Main