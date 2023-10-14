import React from 'react'
import '../PagesCss/PageCss.css'
import { useNavigate } from 'react-router-dom'

function PageStart() {
  const navigate = useNavigate();
  return (
    <div className='pageStart-container'>
      <div className='pageStart-wrap'>
        <div className='pageStart-text'>
          나에게 딱 맞는 맞춤지역을 추천하기 위해서
          간략한 라이프스타일 설문조사가 시작됩니다!
          <br/>
          질문은 평균적으로 10개 내외로 진행됩니다.
        </div>

        <div className='Nextbtn'>
          <button className='pagestart-btn' onClick={()=> navigate('/myhome/pagesex')}>
            시작하기
          </button>
        </div>

      </div>
    </div>
  )
}

export default PageStart