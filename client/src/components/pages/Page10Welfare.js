import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

// 복지시설
function Page10Welfare() {

  // 사용자의 답변을 저장할 배열
  const [selectedOptions, setSelectedOptions] = useState([]);
  const navigate = useNavigate();

  // 사용자가 체크박스를 선택하면 답변을 selectedOptions 배열에 추가
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
      localStorage.setItem('welfare', JSON.stringify(selectedOptions));
      navigate('/myhome/pagetendency');
    }
  }


  return (
    <div className='page1-container'>
      <div className='page1-text'>
        <div className='page1-num'>Q.10</div>
        <div className='page1-qurry'>나에게 필요한 시설이 있다면?</div>
        <div>( 복수선택 가능 )</div>
      </div>


      <form onSubmit={handleSubmit} className='page1-form'>

        <div className='page-checkStyle'>

          <label className='checkboxStyle'>
            <input type="checkbox"
              name="welfare"
              value="노인복지시설"
              style={{ display: "none" }}
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('노인복지시설')}
              disabled={selectedOptions.includes('필요없음')}
              className='test' />
            <span>노인복지시설</span>
          </label>

          <label className='checkboxStyle'>
            <input type="checkbox"
              name="welfare"
              value="장애인복지시설"
              style={{ display: "none" }}
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('장애인복지시설')}
              disabled={selectedOptions.includes('필요없음')}
              className='test' />
            <span>장애인복지시설</span>
          </label>


          <label className='checkboxStyle'>
            <input type="checkbox"
              name="welfare"
              value="아동복지시설"
              style={{ display: "none" }}
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('아동복지시설')}
              disabled={selectedOptions.includes('필요없음')}
              className='test' />
            <span>아동복지시설</span>
          </label>

          <label className='checkboxStyle'>
            <input type="checkbox"
              name="welfare"
              value="필요없음"
              style={{ display: "none" }}
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('필요없음')}
              disabled={selectedOptions.length > 0 && !selectedOptions.includes('필요없음')}
              className='test' />
            <span>필요없음</span>
          </label>

        </div>
        <div className='Nextbtn'>
          <button className='page1-btn' onClick={() => {
            localStorage.removeItem('공원');
            localStorage.removeItem('미세먼지');
            localStorage.removeItem('소음');
            localStorage.removeItem('풍수해');
            localStorage.removeItem('주택침수');
            navigate('/myhome/pageenv');}}>이전</button>
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

export default Page10Welfare