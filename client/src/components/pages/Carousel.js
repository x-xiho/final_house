import React, { useRef } from 'react'
import Slider from "react-slick";
import '../PagesCss/PageCss.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"


import car from '../images/car.jpg'
import Card from './Card';

function Carousel() {
  const slider = useRef(null)

  var settings = {
    dots: false,
    infinite: true,
    speed: 800,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
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
      <button onClick={() => slider.current.slickPrev()} className='C-button'><HiArrowLongLeft size="30" /></button>
      <button onClick={() => slider.current.slickNext()} className='C-button'><HiArrowLongRight size="30" /></button>

      <Slider ref={slider} {...settings}>
        <div>
          <Card title="교통" region="서울 강북구" hash="#출근 #지하철 #여행" />
        </div>
        <div>
          <Card title="교통" region="서울 강북구" hash="#출근 #지하철 #여행"/>
        </div>
        <div>
          <Card title="교통" region="서울 강북구" hash="#출근 #지하철 #여행"/>
        </div>
        <div>
          <Card title="교통" region="서울 강북구" hash="#출근 #지하철 #여행"/>
        </div>
        <div>
        <Card title="교통" region="서울 강북구" hash="#출근 #지하철 #여행"/>

        </div>
        <div>
        <Card title="교통" region="서울 강북구" hash="#출근 #지하철 #여행"/>

        </div>
        <div>
        <Card title="교통" region="서울 강북구" hash="#출근 #지하철 #여행"/>

        </div>
        <div>
        <Card title="교통" region="서울 강북구" hash="#출근 #지하철 #여행"/>

        </div>
      </Slider>
    </div>

  )
}

export default Carousel