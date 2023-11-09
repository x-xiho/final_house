import React from 'react'
import '../PagesCss/PageCss.css'
import { useNavigate } from 'react-router-dom'

import { BiHomeAlt2 } from "react-icons/bi"

function Page0Start() {
  const navigate = useNavigate();
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
          <button className='pagestart-btn' onClick={()=> navigate('/myhome/pagesex')}>
            <span className="span">시작하기</span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Page0Start