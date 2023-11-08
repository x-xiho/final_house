import React from 'react'

import './Mypage.css'

import Hcarousel from './pages/Hcarousel'

function Mypage() {

  const userProfilImage = localStorage.getItem('유저 프로필 사진');
  const userName = localStorage.getItem('name');

  return (
    <div className='Mypage-container'>
      {/* <img src={Logo} alt="로고" className="Mypage-img" style={{ width: "40px" }}></img> */}
      <div className='Mypage-wrap'>
        <hr className='Mypage-hr' />
        <hr className='Mypage-hr' />

        <div className='Mypage-account'>
          <img src={userProfilImage} alt="프로필사진" className='Mypage-profileImg'></img>
          <div className='Mypage-account-wrap'>
            {/* <div className='Mypage-account-text'>
              나의 계정 정보
            </div> */}

            <div className='Mypage-account-text'>
              {userName}
              {/* <img src={kakao} alt="카카오계정" style={{ width: "25px" }}></img> */}
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