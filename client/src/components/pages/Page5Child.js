import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Page5Child() {
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
      localStorage.setItem('child', JSON.stringify(selectedOptions));
      navigate('/myhome/pagehobby');
    }
  }

  return (
    <div className='page1-container'>
    <div className='page1-text'>
      <div className='page1-num'>Q.05</div>
      <div className='page1-qurry'>나의 자녀는?</div>
      <div>( 복수선택 가능 )</div>
    </div>

    <form onSubmit={handleSubmit} className='page1-form'>
      <div className='page-checkStyle'>

      <label className='checkboxStyle'>
            <input type="checkbox"
              name="child"
              value="없음"
              style={{ display: "none" }}
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('없음')}
              disabled={selectedOptions.length > 0 && !selectedOptions.includes('없음')}
              className='test' />
            <span>없음</span>
          </label>


          <label className='checkboxStyle'>
            <input type="checkbox"
              name="child"
              value="미취학아동"
              style={{ display: "none" }}
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('미취학아동')}
              disabled={selectedOptions.includes('없음')}
              className='test' />
            <span>미취학아동</span>
          </label>

          <label className='checkboxStyle'>
            <input type="checkbox"
              name="child"
              value="초등학교"
              style={{ display: "none" }}
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('초등학교')}
              disabled={selectedOptions.includes('없음')}
              className='test' />
            <span>초등학교</span>
          </label>

          <label className='checkboxStyle'>
            <input type="checkbox"
              name="child"
              value="중학교"
              style={{ display: "none" }}
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('중학교')}
              disabled={selectedOptions.includes('없음')}
              className='test' />
            <span>중학교</span>
          </label>

          <label className='checkboxStyle'>
            <input type="checkbox"
              name="child"
              value="고등학교"
              style={{ display: "none" }}
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('고등학교')}
              disabled={selectedOptions.includes('없음')}
              className='test' />
            <span>고등학교</span>
          </label>

          <label className='checkboxStyle'>
            <input type="checkbox"
              name="child"
              value="특수학교"
              style={{ display: "none" }}
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('특수학교')}
              disabled={selectedOptions.includes('없음')}
              className='test' />
            <span>특수학교</span>
          </label>

      </div>

      <div className='Nextbtn'>
      <button className='page1-btn' onClick={()=>navigate('/myhome/pagemarry')}>이전</button>
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

export default Page5Child