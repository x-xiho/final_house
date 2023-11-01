import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MdOutlineReplay} from "react-icons/md"

// 우선 순위 질문
function PagePriority() {

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
  const sendDataToBackend = () => {
    // e.preventDefault(); //페이지 새로고침 방지
    const dataToSend = {};

    buttonClicks.forEach((click, index) => {
      const key = Object.keys(click)[0];
      const value = index + 1;
      dataToSend[key] = value;
    });

    console.log(dataToSend)

    navigate('/myhome/pagefamily');

    // 아직 백엔드 코드 작성 안함
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

  // 

  // 버튼 클릭
  const handleButtonClick = (button) => {
    if (buttonStatus[button]) {
      setButtonClicks([...buttonClicks, { [button]: buttonClicks.length + 1 }]);
      setButtonStatus(prevStatus => ({ ...prevStatus, [button]: false }));
    }
  };

  // 이전 버튼 취소하기
  const cancelLastButtonClick = () => {
    const lastButtonClick = buttonClicks[buttonClicks.length - 1];
    if (lastButtonClick) {
      const cancelledButton = Object.keys(lastButtonClick)[0];
      setButtonClicks(buttonClicks.slice(0, -1));
      setButtonStatus(prevStatus => ({ ...prevStatus, [cancelledButton]: true }));
    }
  };


  {/* 안전, 생활시설, 교육, 의료, 환경, 교통, 기타 */ }



  return (

    <div className='page1-container'>
      <div className='page1-text'>
        <div className='page1-num'>Q.number</div>
        <div className='page1-qurry'>내가 중요하게 생각하는 요소를 1순위부터 차례대로 눌러주세요.</div>
        <div>( 1순위부터 7순위까지 모두 선택 후 다음 페이지로 이동 가능 )</div>
      </div>

      <div >
        <button className='page-priority-2' onClick={resetData}>처음부터 다시하기<MdOutlineReplay/></button>
        <button className='page-priority-2' onClick={cancelLastButtonClick}>이전 버튼 취소</button>
      </div>

      <div className='page-priority'>

        <div className='page-btns'>
          <button className='page-priority-btn' onClick={() => handleButtonClick("안전")} disabled={!buttonStatus["안전"]}>안전</button>
          <button className='page-priority-btn' onClick={() => handleButtonClick("생활시설")} disabled={!buttonStatus["생활시설"]}>생활시설</button>
          <button className='page-priority-btn' onClick={() => handleButtonClick("교육")} disabled={!buttonStatus["교육"]}>교육</button>
          <button className='page-priority-btn' onClick={() => handleButtonClick("의료")} disabled={!buttonStatus["의료"]}>의료</button>
          <button className='page-priority-btn' onClick={() => handleButtonClick("환경")} disabled={!buttonStatus["환경"]}>환경</button>
          <button className='page-priority-btn' onClick={() => handleButtonClick("교통")} disabled={!buttonStatus["교통"]}>교통</button>
          <button className='page-priority-btn' onClick={() => handleButtonClick("기타")} disabled={!buttonStatus["기타"]}>기타</button>
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
          <button className='page1-btn' onClick={() => navigate('/myhome/pageage')}>이전</button>

          <button onClick={sendDataToBackend}
            disabled={buttonClicks.length < 7}
            className='page1-btn'>
            다음
          </button>
        </div>
      </div>

    </div >

  )
}

export default PagePriority