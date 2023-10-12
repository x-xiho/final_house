import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import KakaoLogin from 'react-kakao-login';
import './Login.css'

import logo from './images/200pxLogo.png';
import circle from './images/circle.png';

import { RiKeyLine } from "react-icons/ri"


function Login() {
  const [userInfo, setUserInfo] = useState(null);
  const navigate = useNavigate();
  const kakaoClientId = 'b535697fff731c109ba78a0f414a5d04';

    // 로그인 성공 시 호출되는 콜백 함수
    const kakaoOnSuccess = async (data) => {
      // console.log(data);
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
        console.log(userData.properties.nickname);
        localStorage.setItem('유저아이디', userData.id);
        localStorage.setItem('유저이름', userData.properties.nickname);

        // window.location.replace('/')
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

<div className='Login-arch'>

<Link to='/' className='Login-link'>
<img src={logo} alt="로고" className='Login-logo'/>
</Link>

<hr className='Login-hr1'/>

<div className='Login-circle'>
<div className='Login-circle-side'>
<img src={circle} alt="창문사진" className='Login-circle-img'/>
</div>

</div>

<div className='Login-key'>
<RiKeyLine className="Login-key-icos" color="gray" rotate="80" size="30"/>
</div>


<div className='Login-text'>


<hr className='Login-text-hr'/>
<div className='Login-main-text'>나를 위한 주거지역</div>
<hr className='Login-text-hr'/>
<div className='Login-side-text'>한 번의 클릭으로 간편하게 로그인</div>

</div>

{/* 로그인 버튼 */}
  <div className='Login-kakao'>
    <KakaoLogin
      token={kakaoClientId}
      onSuccess={kakaoOnSuccess}
      onFail={kakaoOnFailure}
      className='kakao'
    />
  </div>

  </div>
  </div>

  )
}

export default Login;