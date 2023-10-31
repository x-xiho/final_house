import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import KakaoLogin from 'react-kakao-login';
import './Login.css'
import { BiArrowBack } from "react-icons/bi"

import logo from './images/200pxLogo.png';


function Login() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const kakaoClientId = 'b535697fff731c109ba78a0f414a5d04';

  // 로그인 성공 시 호출되는 콜백 함수
  const kakaoOnSuccess = async (data) => {
    const accessToken = data.response.access_token;

    // 카카오 API를 사용하여 사용자 정보 가져오기
    // 사실 그대로 복사한 것이라 무슨 소리인지 모르겠음
    try {
      const response = await fetch('https://kapi.kakao.com/v2/user/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const userData = await response.json();
      setUserInfo(userData);

      // console.log("유저의 프로필 사진", userData.properties.profile_image);
      localStorage.setItem('유저이름', userData.properties.nickname);
      localStorage.setItem('유저 프로필 사진', userData.properties.profile_image);

      // 로그인 이후 메인홈페이지로 이동
      navigate('/');

    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // 로그인 실패 시 호출되는 콜백 함수
  const kakaoOnFailure = (error) => {
    console.error('Kakao login failure:', error);
  };




  return (
    <div className='Login-container'>

      <div className='Login-account-wrap'>
        <div className='Login-account'>

          <div className='Login-account-arrow'>
            <BiArrowBack size="30px" color="white" onClick={() => { navigate('/') }} />
          </div>
            <div className='Login-account-login'>
              로그인
            </div>
        </div>



        <div className='Login-test'>
          <Link to='/'>
            <img src={logo} alt="로고" className='Login-logo' />
          </Link>
        </div>

        <div className='Login-title'>오직 나를 위한 맞춤형 주거지역</div>
        <div className='Login-text'>
          단 한 번의 클릭으로 간편하게 로그인!
        </div>

        <div className='Login-kakao'>
          <KakaoLogin
            token={kakaoClientId}
            onSuccess={kakaoOnSuccess}
            onFail={kakaoOnFailure}
            className='kakao'
          />
        </div>
        <div className='Login-ok'>회원가입 시 <b>서비스 이용 약관</b>과 <b>개인정보 보호정책</b>에 동의하게 됩니다.</div>
      </div>



    </div>
  )
}

export default Login