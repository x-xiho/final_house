import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import '../PagesCss/PageCss.css'
import axios from 'axios';

import { models } from 'powerbi-client';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { MdOutlineReplay } from "react-icons/md"

import PowerBI from './PowerBI';
// import Powerbitest from './Powerbitest';

function PageEnd() {
  // 로컬에 저장된 유저 이름을 변수에 저장
  const userName = localStorage.getItem('name');

  // const [button1, setButton1] = useState(false);
  // const [button2, setButton2] = useState(false);
  // const [button3, setButton3] = useState(false);


  // 백엔드에서 받은 추천 지역 데이터 저장
  const [data, setData] = useState([]);

  const [get, setGet] = useState(false);

  const navigate = useNavigate();

  // 파워비아이 대시보드용 변수
  // const seoulData = {
  //   "종로구": 1, "중구": 2, "용산구": 3, "성동구": 4, "광진구": 5, "동대문구": 6, "중랑구": 7, "성북구": 8,
  //   "강북구": 9, "도봉구": 10, "노원구": 11, "은평구": 12, "서대문구": 13, "마포구": 14, "양천구": 15, "강서구": 16,
  //   "구로구": 17, "금천구": 18, "영등포구": 19, "동작구": 20, "관악구": 21, "서초구": 22, "강남구": 23, "송파구": 24,
  //   "강동구": 25
  // };

  const seoulData = {
    "종로구": "역사와 전통이 어우러진 지역",
    "중구": "도심 속의 상업 및 문화 중심지",
    "용산구": "서울의 중심지로서 다양한 문화 시설이 위치",
    "성동구": "도시재생 및 문화예술 중심",
    "광진구": "문화와 산업이 공존하는 지역",
    "동대문구": "역사적인 유적지와 쇼핑의 중심",
    "중랑구": "생활 편의시설이 잘 갖춰진 안전한 지역",
    "성북구": "자연환경이 우수한 지역",
    "강북구": "자연경관이 아름다운 도시",
    "도봉구": "편안한 주거환경과 공원이 많은 지역",
    "노원구": "주택가와 자연이 조화로운 도시",
    "은평구": "자연과 문화가 공존하는 지역",
    "서대문구": "역사적인 명소와 문화 시설이 풍부한 지역",
    "마포구": "예술과 엔터테인먼트가 활발한 도시",
    "양천구": "녹지와 상업지구가 조화로운 도시",
    "강서구": "공원과 강이 어우러진 깨끗한 도시",
    "구로구": "산업 및 상업 중심지",
    "금천구": "경제와 기업이 발전한 도시",
    "영등포구": "상업지구와 강이 어우러진 도시",
    "동작구": "쇼핑과 맛집이 많은 안전한 도시",
    "관악구": "문화와 대학이 살아 숨쉬는 도시",
    "서초구": "상업과 주거가 어우러진 도시",
    "강남구": "상업 및 엔터테인먼트 중심지",
    "송파구": "공원과 물이 어우러진 도시",
    "강동구": "평화로운 주거환경과 산책로가 많은 도시"
  };


  //관심목록 하트 클릭 여부
  const [heartClicked1, setHeartClicked1] = useState(false);
  const [heartClicked2, setHeartClicked2] = useState(false);
  const [heartClicked3, setHeartClicked3] = useState(false);

  // 순위 버튼 클릭 변수
  const [activeButton, setActiveButton] = useState(null);

  // 버튼 클릭 상태
  const handleButtonClick = (buttonId) => {
    setActiveButton(buttonId);
  };


  // 파워비아이 연동 함수
  const powerbibtn = async (name) => {
    // window.location.reload();
    // console.log("선택한 지역 이름", name)
    // console.log('파워비아이 연동 함수 실행됨 ds', typeof name);

    const basicFilter = {
      $schema: "http://powerbi.com/product/schema#basic",
      target: {
        table: "데이터통합",
        column: "자치구"
      },
      operator: "In",
      values: [`${name}`],
      filterType: models.FilterType.BasicFilter
    };

    try {
      if (window.report) {
        console.log('파워비아이 연동 함수 실행됨 if', typeof name);
        const pages = await window.report.getPages();
        const page = pages[0]; // 페이지 넘버

        console.log('페이지 찍음 ', page);

        const visuals = await page.getVisuals();
        const visual = visuals[1]; // 시각적 객체 요소 선택

        console.log('비주얼 찍음 ', visual);

        await visual.setSlicerState({
          filters: [basicFilter]
        });
      }
    } catch (error) {
      console.error('powerbibtn 함수에서 에러가 났습니다', error);
    }
  };


  // 파워비아이 페이지
  // const powerbibtn2 = async (name, pageNumber) => {

  //   const basicFilter = {
  //     $schema: "http://powerbi.com/product/schema#basic",
  //     target: {
  //       table: "데이터통합",
  //       column: "자치구"
  //     },
  //     operator: "In",
  //     values: [`${name}`],
  //     filterType: models.FilterType.BasicFilter
  //   };

  //   try {
  //     if (window.report) {
  //       const pages = await window.report.getPages();
  //       // const page = pages[pageNumber - 1]; // 페이지 넘버
  //       const page = pages[pageNumber]

  //       if (page) {
  //         await page.setActive();
  //         // 테스트할 땐 지우기
  //         const visuals = await page.getVisuals();
  //         const visual = visuals[1]; // 시각적 객체 요소 선택

  //         await visual.setSlicerState({
  //           filters: [basicFilter]
  //         });
  //       } else {
  //         console.error(`페이지 ${pageNumber}를 찾을 수 없습니다.`);
  //       }
  //     }
  //   } catch (error) {
  //     console.error('파워비아이 연동 중 오류가 발생했습니다.', error);
  //   }
  // };


  // 관심목록에 지역 저장
  const putHeart = (areas) => {

    if (areas === data.location1) {
      axios.put(`http://localhost:4000/users/${userName}/favorites/${areas}`, { name: userName, favorites: areas })
      console.log("관심목록에 추가할 지역", areas)
      setHeartClicked1(!heartClicked1);

    } else if (areas === data.location2) {
      axios.put(`http://localhost:4000/users/${userName}/favorites/${areas}`, { name: userName, favorites: areas })
      console.log("관심목록에 추가할 지역", areas)
      setHeartClicked2(!heartClicked2);

    } else if (areas === data.location3) {
      axios.put(`http://localhost:4000/users/${userName}/favorites/${areas}`, { name: userName, favorites: areas })
      console.log("관심목록에 추가할 지역", areas)
      setHeartClicked3(!heartClicked3);
    }
  }

  // 관심목록에서 지역 삭제
  const deleteHeart = (area) => {

    if (area === data.location1) {
      axios.delete(`http://localhost:4000/users/${userName}/favorites/${area}`, { data: { name: userName, favorites: area } })
        .then(response => {
          console.log('관심목록에 삭제할 지역', area)
          setHeartClicked1(!heartClicked1);
        })
        .catch(error => {
          console.error('관심목록을 삭제하는 과정에서 오류가 발생했습니다.', error);
        });
    }
    else if (area === data.location2) {
      axios.delete(`http://localhost:4000/users/${userName}/favorites/${area}`, { data: { name: userName, favorites: area } })
        .then(response => {
          console.log('관심목록에 삭제할 지역', area)
          setHeartClicked2(!heartClicked2);
        })
        .catch(error => {
          console.error('관심목록을 삭제하는 과정에서 오류가 발생했습니다.', error);
        });
    }
    else if (area === data.location3) {
      axios.delete(`http://localhost:4000/users/${userName}/favorites/${area}`, { data: { name: userName, favorites: area } })
        .then(response => {
          console.log('관심목록에 삭제할 지역', area)
          setHeartClicked3(!heartClicked3);
        })
        .catch(error => {
          console.error('관심목록을 삭제하는 과정에서 오류가 발생했습니다.', error);
        });
    }
  }

  // 다시하기
  const reset = () => {
    const confirmed = window.confirm('라이프스타일 테스트를 처음부터 다시 시작하시겠습니까?');

    // 사용자가 "예"를 눌렀을 때의 동작
    if (confirmed) {
      axios.delete(`http://localhost:4000/users/${userName}`, { data: { name: userName } })
        .then(response => {
          console.log('다시 시작')
          navigate('/myhome/pagesex');
        })
        .catch(error => {
          console.error('다시 시작하는 과정에서 오류발생.', error);
        });
      console.log("삭제되었습니다.");
    }

    else {
      // 사용자가 "아니요"를 눌렀을 때의 동작
      console.log("취소되었습니다.");
    }
  }

  ////////////////////////////////////////////////////////////////

  //백엔드에서 지역추천 결과 데이터 받아옴 {1 : 지역, 2: 지역, 3: 지역}

  // useEffect(() => {
  //   if (userName) {
  //     axios.get(`http://localhost:4000/users/${userName}/locations`)
  //       .then(response => {
  //         setData(response.data);
  //         powerbibtn(response.data.location1);
  //         console.log('백엔드에서 받은 지역추천 결과 데이터', data);
  //         setGet(!get);
  //       })
  //       .catch(error => {
  //         console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
  //       });

  //     // if (refresh) {
  //     //   // 새로고침 코드 또는 다른 작업
  //     //   // window.location.reload();

  //     //   // 새로고침 후에는 다시 refresh 상태값을 false로 설정
  //     //   setRefresh(false);
  //     //   console.log('새로고침', refresh);
  //     // }
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userName) {
          const response = await axios.get(`http://localhost:4000/users/${userName}/locations`);
          setData(response.data);
          powerbibtn(response.data.location1);
          console.log('백엔드에서 받은 지역추천 결과 데이터', data);
          setGet(!get);
        }
      } catch (error) {
        console.error('데이터를 불러오는 중 오류가 발생했습니다.', error);
      }
    };
  
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  ////////////////////////////////////////////////////////////////////////////



  return (
    <div className='End-container'>


      <div className='End-powerbi-wrap'>
        <PowerBI location={data.location1} />
        {/* <Powerbitest /> */}

      </div>

      <div className='End-recommend'>


        <div className='End-recommend-text'>나에게 딱 맞는 주거지역 순위</div>
        <div className='End-recommend-text-sub'>버튼을 눌러 지역에 대한 다양한 정보를 탐색해보세요!</div>
        <div className='End-result'>
          {get ?
            <div className='End-recommend-result'>

              <div className="End-recomend-text">

                <button className={`End-recommend-btn ${activeButton === 1 ? 'End-active' : ''}`}
                  onClick={() => { powerbibtn(data.location1); handleButtonClick(1) }}>

                  <div className='End-text-btn'>

                    <div className='End-rank'>1위</div>
                    <div className='End-first'>{data.location1}</div>
                  </div>

                  {heartClicked1 ?
                    <div className='End-heart-wrap'>
                      <AiFillHeart onClick={() => { deleteHeart(data.location1); }}
                        color="red" size="30" className='End-heart' /></div>
                    : <div className='End-heart-wrap'>
                      <AiOutlineHeart onClick={() => { putHeart(data.location1); }}
                        color="red" size="30" className='End-heart' /></div>}

                </button>

                <div className='End-location-text'>
                  #{seoulData[data.location1]}
                </div>


                {/* {button1 && (
                  <div>
                    <button onClick={() => powerbibtn2(data.location1,1)}>대시보드 보기</button>
                    <button onClick={() => powerbibtn2(data.location2,1)}>지도 보기</button>
                  </div>
                )} */}

                <button className={`End-recommend-btn ${activeButton === 2 ? 'End-active' : ''}`}
                  onClick={() => { powerbibtn(data.location2); handleButtonClick(2) }}>

                  <div className='End-text-btn'>
                    <div className='End-rank'>2위</div>
                    <div className='End-first'>{data.location2}</div>
                  </div>
                  {heartClicked2 ?
                    <div className='End-heart-wrap'>
                      <AiFillHeart onClick={() => deleteHeart(data.location2)} size="30" color="red" className='End-heart' /></div>
                    :
                    <div className='End-heart-wrap'>
                      <AiOutlineHeart onClick={() => putHeart(data.location2)} size="30" color="red" className='End-heart' /></div>}
                </button>

                <div className='End-location-text'>
                  #{seoulData[data.location2]}
                </div>
                {/* 
                 {button2 && (
                  <div>
                    <button >대시보드 보기</button>
                    <button >지도 보기</button>
                  </div>
                )} */}

                <button className={`End-recommend-btn ${activeButton === 3 ? 'End-active' : ''}`}
                  onClick={() => { powerbibtn(data.location3); handleButtonClick(3); }}>
                  <div className='End-text-btn'>
                    <div className='End-rank'>3위</div>
                    <div className='End-first'>{data.location3}</div>
                  </div>
                  {heartClicked3 ?
                    <div className='End-heart-wrap'>
                      <AiFillHeart onClick={() => deleteHeart(data.location3)} size="30" color="red" className='End-heart' /></div>
                    :
                    <div className='End-heart-wrap'>
                      <AiOutlineHeart onClick={() => putHeart(data.location3)} size="30" color="red" className='End-heart' /></div>}
                </button>
                <div className='End-location-text'>
                  #{seoulData[data.location3]}
                </div>
              </div>

            </div>

            : <div><em>데이터를 불러오는데 실패했습니다.</em></div>}


        </div>
        <div className='End-recommend-reset' onClick={() => { reset() }}>
          <div className='Reset-text'>다시하기</div>
          <button
            className='End-recommend-btn-reset'
          ><MdOutlineReplay size={35} color='gray' /></button>
        </div>
      </div>
    </div >

  )
}
export default PageEnd