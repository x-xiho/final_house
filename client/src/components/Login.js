import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import KakaoLogin from 'react-kakao-login';
import './Login.css'

import Logo from './images/logo.png'
import window from './images/circle.png'

function Login(props) {
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
  
        // navigate('/');
        // navigate(-1)
        window.location.replace('/')
  
  
  
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
  <div className='Login-top'>
<div className='Login-top-circle'>로그인</div>
<hr className='Login-top-hr'/>
<div className='Login-top-text'>오직 나를 위한 주거지역</div>
  </div>
  <hr style={{width:"99vw"}}/>


  <div className='Login-middle'>

  <div>
  <img className='Login-middle-logo' src={window} alt="로고"/>
</div>

<div className='Login-middle-click'>한 번의 클릭으로 간편하게 로그인</div>

  <div className='kakaoLoginButton'>
    <KakaoLogin
      token={kakaoClientId}
      onSuccess={kakaoOnSuccess}
      onFail={kakaoOnFailure}
    />
  </div>
  
</div>

  <div className='Login-bottom'>
  <hr style={{width:"99vw"}}/>

  </div>
</div>
  )
}

export default Login



// <div id={props.id}>
// <div className='login-container'>
// <div className='login-wrapper'>

//   < img src={Logo} alt="로고"
//   style={{width:"auto", height: "150px", margin:" 30px 20px"}}/>

//   <div className='login-text'> 한 번 클릭으로 간편하게 로그인!</div>
  
//   <hr/>

//   <div className='kakaoLoginButton'>
//     <KakaoLogin
//       token={kakaoClientId}
//       onSuccess={kakaoOnSuccess}
//       onFail={kakaoOnFailure}
//     />
//   </div>

// </div>

// </div>


// </div>