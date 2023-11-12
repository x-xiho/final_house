import React from 'react'
import '../PagesCss/PageCss.css'
import { useNavigate } from 'react-router-dom'

import { BiHomeAlt2 } from "react-icons/bi"

function Page0Start() {
  const navigate = useNavigate();

  const startBtn = () => {
    localStorage.removeItem('sex')
    localStorage.removeItem('age')
    localStorage.removeItem('family')
    localStorage.removeItem('marry')
    localStorage.removeItem('child')
    localStorage.removeItem('hobby')
    localStorage.removeItem('sports')
    localStorage.removeItem('priority')
    localStorage.removeItem('env')
    localStorage.removeItem('wel')
    localStorage.removeItem('ten')

    localStorage.removeItem('안전')
    localStorage.removeItem('생활시설')
    localStorage.removeItem('교육')
    localStorage.removeItem('의료')
    localStorage.removeItem('환경')
    localStorage.removeItem('교통')
    localStorage.removeItem('기타')

    localStorage.removeItem('자차')
    localStorage.removeItem('지하철')
    localStorage.removeItem('시내버스')
    localStorage.removeItem('광역버스')
    localStorage.removeItem('기차')
    localStorage.removeItem('따릉이')
    localStorage.removeItem('없음')

    localStorage.removeItem('공원')
    localStorage.removeItem('미세먼지')
    localStorage.removeItem('소음')
    localStorage.removeItem('풍수해')
    localStorage.removeItem('주택침수')
    localStorage.removeItem('없음')
    navigate('/myhome/pagesex');
  }
  return (
    <div className='pageStart-container'>
      <div className='pageStart-wrap'>
        <div className='pageStart-home'>
        <BiHomeAlt2 size="30" color="gray" />
        </div>
        <div className='pageStart-title'>나에게 딱 맞는 주거지역 추천</div>
        <div className='pageStart-text'>
          라이프 스타일 테스트를 통해 나에게 딱 맞는 주거지역을 추천받아보세요.
          <br/>
          질문은 답변에 따라 평균적으로 <b>10개 내외</b>로 진행됩니다.
        </div>

        <div className='startbtn'>
          <button className='pagestart-btn' onClick={()=> {startBtn()}}>
            <span className="span">시작하기</span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Page0Start