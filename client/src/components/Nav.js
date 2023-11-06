import React, { useEffect, useState } from 'react'
import { Link, Outlet, NavLink  } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import KakaoLogin from 'react-kakao-login';

import './Nav.css'
import Logo from './images/200pxLogo.png'

import Login from './Login'
import Myhome from './Myhome'

function Nav() {
  const [userLogin, setUserLogin] = useState(true)
  const navigate = useNavigate();

// 로그인 여부 확인
  useEffect(() => {
    const userState = localStorage.getItem('name')
    if (userState) {
      setUserLogin(true)
      console.log(`${userState}라는 유저가 로그인 된 상태임`)
    }
    else {
      setUserLogin(false)
      console.log(userState)
    }
  }, [])

  // const handleKakaoLogout = () => {
  //   // 카카오 로그아웃 API 호출
  //   window.Kakao.Auth.logout(function() {
  //     console.log('Successfully logged out of Kakao.');
  //     // 로컬 스토리지에서 사용자 정보 제거 등 로그아웃 후 처리할 작업을 추가할 수 있습니다.
  //   });
  // };

  return (
    <div className='nav-container'>

      <nav className='nav-main'>

        <ul className='ul__first'>
          <li id="logo">
            <Link to='/'><img src={Logo} alt="로고" className='Nav-logo'></img></Link>
            {/* 로고 들어갈 자리 */}
          </li>
        </ul>

{ userLogin ?    
        <ul className='ul__second'>
        <li className='li__nav'><NavLink to="myhome">맞춤지역추천</NavLink></li>
        <li className='li__nav'><NavLink to="mypage">마이페이지</NavLink></li>
        <li className='li__nav' onClick={()=>{ localStorage.clear(); setUserLogin(false); navigate('/')}}><NavLink to="/" style={{textDecoration:"none", color:"gray"}}>로그아웃</NavLink></li>
      </ul>
// handleKakaoLogout();
        :

        <ul className='ul__second'>
          <li className='li__nav'><NavLink to="myhome">맞춤지역추천</NavLink></li>
          <li className='li__nav'><NavLink to="login">로그인</NavLink></li>
        </ul>

}


      </nav>


      <div className='nav-content'>
        <Outlet/>
      </div>

    </div>
  )
}

export default Nav