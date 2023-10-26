import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import '../PagesCss/PageCss.css'
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

function Hcarousel() {
  // 슬라이더 버튼 연동
  const slider = useRef(null)
  // 관심목록 데이터 저장
  const [heartList, setHeartList] = useState([]);
  // 슬라이더 개수 관리
  const userName = localStorage.getItem('유저이름');

  // 백엔드로부터 지금까지 저장된 관심목록 받아오기
  useEffect(() => {
    axios.get(`http://localhost:4000/favorites/${userName}`)
      .then(response => {
        setHeartList(response.data)
        console.log("백엔드로부터 받은 관심목록 리스트2", heartList)
      })

      .catch(error => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
      });
  }, [])


  // 슬라이더 세팅
  const settings = {
    className: "center",
    centerMode: false,
    infinite: true,
    arrows: false,
    slidesToShow: 2,
    speed: 500,
    rows: 1,
    slidesPerRow: 1
  };



  return (

    <div className='H-container'>
      <div className='H-listName'>관심지역 목록들</div>


      {heartList.length === 0?<div className='H-wrap-slick'>관심지역이 없습니다.</div> :  <div className='H-wrap-slick'>
        <button className="H-btn" onClick={() => slider.current.slickPrev()}>이전</button>

        <Slider ref={slider} rows={1} slidesToShow={1} {...settings} className='H-slider'>
          {heartList.map((item, index) => (
            <div className="H-div" key={index}>
              {item}
              <br></br>
              <AiFillHeart color='red'></AiFillHeart>
            </div>
          ))}
        </Slider>

        <button className="H-btn" onClick={() => slider.current.slickNext()}>다음</button>
      </div>}

{/* 
      {heartList.length > 2 && (<div className='H-wrap-slick'>
          <button className="H-btn" onClick={() => slider.current.slickPrev()}>이전</button>

          <Slider ref={slider} {...settings} className='H-slider'>
            {heartList.map((item, index) => (
              <div className="H-div" key={index}>
                {item}
                <br></br>
                <AiFillHeart color='red'></AiFillHeart>
              </div>
            ))}
          </Slider>

          <button className="H-btn" onClick={() => slider.current.slickNext()}>다음</button>
        </div>) } */}



    </div >
  )
}

export default Hcarousel



// {heartList.length === 0 ? <div className='H-wrap-slick'>관심지역이 없습니다.</div> :

// <div className='H-wrap-slick'>
//   <button className="H-btn" onClick={() => slider.current.slickPrev()}>이전</button>
//   <Slider ref={slider} {...settings} className='H-slider'>

//     {heartList.map((item, index) => (
//       <div className="H-div" key={index}>
//         {item}
//         <br></br>
//         <AiFillHeart color='red'></AiFillHeart>
//       </div>
//     ))}
//   </Slider>

//   <button className="H-btn" onClick={() => slider.current.slickNext()}>다음</button>
// </div>
// }