import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Page5Child() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 새로고침 방지

    if (selectedOption !== null) {
      localStorage.setItem('child', selectedOption);
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
      <div className='page1-num'>Q.number</div>
      <div className='page1-qurry'>나의 자식은?</div>
    </div>

    <form onSubmit={handleSubmit} className='page1-form'>
      <div className='page-radioStyle'>
        <label className='radioStyle'>
          <input type="radio"
            name="child"
            value="없음"
            checked={selectedOption === "없음"}
            onChange={handleRadioChange} />
            <span>없음</span>
        </label>

        <label className='radioStyle'>
          <input type="radio"
            name="child"
            value="미취학아동"
            checked={selectedOption === "미취학아동"}
            onChange={handleRadioChange} />
            <span>미취학아동</span>
        </label>

        <label className='radioStyle'>
          <input type="radio"
            name="child"
            value="초등학교"
            checked={selectedOption === "초등학교"}
            onChange={handleRadioChange} />
            <span>초등학교</span>
        </label>

        <label className='radioStyle'>
          <input type="radio"
            name="child"
            value="중학교"
            checked={selectedOption === "중학교"}
            onChange={handleRadioChange} />
            <span>중학교</span>
        </label>

        <label className='radioStyle'>
          <input type="radio"
            name="child"
            value="고등학교"
            checked={selectedOption === "고등학교"}
            onChange={handleRadioChange} />
            <span>고등학교</span>
        </label>

        <label className='radioStyle'>
          <input type="radio"
            name="child"
            value="특수학교"
            checked={selectedOption === "특수학교"}
            onChange={handleRadioChange} />
            <span>특수학교</span>
        </label>

      </div>

      <div className='Nextbtn'>
      <button className='page1-btn' onClick={()=>navigate('/myhome/pagemarry')}>이전</button>
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

export default Page5Child