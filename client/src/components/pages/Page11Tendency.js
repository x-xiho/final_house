import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import '../PagesCss/PageCss.css'

// 공통 마지막 질문 성향 질문
function Page11Tendency() {
  // const userName = localStorage.getItem('name');
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 새로고침 방지
    localStorage.setItem('ten', selectedOption);

    if (selectedOption !== null) {

      // key 값 정렬
      const userData = ['name', 'sex', 'age', 'family', 'marry', 'child', 'hobby', 'sports', 'wel', 'ten'];
      const userPreferenceData = ['name', '안전', '생활시설', '교육', '의료', '환경', '교통', '기타'];
      const userCarData = ['name', '자차', '지하철', '시내버스', '광역버스', '기차', '따릉이']
      const userEnvData = ['name', '공원', '미세먼지', '소음', '풍수해']

      // 유저의 설문조사 값이 저장될 변수
      const userInfo = {};
      const userPreferenceInfo = {};
      const userCarInfo = {};
      const userEnvInfo = {};

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

      userCarData.forEach(item => {
        const value = localStorage.getItem(item);
        userCarInfo[item] = value !== null ? value : "0";
      });

      userEnvData.forEach(item => {
        const value = localStorage.getItem(item);
        userEnvInfo[item] = value !== null ? value : "0";
      });

      // 콘솔 확인
      console.log("유저 데이터", userInfo);
      console.log("우선순위 데이터", userPreferenceInfo);
      console.log("교통수단 데이터", userCarInfo);
      console.log("환경 데이터", userEnvInfo);


      // 백엔드에 유저의 답변 전송
      axios.post('http://localhost:4000/users', userInfo)
        .then(response => {
          console.log('데이터 전송 성공:', response);
        })
        .catch(error => {
          console.error('유저 데이터 전송 실패:', error);
        });


      // 백엔드에 우선순위 데이터 전송
      axios.post('http://localhost:4000/rank', userPreferenceInfo)
        .then(response => {
          console.log('우선순위 데이터 전송 성공:', response);
        })
        .catch(error => {
          console.error('우선순위 데이터 전송 실패:', error);
        });

      // 대중교통 데이터 전송
      axios.post('http://localhost:4000/car', userCarInfo)
        .then(response => {
          console.log('대중교통 데이터 전송 성공:', response);
        })
        .catch(error => {
          console.error('교통수단 데이터 전송 실패:', error);
        });

      // 환경 데이터 전송
      axios.post('http://localhost:4000/env', userEnvInfo)
        .then(response => {
          console.log('환경 데이터 전송 성공:', response);
        })
        .catch(error => {
          console.error('환경 데이터 전송 실패:', error);
        });


        // 지역추천받기

      // axios.get(`http://localhost:4000/users/${userName}/locations`)
      //   .then(response => {
      //     console.log(response.data)
      //     console.log('백엔드에서 받은 지역추천 결과 데이터', response.data);

      //     localStorage.setItem('location1', response.data.location1);
      //     localStorage.setItem('location2', response.data.location2);
      //     localStorage.setItem('location3', response.data.location3);
      //   })

      // 로컬스토리지 데이터 지우기
      localStorage.removeItem('sex')
      localStorage.removeItem('age')
      localStorage.removeItem('family')
      localStorage.removeItem('marry')
      localStorage.removeItem('child')
      localStorage.removeItem('hobby')
      localStorage.removeItem('sports')
      localStorage.removeItem('priority')
      localStorage.removeItem('env')
      localStorage.removeItem('wel')
      localStorage.removeItem('ten')

      localStorage.removeItem('안전')
      localStorage.removeItem('생활시설')
      localStorage.removeItem('교육')
      localStorage.removeItem('의료')
      localStorage.removeItem('환경')
      localStorage.removeItem('교통')
      localStorage.removeItem('기타')

      localStorage.removeItem('자차')
      localStorage.removeItem('지하철')
      localStorage.removeItem('시내버스')
      localStorage.removeItem('광역버스')
      localStorage.removeItem('기차')
      localStorage.removeItem('따릉이')
      localStorage.removeItem('없음')

      localStorage.removeItem('공원')
      localStorage.removeItem('미세먼지')
      localStorage.removeItem('소음')
      localStorage.removeItem('풍수해')
      localStorage.removeItem('없음')




      navigate('/myhome/pageend');
    }
  }


  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
  }

  return (
    <div className='page1-container'>
      <div className='page1-text'>
        <div className='page1-num'>Q.11</div>
        <div className='page1-qurry'>나의 성향은?</div>
      </div>

      <form onSubmit={handleSubmit} className='page1-form'>
        <div className='page-radioStyle'>
          <label className='radioStyle'>
            <input type="radio"
              name="tendency"
              value="자연"
              checked={selectedOption === "자연"}
              onChange={handleRadioChange}
              className='tendencyBtn' />
            <span>자연 인접 힐링도시</span>
          </label>

          <label className='radioStyle'>
            <input type="radio"
              name="tendency"
              value="핫플"
              checked={selectedOption === "핫플"}
              onChange={handleRadioChange}
              className='tendencyBtn' />
            <span>도심 속 핫플도시</span>
          </label>

        </div>

        <div className='Nextbtn'>
          <button className='page1-btn' onClick={() => navigate('/myhome/pagewelfare')}>이전</button>
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

export default Page11Tendency