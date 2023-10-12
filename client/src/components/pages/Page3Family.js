import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// 질문3 가족형태
function Page3Family() {

  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 새로고침 방지

    if (selectedOption !== null) {
      localStorage.setItem('family', selectedOption);
      navigate('/myhome/pagemarry');
      // 로컬에 저장하고 다음 질문으로 이동
    }
  }

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div className='page1-container'>
    <div className='page1-text'>
      <div className='page1-num'>Q.03</div>
      <div className='page1-qurry'>나의 가족형태는?</div>
    </div>

    <form onSubmit={handleSubmit} className='page1-form'>
      <div className='page-radioStyle'>
        <label className='radioStyle'>
          <input type="radio"
            name="family"
            value="1인"
            checked={selectedOption === "1인"}
            onChange={handleRadioChange} />
            <span>1인 가구</span>
        </label>

        <label className='radioStyle'>
          <input type="radio"
            name="family"
            value="2인"
            checked={selectedOption === "2인"}
            onChange={handleRadioChange} />
            <span>2인 가구</span>
        </label>

        <label className='radioStyle'>
          <input type="radio"
            name="family"
            value="3인"
            checked={selectedOption === "3인"}
            onChange={handleRadioChange} />
            <span>3인 가구</span>
        </label>

        <label className='radioStyle'>
          <input type="radio"
            name="family"
            value="4인"
            checked={selectedOption === "4인"}
            onChange={handleRadioChange} />
            <span>4인 가구</span>
        </label>

        <label className='radioStyle'>
          <input type="radio"
            name="family"
            value="5인"
            checked={selectedOption === "5인"}
            onChange={handleRadioChange} />
            <span>5인 가구 이상</span>
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
  </div>
  )
}

export default Page3Family