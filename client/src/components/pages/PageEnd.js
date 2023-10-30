import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import '../PagesCss/PageCss.css'
import axios from 'axios';

import { models } from 'powerbi-client';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

import PowerBI from './PowerBI';

function PageEnd() {
  // 로컬에 저장된 유저 이름을 변수에 저장
  const userName = localStorage.getItem('유저이름');

  // 백엔드에서 받은 추천 지역 데이터 저장
  const [data, setData] = useState([]);

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [get, setGet] = useState(false);

  const navigate = useNavigate();


  //관심목록 하트 클릭 여부
  const [heartClicked1, setHeartClicked1] = useState(false);
  const [heartClicked2, setHeartClicked2] = useState(false);
  const [heartClicked3, setHeartClicked3] = useState(false);

  // 파워비아이 연동 함수
  const powerbibtn = async (name) => {
    const basicFilter = {
      $schema: "http://powerbi.com/product/schema#basic",
      target: {
        table: "도봉구_샘플제작데이터",
        column: "구분"
      },
      operator: "In",
      values: [`${name}`],
      filterType: models.FilterType.BasicFilter
    };

    if (window.report) {
      const pages = await window.report.getPages();
      const page = pages[0]; // 페이지 넘버

      const visuals = await page.getVisuals();
      const visual = visuals[1]; // 시각적 객체 요소 선택

      // console.log('시각적 객체 요소 선택 ', page)
      // console.log('비주얼 찍음 ', visual)
      await visual.setSlicerState({
        filters: [basicFilter]
      });
    }
  }

  // 관심목록에 지역 저장
  const putHeart = (area) => {

    if (area === data.first) {
      axios.put(`http://localhost:4000/users/${userName}/favorites`, { favorites: area })
      console.log("관심목록에 추가할 지역", area)
      setHeartClicked1(!heartClicked1);

    } else if (area === data.second) {
      axios.put(`http://localhost:4000/users/${userName}/favorites`, { favorites: area })
      console.log("관심목록에 추가할 지역", area)
      setHeartClicked2(!heartClicked2);

    } else if (area === data.third) {
      axios.put(`http://localhost:4000/users/${userName}/favorites`, { favorites: area })
      console.log("관심목록에 추가할 지역", area)
      setHeartClicked3(!heartClicked3);
    }

  }

  // 관심목록에서 지역 삭제
  const deleteHeart = (area) => {

    if (area === data.first) {
      axios.delete(`http://localhost:4000/users/${userName}/favorites`, { data: { favorites: area } })
        .then(response => {
          console.log('관심목록에 삭제할 지역', area)
          setHeartClicked1(!heartClicked1);
        })
        .catch(error => {
          console.error('관심목록을 삭제하는 과정에서 오류가 발생했습니다.', error);
        });
    }
    else if (area === data.second) {
      axios.delete(`http://localhost:4000/users/${userName}/favorites`, { data: { favorites: area } })
        .then(response => {
          console.log('관심목록에 삭제할 지역', area)
          setHeartClicked2(!heartClicked2);
        })
        .catch(error => {
          console.error('관심목록을 삭제하는 과정에서 오류가 발생했습니다.', error);
        });
    }
    else if (area === data.third) {
      axios.delete(`http://localhost:4000/users/${userName}/favorites`, { data: { favorites: area } })
        .then(response => {
          console.log('관심목록에 삭제할 지역', area)
          setHeartClicked3(!heartClicked3);
        })
        .catch(error => {
          console.error('관심목록을 삭제하는 과정에서 오류가 발생했습니다.', error);
        });
    }

  }



  ////////////////////////////////////////////////////////////////

  //백엔드에서 지역추천 결과 데이터 받아옴 {1 : 지역, 2: 지역, 3: 지역}
  useEffect(() => {
    if (userName) {
      axios.get(`http://localhost:4000/users/${userName}/locations`)
        .then(response => {
          setData(response.data);

          console.log('백엔드에서 받은 지역추천 결과 데이터', data);
          setGet(!get);
        })

        .catch(error => {
          console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
        });
    }
  }, []);

  // useEffect(() => {
  //   if (userName) {
  //     axios.get(`http://localhost:4000/users/${userName}/location`)
  //       .then(response => {
  //         setData(response.data);
  //         // 객체 타입의 데이터
  //         setGet(!get);
  //       })

  //       .catch(error => {
  //         console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
  //       });
  //   }
  // }, []);


  ////////////////////////////////////////////////////////////////////////////



  return (
    <div className='End-container'>

      <div className='End-powerbi-wrap'>
        <PowerBI />
      </div>

      <div className='End-recommend'>
        <div className='End-recommend-text'>추천결과</div>

        <div className='End-result'>
        {get ?
        <div className='End-recommend-result'>

          <div className="End-recomend-text">

            <button className='End-recommend-btn'
              onClick={() => { powerbibtn('CCTV') }}>
              {/* 함수 속에 들어가는 글자는 추후에 바꾸면 됨 */}

              <div className='End-text-btn'>
                <div className='End-rank'>1위</div>
                <div className='End-first'>{data.location1}</div>
              </div>

              {heartClicked1 ?
                <AiFillHeart onClick={() => deleteHeart(data.location1)} size="30" color="red" className='End-heart' />
                : <AiOutlineHeart onClick={() => putHeart(data.location1)} size="30" color="red" className='End-heart' />}

            </button>

            <button className='End-recommend-btn'
              onClick={() => { powerbibtn('경찰서') }}>

              <div className='End-text-btn'>
                <div className='End-rank'>2위</div>
                <div className='End-first'>{data.location2}</div>
              </div>
              {heartClicked2 ?
                <AiFillHeart onClick={() => deleteHeart(data.location2)} size="30" color="red" className='End-heart' />
                : <AiOutlineHeart onClick={() => putHeart(data.location2)} size="30" color="red" className='End-heart' />}
            </button>

            <button className='End-recommend-btn'
              onClick={() => { powerbibtn('따릉이') }}>
              <div className='End-text-btn'>
                <div className='End-rank'>3위</div>
                <div className='End-first'>{data.location3}</div>
              </div>
              {heartClicked3 ?
                <AiFillHeart onClick={() => deleteHeart(data.location3)} size="30" color="red" className='End-heart' />
                : <AiOutlineHeart onClick={() => putHeart(data.location3)} size="30" color="red" className='End-heart' />}
            </button>

          </div>
          <div>
            {/* 1. 백엔드에 유저 정보 delete 요청하기 2. 설문조사 첫 페이지로 이동하기 */}
            <button onClick={() => { navigate('/myhome/pagesex'); }}> 다시하기 </button>
          </div>
        </div>

        : <div><em>데이터를 불러오는데 실패했습니다.</em></div>}


        </div>
      </div>
    </div>

  )
}
export default PageEnd


// {data.map((item, index) => (
//   <ButtonComponent key={index} value={item} />
// ))}