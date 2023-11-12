import React, { useRef, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Slider from "react-slick";
import '../PagesCss/PageCss.css'
import axios from 'axios';


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AiFillHeart } from "react-icons/ai"
import { SlArrowLeft, SlArrowRight } from "react-icons/sl"

function Hcarousel() {

  const seoulData = {
    "종로구": "역사와 전통이 어우러진 지역",
    "중구": "도심 속의 상업 및 문화 중심지",
    "용산구": "다양한 문화시설을 품은 서울의 중심",
    "성동구": "도시재생 및 문화예술 중심",
    "광진구": "문화와 산업이 공존하는 지역",
    "동대문구": "역사적인 유적지와 쇼핑의 중심",
    "중랑구": "생활 편의시설이 잘 갖춰진 안전한 지역",
    "성북구": "자연환경이 우수한 지역",
    "강북구": "자연경관이 아름다운 도시",
    "도봉구": "편안한 주거환경과 공원이 많은 지역",
    "노원구": "주택가와 자연이 조화로운 도시",
    "은평구": "자연과 문화가 공존하는 지역",
    "서대문구": "역사적인 명소와 풍부한 문화시설",
    "마포구": "예술과 엔터테인먼트가 활발한 도시",
    "양천구": "녹지와 상업지구가 조화로운 도시",
    "강서구": "공원과 강이 어우러진 깨끗한 도시",
    "구로구": "산업 및 상업 중심지",
    "금천구": "경제와 기업이 발전한 도시",
    "영등포구": "상업지구와 강이 어우러진 도시",
    "동작구": "쇼핑과 맛집이 많은 안전한 도시",
    "관악구": "문화와 대학이 살아 숨쉬는 도시",
    "서초구": "상업과 주거가 어우러진 도시",
    "강남구": "상업 및 엔터테인먼트 중심지",
    "송파구": "공원과 물이 어우러진 도시",
    "강동구": "평화로운 주거환경과 많은 산책로"
  };



  const userName = localStorage.getItem('name');
  const navigate = useNavigate();
  // 슬라이더 버튼 연동
  const slider = useRef(null)
  // 관심목록 데이터 저장
  const [heartList, setHeartList] = useState([]);

  // 관심목록 삭제
  const handle = (name) => {
    const confirmed = window.confirm(`${name}을(를) 관심목록에서 삭제하시겠습니까?`);

    if (confirmed) {
      axios.delete(`http://localhost:4000/users/${userName}/favorites/${name}`, { data: { favorites: name } })
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
    axios.get(`http://localhost:4000/favorites/${userName}/favorites`)
      .then(response => {
        // const heartList = response.data.heartList;
        const heartList = response.data;
        setHeartList(heartList);
        console.log('백엔드로부터 받아온 관심목록 리스트', heartList);

      })

      .catch(error => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goPage = () => {
    navigate('/myhome');
  }

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


      {heartList.length === 0 ?
        <div className='H-wrap-slick noheart'>
          <div className='H-wrap-slick-none'>관심지역이 없습니다.</div>

          <div className='H-wrap-slick-none2'>지금 바로 오직 나를 위한 지역을 추천받아요!</div>
          <button onClick={() => goPage()}
            className='H-btn-goPage'>
            <span className='H-btn-goPage-span'>지금 바로 추천받기</span></button>
        </div>


        :
        <div className='H-wrap-slick'>
          <button className="H-btn" onClick={() => slider.current.slickPrev()}><SlArrowLeft size="20" color={heartList.length <= 3 ? 'rgb(204,204,204,0.6)' : 'black'} /></button>

          <Slider ref={slider} {...settings} className='H-slider'>
            {heartList.map((item, index) => (

              <div className='H-div-wrap'>
                <div className="H-div" key={index} >
                  {item}
                  <div className='H-heart-icons'>
                    <AiFillHeart
                      size="30"
                      color='red'
                      className="test"
                      onClick={() => handle(item)} />
                  </div>
                </div>

                <div className='H-data-1'>
                  #{seoulData[item]}
                </div>

                <div className='H-data-1'>

                  <div className='H-data-name1'>
                    평균시세
                  </div>

                  <div className='H-data-value1'>
                    100만원
                  </div>

                </div>

                <div className='H-data-1'>

                  <div className='H-data-name1'>
                    평균시세
                  </div>

                  <div className='H-data-value1'>
                    100만원
                  </div>

                </div>

                <div className='H-data-1'>

                  <div className='H-data-name1'>
                    평균시세
                  </div>

                  <div className='H-data-value1'>
                    100만원
                  </div>

                </div>
              </div>
            ))}
          </Slider>

          <button className="H-btn" onClick={() => slider.current.slickNext()}><SlArrowRight size="20" color={heartList.length <= 3 ? 'rgb(204,204,204,0.6)' : 'black'} /></button>
        </div>}


    </div >
  )
}

export default Hcarousel