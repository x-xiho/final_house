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

    axios.post('http://localhost:4000/save/UserInfo', { gender: selectedOption })
      .then((response) => {
        console.log(response.data);
      })

      .catch((error) => {
        console.error(error);
      });
  }




  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div className='page1-container'>
      <div className='page1-text'>
        <div className='page1-num'>Q.01</div>
        <div className='page1-qurry'>나의 성별은?</div>
      </div>

      <form onSubmit={handleSubmit} className='page1-form'>
        <div className='page-radioStyle'>
          <label className='radioStyle'>
            <input type="radio"
              name="gender"
              value="남성"
              checked={selectedOption === "남성"}
              onChange={handleRadioChange} />
              <span>남성</span>
          </label>

          <label className='radioStyle'>
            <input type="radio"
              name="gender"
              value="여성"
              checked={selectedOption === "여성"}
              onChange={handleRadioChange} />
              <span>여성</span>
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

export default Page1