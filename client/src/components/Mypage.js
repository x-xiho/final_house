import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

import './Mypage.css'

import Logo from './images/200pxLogo.png'
import kakao from './images/kakaobtn.png'

function Mypage() {

  const [heartdata, setHeartData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/deliver/recommendResult')
      .then(response => {
        setHeartData("백엔드로부터 받은 데이터2",response.data);
      })

      .catch(error => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
      });
  }, [])




  return (
    <div className='Mypage-container'>
      <img src={Logo} alt="로고" className="Mypage-img" style={{ width: "40px" }}></img>
      <div className='Mypage-wrap'>
        <hr className='Mypage-hr'/>
        <hr className='Mypage-hr'/>

        <div className='Mypage-account'>
          <div className='Mypage-account-text'>
            나의 계정 정보 :
          </div>

          <div className='Mypage-account-text'>
            <img src={kakao} alt="카카오계정" style={{ width: "30px" }}></img>
          </div>
        </div>

        <hr className='Mypage-hr'/>
        <hr className='Mypage-hr'/>
      </div>


{/* 
      <div>
        <h3>나의 관심목록</h3>
        {heartdata.length > 0 ? (
          heartdata.map((item, index) => (
            <div key={index}>
              {item} <AiFillHeart />
            </div>
          ))
        ) : (
          <div>관심목록이 없습니다.</div>
        )}
      </div> */}
    </div>
  )
}

export default Mypage