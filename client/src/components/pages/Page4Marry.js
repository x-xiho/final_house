import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Page4Marry() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 새로고침 방지

    if (selectedOption !== null) {
      localStorage.setItem('marry', selectedOption);
      navigate('/myhome/pagehobby');
      // 로컬에 저장하고 다음 질문으로 이동
    }
  }

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
        <div className='page1-container'>
    <div className='page1-text'>
      <div className='page1-num'>Q.04</div>
      <div className='page1-qurry'>나의 혼인여부는?</div>
    </div>

    <form onSubmit={handleSubmit} className='page1-form'>
      <div className='page-radioStyle'>
        <label className='radioStyle'>
          <input type="radio"
            name="marry"
            value="미혼"
            checked={selectedOption === "미혼"}
            onChange={handleRadioChange} />
            <span>미혼</span>
        </label>

        <label className='radioStyle'>
          <input type="radio"
            name="family"
            value="기혼"
            checked={selectedOption === "기혼"}
            onChange={handleRadioChange} />
            <span>기혼</span>
        </label>

        <label className='radioStyle'>
          <input type="radio"
            name="family"
            value="기타"
            checked={selectedOption === "기타"}
            onChange={handleRadioChange} />
            <span>기타</span>
        </label>

      </div>

      <div className='Nextbtn'>
      <button className='page1-btn' onClick={()=>navigate('/myhome/pagefamily')}>이전</button>
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

export default Page4Marry