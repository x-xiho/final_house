import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Mypage() {

  const [heartdata, setHeartData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/deliver/heartList')
      .then(response => {
        setHeartData(response.data.backendHeartList)
      })

      .catch(error => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
      });
  }, [])

  return (
    <div>
    <div>
      나의 계정정보랑 관심목록 / 아마도 이미지 슬라이더
      이 페이지에서도 관심목록 수정이 가능해야함 = 하트 삭제 기능
      중복된 것은 자동으로 걸러서 보여줘야함
    </div>

    <div>
      <h3>나의 관심목록</h3>
    {heartdata.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}

    </div>
  </div>
  )
}

export default Mypage