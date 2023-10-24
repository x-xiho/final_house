import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

import './Mypage.css'

import Logo from './images/200pxLogo.png'
import kakao from './images/kakaobtn.png'
import Hcarousel from './pages/Hcarousel'

function Mypage() {

  const [heartdata, setHeartData] = useState([]);
  const userProfilImage = localStorage.getItem('유저 프로필 사진');


  return (
    <div className='Mypage-container'>
      <img src={Logo} alt="로고" className="Mypage-img" style={{ width: "40px" }}></img>
      <div className='Mypage-wrap'>
        <hr className='Mypage-hr' />
        <hr className='Mypage-hr' />

        <div className='Mypage-account'>
          <img src={userProfilImage} alt="프로필사진" className='Mypage-profileImg'></img>
          <div className='Mypage-account-wrap'>
          <div className='Mypage-account-text'>
            나의 계정 정보 :
          </div>

          <div className='Mypage-account-text'>
            <img src={kakao} alt="카카오계정" style={{ width: "30px" }}></img>
          </div>
          </div>
        </div>

        <hr className='Mypage-hr' />
        <hr className='Mypage-hr' />
      </div>

      <div className='Mypage-slick'>
        <Hcarousel />
      </div>

    </div>
  )
}

export default Mypage