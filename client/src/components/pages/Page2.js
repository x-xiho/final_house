import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Page2() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  const handleCheckboxChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    console.log(value);

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

  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 새로고침 방지
    console.log('ok');

    if (selectedOptions.length > 0) {
      localStorage.setItem('hobby', JSON.stringify(selectedOptions));
      

      if (selectedOptions.includes('운동')) {
        navigate('/myhome/page3');
      }
      else {
        navigate('/myhome/pageEnd');
      }
    }

  }

  return (
    <div>
      <div className='page1-text'>
        <div className='page1-num'>Q.02</div>
        <div className='page1-qurry'>평소 나의 취미는?</div>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          <input type="checkbox"
            name="hobby"
            value="운동"
            onChange={handleCheckboxChange}
            checked={selectedOptions.includes('운동')} />
          운동
        </label>

        <label>
          <input type="checkbox"
            name="hobby"
            value="음악"
            onChange={handleCheckboxChange}
            checked={selectedOptions.includes('음악')} />
          음악
        </label>

        <label>
          <input type="checkbox"
            name="hobby"
            value="미술"
            onChange={handleCheckboxChange}
            checked={selectedOptions.includes('미술')} />
          미술
        </label>

        <label>
          <input type="checkbox"
            name="hobby"
            value="산책"
            onChange={handleCheckboxChange}
            checked={selectedOptions.includes('산책')} />
          산책
        </label>

        {/* <Link to="/myhome/page3"> */}
        <button type='submit'
          disabled={selectedOptions.length === 0}
          className='page2-btn'>
          다음
        </button>
        {/* </Link> */}
      </form>
    </div>
  )
}

export default Page2;
