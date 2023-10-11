import React, { useRef } from 'react'
import Slider from "react-slick";
import '../PagesCss/PageCss.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Hcarousel() {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    rows: 2,
    slidesPerRow: 2
  };
  
  return (
    <div>


    </div>
  )
}

export default Hcarousel