import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PagePriority() {

  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 새로고침 방지

    if (selectedOption !== null) {
      localStorage.setItem('sex', selectedOption);
      navigate('/myhome/pageage');
      // 로컬에 저장하고 연령대 질문으로 이동
    }
  }

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  }


  // 
  const [buttonClicks, setButtonClicks] = useState([]);
  const [buttonStatus, setButtonStatus] = useState({
    "복지": true,
    "환경": true,
    "식당": true,
    "운동": true
  });

  const handleButtonClick = (button) => {
    if (buttonStatus[button]) {
      setButtonClicks([...buttonClicks, { [button]: buttonClicks.length + 1 }]);
      setButtonStatus(prevStatus => ({ ...prevStatus, [button]: false }));
    }
  };

  const cancelLastButtonClick = () => {
    const lastButtonClick = buttonClicks[buttonClicks.length - 1];
    if (lastButtonClick) {
      const cancelledButton = Object.keys(lastButtonClick)[0];
      setButtonClicks(buttonClicks.slice(0, -1));
      setButtonStatus(prevStatus => ({ ...prevStatus, [cancelledButton]: true }));
    }
  };

  const sendDataToBackend = () => {
    const dataToSend = {};
  
    buttonClicks.forEach((click, index) => {
      const key = Object.keys(click)[0];
      const value = index + 1;
      dataToSend[key] = value;
    });

    console.log(dataToSend)
  
    // 여기에서 dataToSend를 백엔드로 전송하는 코드를 작성하세요.
    // 예를 들어 axios 또는 fetch API를 사용하여 전송할 수 있습니다.
  };

  const resetData = () => {
    setButtonClicks([]);
    setButtonStatus({
      "복지": true,
      "환경": true,
      "식당": true,
      "운동": true
    });
  };
  return (
    <div className='page1-container'>
      <div className='page1-text'>
        <div className='page1-num'>Q.01</div>
        <div className='page1-qurry'>나의 성별은?</div>
      </div>

      <form onSubmit={handleSubmit} className='page1-form'>
        <div className='page-radioStyle'>
          <label className='radioStyle'>
            <input type="number"
              name="number" />
            <span>환경</span>
          </label>

          <label className='radioStyle'>
            <input type="number"
              name="number" />
            <span>복지</span>
          </label>

          <label className='radioStyle'>
            <input type="number"
              name="number" />
            <span>복지</span>
          </label>



        </div>

        <div className='Nextbtn'>
          <button type='submit'
            disabled={selectedOption === null}
            className='page1-btn'>
            다음
          </button>
        </div>



      </form>


      <div>
      <button onClick={() => handleButtonClick("복지")} disabled={!buttonStatus["복지"]}>복지</button>
      <button onClick={() => handleButtonClick("환경")} disabled={!buttonStatus["환경"]}>환경</button>
      <button onClick={() => handleButtonClick("식당")} disabled={!buttonStatus["식당"]}>식당</button>
      <button onClick={() => handleButtonClick("운동")} disabled={!buttonStatus["운동"]}>운동</button>
      
      {buttonClicks.map((click, index) => (
        <div key={index}>
          {Object.keys(click)[0]} {Object.values(click)[0]}
        </div>
      ))}

      {buttonClicks.length === 4 && <button onClick={sendDataToBackend}>데이터 전송</button>}
      <button onClick={cancelLastButtonClick}>이전 버튼 취소</button>
      <button onClick={resetData}>다시하기</button>
    </div>



    </div >
  )
}

export default PagePriority