import React, { useEffect, useRef, useState } from 'react'
import Slider from "react-slick";
import '../PagesCss/PageCss.css'
import axios from 'axios';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiFillHeart } from "react-icons/ai"

function Hcarousel() {
  // 슬라이더 버튼 연동
  const slider = useRef(null)
  // 관심목록 데이터 저장
  const [heartList, setHeartList] = useState([]);

  const userName = localStorage.getItem('유저이름');

  // 슬라이더 최대 개수
  const showMaxCnt = 4;
  const arr = Array.from(new Array(3));

  // 관심목록 삭제
  const handle = (name) => {
    const confirmed = window.confirm(`${name}을(를) 관심목록에서 삭제하시겠습니까?`);

    if (confirmed) {
      axios.delete(`http://localhost:4000/users/${userName}/favorites`, { data: { favorites: name } })
        .then(response => {
          console.log('관심목록에 삭제할 지역', name)
          window.location.reload();
        })
        .catch(error => {
          console.error('관심목록을 삭제하는 과정에서 오류가 발생했습니다.', error);
        });
      console.log("삭제되었습니다.");
    } else {
      // 사용자가 "아니요"를 눌렀을 때의 동작
      console.log("취소되었습니다.");
    }


  };


  // 백엔드로부터 지금까지 저장된 관심목록 받아오기
  useEffect(() => {
    axios.get(`http://localhost:4000/favorites/${userName}`)
      .then(response => {
        setHeartList(response.data)
        // 배열 데이터를 받음
        console.log("백엔드로부터 받은 관심목록 리스트2", heartList)
      })

      .catch(error => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
      });
  }, [])


  // 슬라이더 세팅
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    arrows: false,
    rows: 1,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    autoplay: false,
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

    <div className='H-container'>
      <div className='H-listName'>&lt; 나의 관심지역 목록 &gt;</div>


      {heartList.length === 0 ? <div className='H-wrap-slick'>관심지역이 없습니다.</div> :
        <div className='H-wrap-slick'>
          <button className="H-btn" onClick={() => slider.current.slickPrev()}>이전</button>

          <Slider ref={slider} {...settings} className='H-slider'>
            {heartList.map((item, index) => (
              <div className="H-div" key={index} onClick={() => handle(item)}>
                {item}
                <br></br>
                <AiFillHeart
                  size="30"
                  color='red'
                  className="test" />
              </div>
            ))}
          </Slider>

          <button className="H-btn" onClick={() => slider.current.slickNext()}>다음</button>
        </div>}


    </div >
  )
}

export default Hcarousel