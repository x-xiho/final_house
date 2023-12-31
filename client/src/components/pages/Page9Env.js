import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { MdOutlineReplay } from "react-icons/md"

// 우선 순위 질문
function Page9Env() {

  const navigate = useNavigate();

  // 버튼 클릭 순서 저장
  const [buttonClicks, setButtonClicks] = useState([]);
  const [buttonStatus, setButtonStatus] = useState({
    "공원": true,
    "미세먼지": true,
    "소음": true,
    "풍수해": true,
    "환경없음": true
  });

  const [selectedOptions, setSelectedOptions] = useState([]);


  // 다음 페이지로 이동
  const nextPage = () => {
    navigate('/myhome/pagewelfare');
  };


  // 클릭하는대로 순서 저장하기
  const handleButtonClick = (button) => {
    const existingClickIndex = buttonClicks.findIndex(click => Object.keys(click)[0] === button);

    if (existingClickIndex !== -1) {
      // 이미 눌린 버튼일 경우, 삭제하고 순위 조정
      const removedButton = buttonClicks[existingClickIndex];
      const newButtonClicks = buttonClicks.filter((_, index) => index !== existingClickIndex);

      newButtonClicks.forEach((click, index) => {
        const key = Object.keys(click)[0];
        const value = index + 1;
        const rank = 5 - index;
        localStorage.setItem(key, rank.toString());
        click[key] = value;
      });

      setButtonClicks(newButtonClicks);
      setButtonStatus(prevStatus => ({ ...prevStatus, [button]: true }));

      const key = Object.keys(removedButton)[0];
      localStorage.removeItem(key);
    } else {
      // 새로운 버튼일 경우, 추가하고 순위 조정
      const newOrder = [...buttonClicks, { [button]: buttonClicks.length + 1 }];

      newOrder.forEach((click, index) => {
        const key = Object.keys(click)[0];
        const value = index + 1;
        const rank = 5 - index;
        localStorage.setItem(key, rank.toString());
        click[key] = value;
      });

      setButtonClicks(newOrder);
      setButtonStatus(prevStatus => ({ ...prevStatus, [button]: false }));
    }
  };

  // 예시
  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    setSelectedOptions(prevOptions => {
      if (isChecked && !prevOptions.includes(value)) {
        return [...prevOptions, value];
      } else if (!isChecked && prevOptions.includes(value)) {
        return prevOptions.filter(option => option !== value);
      } else {
        return prevOptions;
      }
    });
  }


  // 다시하기 버튼
  const resetData = () => {
    setButtonClicks([]);
    setButtonStatus({
      "공원": true,
      "미세먼지": true,
      "소음": true,
      "풍수해": true,
      "환경없음": true
    });

    localStorage.removeItem("공원");
    localStorage.removeItem("미세먼지");
    localStorage.removeItem("소음");
    localStorage.removeItem("풍수해");
    localStorage.removeItem("환경없음");
  };




  return (

    <div className='page1-container'>
      <div className='page1-text'>
        <div className='page1-num'>Q.09</div>
        <div className='page1-qurry'>내가 중요하게 생각하는 요소를 차례대로 눌러주세요.</div>
        <div>( 중요하게 생각하는 요소가 없다면 선택하지 않아도 됩니다. )</div>
      </div>

      <div >
        <button className='page-priority-2' onClick={resetData}>처음부터 다시하기<MdOutlineReplay /></button>
      </div>

      <div className='page-priority'>


        <div className='page-btns'>
          <button className={`page-priority-btn ${buttonStatus["공원"] ? 'enabled' : 'disabled'}`}
            onClick={() => handleButtonClick("공원")}
            disabled={selectedOptions.includes('없음')} >
              공원</button>

          <button className={`page-priority-btn ${buttonStatus["미세먼지"] ? 'enabled' : 'disabled'}`}
            onClick={() => handleButtonClick("미세먼지")}
            disabled={selectedOptions.includes('없음')}>
              미세먼지</button>

          <button className={`page-priority-btn ${buttonStatus["소음"] ? 'enabled' : 'disabled'}`}
            onClick={() => handleButtonClick("소음")} 
            disabled={selectedOptions.includes('없음')}>
              소음</button>

          <button className={`page-priority-btn ${buttonStatus["풍수해"] ? 'enabled' : 'disabled'}`}
            onClick={() => handleButtonClick("풍수해")} 
            disabled={selectedOptions.includes('없음')}>
              풍수해</button>

          <label className='page-priority-btn Pbutton'>
            <input type="checkbox"
              name="env"
              value="없음"
              onChange={handleCheckboxChange}
              style={{ display: "none" }}
              checked={selectedOptions.includes("없음")}
              disabled={buttonClicks.length > 0}
              onClick={() => { }}
            />
            <span>없음</span>
          </label>
        </div>

        <br />

        <div className='page-priority-rank'>
          {buttonClicks.map((click, index) => (
            <div key={index} className='page-priority-set'>
              <div className='page-priority-value'>{Object.values(click)[0]}순위</div> <div className='page-rank-key'>{Object.keys(click)[0]}</div>
            </div>
          ))}
          {selectedOptions.includes('없음') ? <div className='page-priority-value'> 없음 </div> : <></>}

        </div>
        <br />

      </div>

      <div className='page-priority-form'>
        <div className='page-priority-nextbtn'>
          <button className='page1-btn'
            onClick={() => {
              navigate('/myhome/pagecar');
              localStorage.removeItem("지하철");
              localStorage.removeItem("자차");
              localStorage.removeItem("시내버스");
              localStorage.removeItem("광역버스");
              localStorage.removeItem("기차");
              localStorage.removeItem("따릉이");
              localStorage.removeItem("없음");
            }}>이전</button>

          <button onClick={nextPage}
            disabled={buttonClicks.length < 1 && !selectedOptions.includes('없음')}
            className='page1-btn'>
            다음
          </button>
        </div>
      </div>

    </div >

  )
}

export default Page9Env