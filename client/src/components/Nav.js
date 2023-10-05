import React from 'react'
import { Link, Outlet, NavLink  } from 'react-router-dom'
import './Nav.css'
import Logo from './images/logo.png'

import Login from './Login'
import Myhome from './Myhome'

function Nav() {
  return (
    <div className='nav-container'>

      <nav className='nav-main'>

        <ul className='ul__first'>
          <li id="logo">
            <Link to='/'>ooo</Link>
          </li>
        </ul>

        <ul className='ul__second'>
          <li className='li__nav'><NavLink to="myhome">맞춤지역추천</NavLink></li>
          <li className='li__nav'><NavLink to="login">로그인</NavLink></li>
        </ul>

      </nav>


      <div className='nav-content'>
        <Outlet/>
      </div>

    </div>
  )
}

export default Nav