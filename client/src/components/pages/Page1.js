import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Page1() {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 새로고침 방지


    if (selectedOption !== null) {
      localStorage.setItem('gender', selectedOption);
      navigate('page2');
    }

    axios.post('http://localhost:4000/save/UserInfo', { gender : selectedOption})
    .then((response) => {
      console.log(response.data);
      alert('데이터가 성공적으로 저장');
    })

    .catch((error) => {
      console.error(error);
      alert('데이터 저장 중 오류가 발생');
    });
  }

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div>
      <div className='page1-text'>
        <div className='page1-num'>Q.01</div>
        <div className='page1-qurry'>나의 성별은?</div>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          <input type="radio"
            name="gender"
            value="남성"
            checked={selectedOption === "남성"}
            onChange={handleRadioChange} />남성
        </label>

        <label>
          <input type="radio"
            name="gender"
            value="여성"
            checked={selectedOption === "여성"}
            onChange={handleRadioChange} />여성
        </label>

        <button type='submit'
          disabled={selectedOption === null}
          className='page1-btn'>
          다음</button>
      </form>
    </div>
  )
}

export default Page1