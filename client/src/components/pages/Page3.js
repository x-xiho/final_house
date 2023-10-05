import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Page3() {
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
      console.log(selectedOptions);
      console.log('값이 저장되었습니다');
      localStorage.setItem('sports', JSON.stringify(selectedOptions));
      navigate('/myhome/pageEnd');
    }
  }

  return (
    <div className='page1-container'>
      <div className='page1-text'>
        <div className='page1-num'>Q.02-1</div>
        <div className='page1-qurry'>'운동' 중에 내가 가장 좋아하는 종목은?</div>
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

      <div  className='Nextbtn'>
          <button type='submit'
            disabled={selectedOptions.length === 0}
            className='Page3-btn'>
            다음
          </button>
          </div>
      </form>
    </div>
  )
}

export default Page3;
