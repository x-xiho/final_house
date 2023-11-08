import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MdOutlineReplay } from "react-icons/md"

// 우선 순위 질문
function Page7Priority() {

  const navigate = useNavigate();

  // 버튼 클릭 순서 저장
  const [buttonClicks, setButtonClicks] = useState([]);
  const [buttonStatus, setButtonStatus] = useState({
    "안전": true,
    "생활시설": true,
    "교육": true,
    "의료": true,
    "환경": true,
    "교통": true,
    "기타": true
  });


  // 백엔드에 순위 데이터 전송
  const nextPage = () => {
    navigate('/myhome/pagecar');
  };


  const handleButtonClick = (button) => {
    const existingClickIndex = buttonClicks.findIndex(click => Object.keys(click)[0] === button);
    if (existingClickIndex !== -1) {
      // 이미 눌린 버튼일 경우, 삭제
      const newButtonClicks = [...buttonClicks];
      newButtonClicks.splice(existingClickIndex, 1);
      newButtonClicks.forEach((click, index) => {
        const key = Object.keys(click)[0];
        const value = index + 1;
        // 로컬 스토리지에 각 버튼의 순위만 저장
        localStorage.setItem(key, value.toString());
        click[key] = value;
      });
      setButtonClicks(newButtonClicks);
      setButtonStatus(prevStatus => ({ ...prevStatus, [button]: true }));
    } else {
      // 새로운 버튼일 경우, 추가
      const newOrder = [...buttonClicks, { [button]: buttonClicks.length + 1 }];
      setButtonClicks(newOrder);
      setButtonStatus(prevStatus => ({ ...prevStatus, [button]: false }));
      // 로컬 스토리지에 각 버튼의 순위만 저장
      localStorage.setItem(button, (buttonClicks.length + 1).toString());
    }
  };

  // 다시하기 버튼
  const resetData = () => {
    setButtonClicks([]);
    setButtonStatus({
      "안전": true,
      "생활시설": true,
      "교육": true,
      "의료": true,
      "환경": true,
      "교통": true,
      "기타": true
    });
  };




  return (

    <div className='page1-container'>
      <div className='page1-text'>
        <div className='page1-num'>Q.number</div>
        <div className='page1-qurry'>내가 중요하게 생각하는 요소를 1순위부터 7순위까지 차례대로 눌러주세요.</div>
        <div>( 모든 요소 선택 이후 다음 페이지로 이동 가능합니다. )</div>
      </div>

      <div >
        <button className='page-priority-2' onClick={resetData}>처음부터 다시하기<MdOutlineReplay /></button>
      </div>

      <div className='page-priority'>

        <div className='page-btns'>
          <button className={`page-priority-btn ${buttonStatus["안전"] ? 'enabled' : 'disabled'}`}
            onClick={() => handleButtonClick("안전")} >안전</button>
          <button className={`page-priority-btn ${buttonStatus["생활시설"] ? 'enabled' : 'disabled'}`}
            onClick={() => handleButtonClick("생활시설")}>생활시설</button>
          <button className={`page-priority-btn ${buttonStatus["교육"] ? 'enabled' : 'disabled'}`}
            onClick={() => handleButtonClick("교육")} >교육</button>
          <button className={`page-priority-btn ${buttonStatus["의료"] ? 'enabled' : 'disabled'}`}
            onClick={() => handleButtonClick("의료")} >의료</button>
          <button className={`page-priority-btn ${buttonStatus["환경"] ? 'enabled' : 'disabled'}`}
            onClick={() => handleButtonClick("환경")} >환경</button>
          <button className={`page-priority-btn ${buttonStatus["교통"] ? 'enabled' : 'disabled'}`}
            onClick={() => handleButtonClick("교통")}>교통</button>
          <button className={`page-priority-btn ${buttonStatus["기타"] ? 'enabled' : 'disabled'}`}
            onClick={() => handleButtonClick("기타")}>  
            <div>기타</div>
            <div className='page-priority-etc'>( 금액, 평수 등 )</div></button>
        </div>

        <br />

        <div className='page-priority-rank'>
          {buttonClicks.map((click, index) => (
            <div key={index} className='page-priority-set'>
              <div className='page-priority-value'>{Object.values(click)[0]}순위</div> <div className='page-rank-key'>{Object.keys(click)[0]}</div>
            </div>
          ))}
        </div>
        <br />

      </div>

      <div className='page-priority-form'>
        <div className='page-priority-nextbtn'>
          <button className='page1-btn' 
          onClick={() => {
            const sportsValue = localStorage.getItem('sports');

            if (sportsValue === null) {
              navigate('/myhome/pagehobby'); // sports 값이 없을 경우, pageHobby로 이동
            } else {
              navigate('/myhome/pagesports'); // sports 값이 있을 경우, pageSports로 이동
            }
          }}>이전</button>

          <button onClick={nextPage}
            disabled={buttonClicks.length < 7}
            className='page1-btn'>
            다음
          </button>
        </div>
      </div>

    </div >

  )
}

export default Page7Priority