import React from 'react'

function Hcard() {

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


  // 백엔드로부터 관심목록 받아서 map으로 뿌리기
  return (
    <div className='Card-container'>

      <div className='Card-title'>
        {props.title}
      </div>

      <div className='Card-region'>
        {props.region}
      </div>

      <hr className='Card-hr' />

      <div className='Card-hash'>
        {props.hash}
      </div>

    </div>
  )
}

export default Hcard

// 예시코드
{/* <div className="App">
<Slider {...settings}>
  {dataDigitalBestSeller.map((item) => (
    <div className="card">
      <div className="card-top">
        <img
          src={
            defaultImage[item.title] === item.title
              ? defaultImage.linkDefault
              : item.linkImg
          }
          alt={item.title}
          onError={handleErrorImage}
        />
        <h1>{item.title}</h1>
      </div>
      <div className="card-bottom">
        <h3>{item.price}</h3>
        <span className="category">{item.category}</span>
      </div>
    </div>
  ))}
</Slider>
</div> */}