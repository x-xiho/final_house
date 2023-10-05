import React, { useRef } from 'react'
import Slider from "react-slick";
import '../PagesCss/PageCss.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl"

import Card from './Card';

function Carousel() {
  const slider = useRef(null)

  var settings = {
    className: "center",
      centerMode: true,
    dots: false,
    infinite: true,
    speed: 800,
    arrows: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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
        <button className='C-button' onClick={() => slider.current.slickPrev()}><SlArrowLeft size="25" /></button>
        <button className='C-button' onClick={() => slider.current.slickNext()}><SlArrowRight size="25" /></button>
      </div>

      <div className='carousel-wrap'>
        <Slider ref={slider} {...settings} className='carousel-slider'>
          <div>
            <Card title="교통" region="서울 강북구" hash="#출근 #지하철 #여행" />
          </div>
          <div>
            <Card title="환경" region="서울 도봉구" hash="#쉼 #산책" />
          </div>
          <div>
            <Card title="안전" region="서울 어쩌구" hash="#안심 #여성 #1인가구" />
          </div>
          <div>
            <Card title="문화" region="서울 종로구" hash="#전시 #관람" />
          </div>
          <div>
            <Card title="교통" region="서울 강북구" hash="#출근 #지하철 #여행" />

          </div>
          <div>
            <Card title="교통" region="서울 강북구" hash="#출근 #지하철 #여행" />

          </div>
          <div>
            <Card title="교통" region="서울 강북구" hash="#출근 #지하철 #여행" />

          </div>
          <div>
            <Card title="교통" region="서울 강북구" hash="#출근 #지하철 #여행" />

          </div>
        </Slider>
      </div>
    </div>

  )
}

export default Carousel