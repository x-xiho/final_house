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
  const [get, setGet] = useState(false);

  const navigate = useNavigate();


  // 백엔드로부터 관심목록 받아옴
  // const [heartTest, setHeartTest] = useState([]);
  // const [heartList, setheartList] = useState([]);

  //관심목록 하트 클릭 여부
  const [heartClicked1, setHeartClicked1] = useState(false);
  const [heartClicked2, setHeartClicked2] = useState(false);
  const [heartClicked3, setHeartClicked3] = useState(false);

  // const [heartClicked, setHeartClicked] = useState(false);
  // 지워도 될듯


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
      axios.put(`http://localhost:4000/users/${userName}/favorites`, { favorites : area})
      console.log("관심목록에 추가할 지역", area)
      setHeartClicked1(!heartClicked1);

    } else if (area === data.second) {
      axios.put(`http://localhost:4000/users/${userName}/favorites`, { favorites : area})
      console.log("관심목록에 추가할 지역", area)
      setHeartClicked2(!heartClicked2);

    } else if (area === data.third) {
      axios.put(`http://localhost:4000/users/${userName}/favorites`, { favorites : area})
      console.log("관심목록에 추가할 지역", area)
      setHeartClicked3(!heartClicked3);
    }

  }

  // 관심목록에서 지역 삭제
  const deleteHeart = (area) => {

    if (area === data.first) {
      axios.delete(`http://localhost:4000/users/${userName}/favorites`,{data : { favorites : area}})
        .then(response => {
          console.log('관심목록에 삭제할 지역', area)
          setHeartClicked1(!heartClicked1);
        })
      .catch(error => {
          console.error('관심목록을 삭제하는 과정에서 오류가 발생했습니다.', error);
        });
    } 
    else if (area === data.second) {
      axios.delete(`http://localhost:4000/users/${userName}/favorites`, {data : { favorites : area}})
        .then(response => {
          console.log('관심목록에 삭제할 지역', area)
          setHeartClicked2(!heartClicked2);
        })
      .catch(error => {
          console.error('관심목록을 삭제하는 과정에서 오류가 발생했습니다.', error);
        });
    } 
    else if (area === data.third) {
      axios.delete(`http://localhost:4000/users/${userName}/favorites`, {data : { favorites : area}})
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
          // 객체 타입의 데이터
          setGet(!get);
        })

        .catch(error => {
          console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
        });
    }
  }, []);


  // 백엔드로부터 초기 관심목록 받기
  // useEffect(() => {
  //   axios.get('http://localhost:4000/heartList')
  //     .then(response => {
  //       setHeartTest(response.data)
  //       console.log("백엔드로부터 받은 관심목록 리스트", heartList)
  //     })

  //     .catch(error => {
  //       console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
  //     });
  // }, []);


  // 로컬스토리지에 저장된 관심목록을 불러옴
  // 수정이 필요함
  // useEffect(() => {
  //   const heartList = JSON.parse(localStorage.getItem('heartList')) || [];

  //   if (data.length > 0) {
  //     const heartStates = data.map(item => heartList.includes(item.first));
  //     setHeartClicked(heartStates);
  //   }
  // }, [data]);

  ////////////////////////////////////////////////////////////////////////////


  return (

    <div className='End-container'>
      <div className='End-recommend'>

        {/* 백엔드로부터 지역추천결과를 받았으면 get = true */}
        {get ?
          <div className='End-recommend-result'>
            <div className='End-recommend-result-text'>추천 결과</div>

            <div className="End-recomend-text">

              <button className='End-recommend-btn'
                onClick={() => { powerbibtn('CCTV') }}>
                {/* 함수 속에 들어가는 글자는 추후에 바꾸면 됨 */}

                <div className='End-text-btn'>
                  <div className='End-rank'>1위</div>
                  <div className='End-first'>{data.first}</div>
                </div>

                {heartClicked1 ?
                  <AiFillHeart onClick={() => deleteHeart(data.first)} size="30" color="red" className='End-heart' />
                  : <AiOutlineHeart onClick={() => putHeart(data.first)} size="30" color="red" className='End-heart' />}

              </button>

              <button className='End-recommend-btn'
                onClick={() => { powerbibtn('경찰서') }}>

                <div className='End-text-btn'>
                  <div className='End-rank'>2위</div>
                  <div className='End-first'>{data.second}</div>
                </div>
                {heartClicked2 ?
                  <AiFillHeart onClick={() => deleteHeart(data.second)} size="30" color="red" className='End-heart' />
                  : <AiOutlineHeart onClick={() => putHeart(data.second)} size="30" color="red" className='End-heart' />}
              </button>

              <button className='End-recommend-btn'
                onClick={() => { powerbibtn('따릉이') }}>
                <div className='End-text-btn'>
                  <div className='End-rank'>3위</div>
                  <div className='End-first'>{data.third}</div>
                </div>
                {heartClicked3 ?
                  <AiFillHeart onClick={() => deleteHeart(data.third)} size="30" color="red" className='End-heart' />
                  : <AiOutlineHeart onClick={() => putHeart(data.third)} size="30" color="red" className='End-heart' />}
              </button>

            </div>
            <div>
              {/* 1. 백엔드에 유저 정보 delete 요청하기 2. 설문조사 첫 페이지로 이동하기 */}
              <button onClick={() => { navigate('/myhome/pagesex'); }}> 다시하기 </button>
            </div>
          </div>

          : <div><em>데이터를 불러오는데 실패했습니다.</em></div>}



        {/* 파워비아이 적용하기 */}
        <div className='End-powerbi'>
          {/* <Powerbitest /> */}
          <PowerBI />
        </div>

      </div>
    </div>
  )
}
export default PageEnd


// {get ?
//   <div className='End-recommend-result'>
//     <div className='End-recommend-result-text'>추천 결과</div>
//     {data.map((item, index) => (
//       <div className="End-recomend-text" key={index}>



//         <button className='End-recommend-text-1'
//           onClick={() => { powerbibtn(item.first) }}>
//           <div className='End-1'>1위</div>
//           {item.first}

//           {heartClicked1 ?
//             <AiFillHeart onClick={() => handleHeart1(item.first)} size="30" color="red" />
//             : <AiOutlineHeart onClick={() => handleHeart1(item.first)} size="30" color="red" />}
//         </button>


//         {/* 2등 지역 */}
//         <button className='End-recommend-text-1'
//           onClick={() => powerbibtn(item.second)}>
//           <div className='End-1'>2위</div>
//           {item.second}
//           {heartClicked2 ?
//             <AiFillHeart onClick={() => handleHeart2(item.second)} size="30" color="red" />
//             : <AiOutlineHeart onClick={() => handleHeart2(item.second)} size="30" color="red" />}
//         </button>


//         {/* 3등 지역 */}
//         <button className='End-recommend-text-1'
//           onClick={() => powerbibtn(item.third)}>
//           <div className='End-1'>3위</div>
//           {item.third}
//           {heartClicked3 ?
//             <AiFillHeart onClick={() => handleHeart3(item.third)} size="30" color="red" />
//             : <AiOutlineHeart onClick={() => handleHeart3(item.third)} size="30" color="red" />}
//         </button>
//       </div>
//     ))}
//   </div>
//   : <div><em>데이터를 불러오는데 실패했습니다.</em></div>}


// const handleHeart1 = (area) => {
//   setHeartClicked1(!heartClicked1);

//   const heartList = JSON.parse(localStorage.getItem('heartList')) || [];

//   if (heartList.includes(area)) {
//     alert(`${area}를 관심목록에서 삭제했습니다.`);
//     const updatedList = heartList.filter(item => item !== area);
//     localStorage.setItem('heartList', JSON.stringify(updatedList));
//   } else {
//     alert(`${area}를 관심목록에 추가했습니다.`);
//     heartList.push(area);
//     localStorage.setItem('heartList', JSON.stringify(heartList));
//   }
// }