import React from 'react'
import './Main.css'
import greenLamp from './images/greenLamp.jpg'
import Carousel from './pages/Carousel'
import { Link } from 'react-router-dom'

function Main() {
  return (

<div className='Main-container'>
  
<div className='Main-top-wrap'>
<div className='Main-circle-mini'></div>
  
  <div className='Main-text'>
<div className='Main-text-logo'>나를위한</div>
<div className='Main-text-logo'>주거지역</div>

<div className='Main-button'>
<Link to="/myhome">바로가기</Link>
</div>
</div>


<div>
<div className='Main-circle'></div>
<img src={greenLamp} alt="초록색조명사진" 
style={{display:"flex", width:"600px",height: "350px",objectFit:"cover",justifyContent:"end", transform: "translatex(50px)"}}/>
</div>

</div>
{/* top div 끝 */}

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