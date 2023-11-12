import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'


// 질문5 취미
function Page6Hobby() {
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
      localStorage.setItem('hobby', JSON.stringify(selectedOptions));

      // 운동을 선택했다면 PageSports로, 선택하지 않았다면 PagePriority로 이동
      if (selectedOptions.includes('운동')) {
        navigate('/myhome/pagesports');
      }
      else {
        navigate('/myhome/pagepriority');
      }
    }
  }

  // 미술관 공연장 영화관 운동 공원산책 쇼핑 도서관

  return (
    <div className='page1-container'>
      <div className='page1-text'>
        <div className='page1-num'>Q.06</div>
        <div className='page1-qurry'>평소 나의 취미는?</div>
        <div>( 복수선택 가능 )</div>
      </div>


      <form onSubmit={handleSubmit} className='page1-form'>

        <div className='page-checkStyle'>

          <label className='checkboxStyle'>
            <input type="checkbox"
              name="hobby"
              value="운동"
              style={{ display: "none" }}
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('운동')}
              className='test' />
            <span>운동</span>
          </label>



          <label className='checkboxStyle'>
            <input type="checkbox"
              name="hobby"
              value="공연관람"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('공연관람')} />
            <span>공연 관람</span>
          </label>


          <label className='checkboxStyle'>
            <input type="checkbox"
              name="hobby"
              value="미술"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('미술')} />
            <span>미술/전시 관람</span>
          </label>


          <label className='checkboxStyle'>
            <input type="checkbox"
              name="hobby"
              value="산책"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('산책')} />
            <span>산책</span>
          </label>



          <label className='checkboxStyle'>
            <input type="checkbox"
              name="hobby"
              value="쇼핑"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('쇼핑')} />
            <span>맛집 / 쇼핑</span>
          </label>


          <label className='checkboxStyle'>
            <input type="checkbox"
              name="hobby"
              value="독서"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('독서')} />
            <span>독서</span>
          </label>

          <label className='checkboxStyle'>
            <input type="checkbox"
              name="hobby"
              value="기타"
              onChange={handleCheckboxChange}
              checked={selectedOptions.includes('기타')} />
            <span>기타</span>
          </label>
        </div>

        <div className='Nextbtn'>
          <button className='page1-btn' onClick={() => navigate('/myhome/pagechild')}>이전</button>
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

export default Page6Hobby;