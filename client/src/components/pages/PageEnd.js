import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import '../PagesCss/PageCss.css'
import axios from 'axios';

import { models } from 'powerbi-client';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

import Powerbitest from './Powerbitest';
import PowerBI from './PowerBI';

function PageEnd() {

  // 백엔드에서 받은 추천 지역 데이터 저장
  const [data, setData] = useState([]);
  const [get, setGet] = useState(false);


  // 백엔드로부터 관심목록 받아옴
  const [heartTest, setHeartTest] = useState([]);


  const [heartList, setheartList] = useState([]);

  //관심목록 하트 클릭
  const [heartClicked1, setHeartClicked1] = useState(false);
  const [heartClicked2, setHeartClicked2] = useState(false);
  const [heartClicked3, setHeartClicked3] = useState(false);

  const [heartClicked, setHeartClicked] = useState(false);


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

  // 1등 지역 관심 목록
  const deleteHeart = (area) => {
    axios.delete('http://localhost:4000/heartList', area)
    console.log('삭제할 지역', area)
  }

  const putHeart = (area) => {
    axios.put('http://localhost:4000/heartList', area)
    console.log('추가할 지역', area)
  }

  // 2등 지역 관심 목록
  const handleHeart2 = (area) => {
    setHeartClicked2(!heartClicked2);

    const heartList = JSON.parse(localStorage.getItem('heartList')) || [];

    if (heartList.includes(area)) {
      alert(`${area}를 관심목록에서 삭제했습니다.`);
      const updatedList = heartList.filter(item => item !== area);
      localStorage.setItem('heartList', JSON.stringify(updatedList));
    } else {
      alert(`${area}를 관심목록에 추가했습니다.`);
      heartList.push(area);
      localStorage.setItem('heartList', JSON.stringify(heartList));
    }
  }

  // 3등 지역 관심 목록
  const handleHeart3 = (area) => {
    setHeartClicked3(!heartClicked3);

    const heartList = JSON.parse(localStorage.getItem('heartList')) || [];

    if (heartList.includes(area)) {
      alert(`${area}를 관심목록에서 삭제했습니다.`);
      const updatedList = heartList.filter(item => item !== area);
      localStorage.setItem('heartList', JSON.stringify(updatedList));
    } else {
      alert(`${area}를 관심목록에 추가했습니다.`);
      heartList.push(area);
      localStorage.setItem('heartList', JSON.stringify(heartList));
    }
  }


  ////////////////////////////////////////////////////////////////

  //백엔드에서 지역추천 결과 데이터 받아옴 {1 : 지역, 2: 지역, 3: 지역}
  useEffect(() => {
    axios.get('http://localhost:4000/deliver/recommendResult')
      .then(response => {
        setData(response.data);
        // 객체 타입의 데이터
        setGet(!get);
      })

      .catch(error => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
      });
  }, []);


  // 백엔드로부터 초기 관심목록 받기
  useEffect(() => {
    axios.get('http://localhost:4000/heartList')
      .then(response => {
        setHeartTest(response.data)
        console.log("백엔드로부터 받은 관심목록 리스트", heartList)
      })

      .catch(error => {
        console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
      });
  }, []);


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


  //백엔드에 관심목록 보내기
  // const saveHeartListToBackend = () => {
  //   const heartList = JSON.parse(localStorage.getItem('heartList')) || [];

  //   axios.post('http://localhost:4000/saveHeartList', { heartList })
  //     .then(response => {
  //       console.log('데이터를 서버에 전송했습니다.', response);
  //       alert('데이터 저장성공')
  //     })

  //     .catch(error => {
  //       console.error(' list데이터를 서버에 전송하는 중 오류가 발생했습니다.', error);
  //     });
  // }





  return (

    <div className='End-container'>
      <div className='End-recommend'>

        {/* 백엔드로부터 지역추천결과를 받았으면 true */}
        {get ?
          <div className='End-recommend-result'>
            <div className='End-recommend-result-text'>추천 결과</div>

            <div className="End-recomend-text">

              <button className='End-recommend-btn'
                onClick={() => { powerbibtn('CCTV') }}>
                {/* 함수 속에 들어가는 글자는 추후에 바꾸면 됨 */}

                <div className='End-text-btn'>
                  <div className='End-rank'>1위</div>
                  <div className='End-first'>{data[0].first}</div>
                </div>

                {heartClicked1 ?
                  <AiFillHeart onClick={() => deleteHeart(data[0].first)} size="30" color="red" className='End-heart' />
                  : <AiOutlineHeart onClick={() => putHeart(data[0].first)} size="30" color="red" className='End-heart' />}

              </button>

              <button className='End-recommend-btn'
                onClick={() => { powerbibtn('경찰서') }}>

                <div className='End-text-btn'>
                  <div className='End-rank'>2위</div>
                  <div className='End-first'>{data[0].second}</div>
                </div>
                {heartClicked2 ?
                  <AiFillHeart onClick={() => handleHeart2(data[0].second)} size="30" color="red" className='End-heart' />
                  : <AiOutlineHeart onClick={() => handleHeart2(data[0].second)} size="30" color="red" className='End-heart' />}
              </button>

              <button className='End-recommend-btn'
                onClick={() => { powerbibtn('따릉이') }}>
                <div className='End-text-btn'>
                  <div className='End-rank'>3위</div>
                  <div className='End-first'>{data[0].third}</div>
                </div>
                {heartClicked3 ?
                  <AiFillHeart onClick={() => handleHeart3(data[0].third)} size="30" color="red" className='End-heart' />
                  : <AiOutlineHeart onClick={() => handleHeart3(data[0].third)} size="30" color="red" className='End-heart' />}
              </button>

            </div>
            <div>다시 검사하기</div>
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