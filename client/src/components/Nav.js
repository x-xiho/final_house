import React, { useEffect, useState } from 'react'
import { Link, Outlet, NavLink  } from 'react-router-dom'
import './Nav.css'
import Logo from './images/200pxLogo.png'

import Login from './Login'
import Myhome from './Myhome'

function Nav() {
  const [userLogin, setUserLogin] = useState(true)

// 로그인 여부 확인
  useEffect(() => {
    const userState = localStorage.getItem('유저이름')
    if (userState) {
      setUserLogin(true)
      console.log(`${userState}라는 유저가 로그인 된 상태임`)
    }
    else {
      setUserLogin(false)
      console.log(userState)
    }
  }, [])

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
        <li className='li__nav' onClick={()=>{localStorage.clear(); setUserLogin(false)}}><NavLink to="/" style={{textDecoration:"none", color:"gray"}}>로그아웃</NavLink></li>
      </ul>

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