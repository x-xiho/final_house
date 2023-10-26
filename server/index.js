const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors()); //cors 허용

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

////////////////////////////////


const UserInfo = []; // 유저데이터 임시 저장 배열
const recommendResult = {
  first: "강남구",
  second: "서대문구",
  third: "종로구",
}; // 임시 추천결과 저장 배열

const loacationData = {
  김지호: { locations: { first: "강남구", second: "서대문구", third: "종로구" },
  favorites: []},
  홍길동 : { locations: { first: "도봉구", second: "중구", third: "노원구" },
  favorites: []}
}




///////////////////////////////////////// 


// 프론트엔드에서 백엔드로 보낸 유저의 정보 
app.post('/users', (req, res) => {
  const userInfo = req.body; // JSON 데이터 파싱

  console.log('Received Data:', userInfo);

  const name = userInfo.name;
  const sex = userInfo.sex;
  const age = userInfo.age;
  const hobby = JSON.parse(userInfo.hobby).join(', ');

  if (userInfo.sports !== null) {
    const sports = JSON.parse(userInfo.sports).join(',');
    console.log("운동 종목 값 ", sports);
  }

  const tendency = userInfo.tendency;

  console.log("취미 값", hobby);


  res.send('데이터가 성공적으로 저장되었습니다.');
});



// 지역추천 알로리즘 결과를 프론트에 보내줌
app.get('/users/:name/locations', function (req, res) {
  const { name } = req.params;
  res.json(loacationData[name].locations)
});





// 관심목록 관련 코드 //

// 프론트에서 보낸 관심목록을 백엔드에 저장
app.put('/users/:name/favorites', (req, res) => {
  const { name } = req.params;
  const areaToAdd = req.body.favorites;
  const favorites = loacationData[name].favorites;

  if (!favorites.includes(areaToAdd)) {
    // 중복된 값이 없는 경우에만 추가
    loacationData[name].favorites.push(areaToAdd);

    console.log('프론트엔드로부터 받은 관심목록 데이터', areaToAdd);
    console.log('백엔드에 저장된 관심목록 데이터', loacationData[name].favorites);
    res.send("관심목록을 백엔드로 성공적으로 보냄");
  } else {
    console.log('이미 중복된 값이 존재합니다.');
  }

});

// 프론트에서 보낸 관심목록을 백엔드에서 삭제
app.delete('/users/:name/favorites', (req, res) => {
  const { name } = req.params;
  const areaToDelete = req.body.favorites;


  const favorites = loacationData[name].favorites;
  const updatedFavorites = favorites.filter((item) => item !== areaToDelete);

  console.log("업데이트 콘솔",updatedFavorites)

  loacationData[name].favorites = updatedFavorites;

  console.log('프론트엔드로부터 받은 삭제할 관심목록 데이터', areaToDelete);
  console.log('삭제 후 백엔드에 남은 관심목록 데이터', loacationData[name].favorites);
  res.send("관심목록을 백엔드로 성공적으로 보냄")

});


// 백엔드에 저장된 관심목록 마이페이지에 전송
app.get('/favorites/:name', (req, res) => {
  const { name } = req.params;
  res.send(loacationData[name].favorites);
  console.log('관심지역 목록 데이터전송')
});


app.listen(4000, () => console.log('켜졌다!'))