import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


// 질문2 연령
function Page2Age() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  // 버튼을 누르면 다음 페이지로 이동하고, 값을 로컬스토리지에 저장
  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 새로고침 방지

    if (selectedOption !== null) {
      localStorage.setItem('age', selectedOption);
      navigate('/myhome/pagefamily');
    }
  }


  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div className='page1-container'>
    <div className='page1-text'>
      <div className='page1-num'>Q.02</div>
      <div className='page1-qurry'>나의 나이는?</div>
    </div>

    <form onSubmit={handleSubmit} className='page1-form'>
      <div className='page-radioStyle'>

        <label className='radioStyle'>
          <input type="radio"
            name="age"
            value="10대"
            checked={selectedOption === "10대"}
            onChange={handleRadioChange} />
            <span>10대</span>
        </label>

        <label className='radioStyle'>
          <input type="radio"
            name="age"
            value="20대"
            checked={selectedOption === "20대"}
            onChange={handleRadioChange} />
            <span>20대</span>
        </label>

        <label className='radioStyle'>
          <input type="radio"
            name="age"
            value="30대"
            checked={selectedOption === "30대"}
            onChange={handleRadioChange} />
            <span>30대</span>
        </label>



        <label className='radioStyle'>
          <input type="radio"
            name="age"
            value="40대"
            checked={selectedOption === "40대"}
            onChange={handleRadioChange} />
            <span>40대</span>
        </label>

        <label className='radioStyle'>
          <input type="radio"
            name="age"
            value="50대"
            checked={selectedOption === "50대"}
            onChange={handleRadioChange} />
            <span>50대</span>
        </label>

      
        <label className='radioStyle'>
          <input type="radio"
            name="age"
            value="60대 이상"
            checked={selectedOption === "60대 이상"}
            onChange={handleRadioChange} />
            <span>60대 이상</span>
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

export default Page2Age