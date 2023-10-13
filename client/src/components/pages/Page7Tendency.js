import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

// 공통 마지막 질문 성향 질문
function Page7Tendency() {

  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();


  
  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 새로고침 방지

    if (selectedOption !== null) {
      localStorage.setItem('tendency', selectedOption);

      // 로컬에 저장된 값들을 모조리 뽑아옴
      const sex = localStorage.getItem('sex');
      const age = localStorage.getItem('age');
      const hobby = localStorage.getItem('hobby');
      const sports = localStorage.getItem('sports');
      const tendency = localStorage.getItem('tendency');




      // 유저데이터를 한 번에 정리
      const userInfo = {
        sex: sex,
        age: age,
        hobby: hobby,
        sports: sports,
        tendency : tendency
      };

      // const userInfoJSON = JSON.stringify({userInfo});
      // const userInfoJSON = [userInfo];

      console.log("프론트엔드에서 저장된 데이터",userInfo);

      // 백엔드에 유저의 답변 전송
      axios.post('http://localhost:4000/create/userLifiStyle', userInfo)
        .then(response => {
          console.log('데이터 전송 성공:', response);
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

        navigate('/myhome/pageend');
    }
  }


  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div className='page1-container'>
      <div className='page1-text'>
        <div className='page1-num'>Q.07</div>
        <div className='page1-qurry'>나의 성향은?</div>
      </div>

      <form onSubmit={handleSubmit} className='page1-form'>
        <div className='page-radioStyle'>
          <label className='radioStyle'>
            <input type="radio"
              name="tendency"
              value="한적한 도시"
              checked={selectedOption === "한적한 도시"}
              onChange={handleRadioChange} />
            <span>한적한 힐링 도시</span>
          </label>

          <label className='radioStyle'>
            <input type="radio"
              name="tendency"
              value="핫플 도시"
              checked={selectedOption === "핫플 도시"}
              onChange={handleRadioChange} />
            <span>활기찬 핫플 도시</span>
          </label>

          <label className='radioStyle'>
            <input type="radio"
              name="tendency"
              value="자연 지역"
              checked={selectedOption === "자연 지역"}
              onChange={handleRadioChange} />
            <span>자연이 인접한 지역</span>
          </label>

        </div>

        <div className='Nextbtn'>
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