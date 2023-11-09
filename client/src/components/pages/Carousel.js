import React, { useRef } from 'react'
import Slider from "react-slick";
import '../PagesCss/PageCss.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl"

import Card from './Card';

function Carousel() {
  const slider = useRef(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover : true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <div>
      <div className='carousel-btn'>
        <button className='C-button' onClick={() => slider.current.slickPrev()}><SlArrowLeft size="20" /></button>
        <button className='C-button' onClick={() => slider.current.slickNext()}><SlArrowRight size="20" /></button>
      </div>

      <div className='carousel-wrap'>
        <Slider ref={slider} {...settings} className='carousel-slider'>
          <div>
            <Card title="교통 1위" region="서울 강북구" hash="#출근 #지하철 #여행" />
            </div>
          <div>
            <Card title="환경 1위" region="서울 도봉구" hash="#쉼 #산책" />
          </div>
          <div>
            <Card title="안전 1위" region="서울 중구" hash="#안심 #여성 #1인가구" />
          </div>
          <div>
            <Card title="문화 1위" region="서울 종로구" hash="#전시 #관람" />
          </div>
          <div>
            <Card title="복지 1위" region="서울 강서구" hash="#출근 #지하철 #여행" />

          </div>
          <div>
            <Card title="운동의 도시" region="서울 강북구" hash="#출근 #지하철 #여행" />

          </div>
          <div>
            <Card title="맛집의 도시" region="서울 강북구" hash="#출근 #지하철 #여행" />

          </div>
          <div>
            <Card title="힐링 도시" region="서울 강북구" hash="#출근 #지하철 #여행" />

          </div>
        </Slider>
      </div>
    </div>

  )
}

export default Carousel