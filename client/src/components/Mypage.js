import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

import './Mypage.css'

function Mypage() {

  const [heartdata, setHeartData] = useState([]);


  // useEffect(() => {
  //   axios.get('http://localhost:4000/deliver/heartList')
  //     .then(response => {
  //       setHeartData(response.data.backendHeartList)
  //     })

  //     .catch(error => {
  //       console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
  //     });
  // }, [])




  return (
    <div className='mypage-container'>

      <div className='mypage-'>
    <div>
나의 계정 정보 :
    </div>
    </div>

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
      </div>
    </div>
  )
}

export default Mypage