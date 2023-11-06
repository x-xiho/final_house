import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import '../PagesCss/PageCss.css'

// 공통 마지막 질문 성향 질문
function Page7Tendency() {

  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 새로고침 방지

    if (selectedOption !== null) {
      localStorage.setItem('tendency', selectedOption);


      const userData = ['name', 'sex', 'age', 'child','hobby', 'sports', 'tendency'];
      const userPreferenceData = ['안전', '생활시설', '교육', '의료', '환경', '교통', '기타'];

      const test =localStorage.getItem('name')
      console.log('테스트', test)

      
      // 유저의 설문조사 값이 저장될 변수
      const userInfo = {};
      // 우선순위 데이터가 저장될 변수
      const userPreferenceInfo = {};

      // 로컬스토리지에 저장된 유저의 설문조사 데이터를 userInfo 객체에 저장
      userData.forEach(item => {
        const value = localStorage.getItem(item);
        userInfo[item] = value;
      });

      // 로컬스토리지에 저장된 우선순위 데이터를 userPreferenceInfo 객체에 저장
      userPreferenceData.forEach(item => {
        const value = localStorage.getItem(item);
        userPreferenceInfo[item] = value;
      });

      console.log("프론트엔드에서 저장된 데이터", userInfo);
      console.log("우선순위 데이터", userPreferenceInfo);


      // 백엔드에 유저의 답변 전송
      axios.post('http://localhost:4000/users', userInfo)
        .then(response => {
          console.log('데이터 전송 성공:', response);
        })
        .catch(error => {
          console.error('데이터 전송 실패:', error);
        });

      // 백엔드에 우선순위 데이터 전송
      axios.post('http://localhost:4000/rank', userPreferenceInfo)
        .then(response => {
          console.log('우선순위 데이터 전송 성공:', response);
        })
        .catch(error => {
          console.error('데이터 전송 실패:', error);
        });



      // 로컬스토리지 데이터 지우기
      localStorage.removeItem('sex')
      localStorage.removeItem('age')
      localStorage.removeItem('hobby')
      localStorage.removeItem('sports')
      localStorage.removeItem('tendency')
      localStorage.removeItem('family')
      localStorage.removeItem('marry')
      localStorage.removeItem('priority')

      localStorage.removeItem('안전')
      localStorage.removeItem('생활시설')
      localStorage.removeItem('교육')
      localStorage.removeItem('의료')
      localStorage.removeItem('환경')
      localStorage.removeItem('교통')
      localStorage.removeItem('기타')

      navigate('/myhome/pageend');
    }
  }


  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div className='page1-container'>
      <div className='page1-text'>
        <div className='page1-num'>Q.06</div>
        <div className='page1-qurry'>나의 성향은?</div>
      </div>

      <form onSubmit={handleSubmit} className='page1-form'>
        <div className='page-radioStyle'>
          <label className='radioStyle'>
            <input type="radio"
              name="tendency"
              value="한적한도시"
              checked={selectedOption === "한적한도시"}
              onChange={handleRadioChange} />
            <span>한적한 힐링 도시</span>
          </label>

          <label className='radioStyle'>
            <input type="radio"
              name="tendency"
              value="핫플도시"
              checked={selectedOption === "핫플도시"}
              onChange={handleRadioChange} />
            <span>활기찬 핫플 도시</span>
          </label>

          <label className='radioStyle'>
            <input type="radio"
              name="tendency"
              value="자연지역"
              checked={selectedOption === "자연지역"}
              onChange={handleRadioChange} />
            <span>자연이 인접한 지역</span>
          </label>

        </div>

        <div className='Nextbtn'>
          <button className='page1-btn' onClick={() => navigate('/myhome/pagehobby')}>이전</button>
          <button type='submit'
            disabled={selectedOption === null}
            className='page1-btn'>
            완료
          </button>
        </div>
      </form>
    </div>
  )
}

export default Page7Tendency