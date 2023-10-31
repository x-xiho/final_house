import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import '../PagesCss/PageCss.css'

function Page6Sports() {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

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

  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 새로고침 방지

    if (selectedOptions.length > 0) {
      localStorage.setItem('sports', JSON.stringify(selectedOptions));
      navigate('/myhome/pagetendency');
    }
  }

  return (
    <div className='page1-container'>
      <div className='page1-text'>
        <div className='page1-num'>Q.05-2</div>
        <div className='page1-qurry'>'운동' 중에 내가 가장 좋아하는 종목은?</div>
        <div>( 복수선택 가능 )</div>
      </div>

      <form onSubmit={handleSubmit} className='page1-form'>
        <div className='page-checkStyle'>
          <label>
            <input type="checkbox"
              name="sports"
              value="테니스"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('테니스')} />
            테니스
          </label>

          <label>
            <input type="checkbox"
              name="sports"
              value="축구"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('축구')} />
            축구
          </label>

          <label>
            <input type="checkbox"
              name="sports"
              value="볼링"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('볼링')} />
            볼링
          </label>

          <label>
            <input type="checkbox"
              name="sports"
              value="산책"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('산책')} />
            산책
          </label>
        </div>

        <div className='Nextbtn'>
          <button className='page1-btn' onClick={() => navigate('/myhome/pagehobby')}>이전</button>
          <button type='submit'
            disabled={selectedOptions.length === 0}
            className='page1-btn'>
            다음
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page6Sports;
