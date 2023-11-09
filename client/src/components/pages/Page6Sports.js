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

  // 위치만 바꾸기

  const handleSubmit = (e) => {
    e.preventDefault(); // 페이지 새로고침 방지

    if (selectedOptions.length > 0) {
      localStorage.setItem('sports', JSON.stringify(selectedOptions));
      navigate('/myhome/pagepriority');
    }
  }

  // 풋살 테니스 탁구 축구 족구 야구 스쿼시 수영 배드민턴 배구 농구 헬스

  return (
    <div className='page1-container'>
      <div className='page1-text'>
        <div className='page1-num'>Q.06-1</div>
        <div className='page1-qurry'>'운동' 중에 내가 가장 좋아하는 종목은?</div>
        <div>( 복수선택 가능 )</div>
      </div>

      <form onSubmit={handleSubmit} className='page1-form'>
        <div className='page-checkStyle'>

          <label className='checkboxStyle aa'>
            <input type="checkbox"
              name="sports"
              value="축구"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('축구')} />
            <span>축구</span>
          </label>

          <label className='checkboxStyle aa'>
            <input type="checkbox"
              name="sports"
              value="족구"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('족구')} />
            <span>족구</span>
          </label>

          <label className='checkboxStyle aa'>
            <input type="checkbox"
              name="sports"
              value="풋살"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('풋살')} />
            <span>풋살</span>
          </label>

          <label className='checkboxStyle bb'>
            <input type="checkbox"
              name="sports"
              value="테니스"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('테니스')} />
            <span>테니스</span>
          </label>

          <label className='checkboxStyle bb'>
            <input type="checkbox"
              name="sports"
              value="배드민턴"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('배드민턴')} />
            <span>배드민턴</span>
          </label>

          <label className='checkboxStyle bb'>
            <input type="checkbox"
              name="sports"
              value="스쿼시"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('스쿼시')} />
            <span>스쿼시</span>
          </label>

          <label className='checkboxStyle cc'>
            <input type="checkbox"
              name="sports"
              value="배구"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('배구')} />
            <span>배구</span>
          </label>

          <label className='checkboxStyle cc'>
            <input type="checkbox"
              name="sports"
              value="농구"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('농구')} />
            <span>농구</span>
          </label>

          <label className='checkboxStyle dd'>
            <input type="checkbox"
              name="sports"
              value="야구"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('야구')} />
            <span>야구</span>
          </label>

          <label className='checkboxStyle dd'>
            <input type="checkbox"
              name="sports"
              value="탁구"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('탁구')} />
            <span>탁구</span>
          </label>

          <label className='checkboxStyle ee'>
            <input type="checkbox"
              name="sports"
              value="헬스"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('헬스')} />
            <span>헬스</span>
          </label>

          <label className='checkboxStyle ee'>
            <input type="checkbox"
              name="sports"
              value="수영"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('수영')} />
            <span>수영</span>
          </label>

          <label className='checkboxStyle ee'>
            <input type="checkbox"
              name="sports"
              value="기타"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('기타')} />
            <span>기타</span>

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
