const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors()); //cors 허용

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

////////////////////////////////


const UserInfo = []; // 유저데이터 임시 저장 배열
const recommendResult = [{
  first : "강남구",
  second : "서대문구",
  third : "종로구",
}]; // 임시 추천결과 저장 배열

const backendHeartList = ['강남구', '도봉구','노원구','중구','서대문구']; // (임시) 유저의 관심목록 저장
// 배열로 저장해도 되는지? json으로 해야하는지? 

/////////////////////////////////////////


// 프론트에서 유저 데이터 달라고하면 백엔드에서 보내줌
app.get('/deliver/UserInfo', function (req, res) {
  res.json(UserInfo);
});



// 프론트에서 보낸 유저의 설문조사 결과 값
app.post('/create/userLifiStyle', (req, res) => {
  const userInfo = req.body; // JSON 데이터 파싱
  
  console.log('Received Data:', userInfo);

  const sex = userInfo.sex;
  const age = userInfo.age;
  const hobby = userInfo.hobby;
  const sports = userInfo.sports;
  const tendency = userInfo.tendency;

  console.log(userInfo.hobby);

  res.send('데이터가 성공적으로 저장되었습니다.');
});



// 지역추천 알로리즘 결과를 프론트에 보내줌
app.get('/deliver/recommendResult', function (req, res) {
  res.json(recommendResult);
});


// 프론트에서 보낸 관심목록을 데이터 백엔드에 저장
app.post('/saveHeartList', (req, res) => {
  const heartList = req.body.heartList;
  backendHeartList = heartList;

  console.log('현재 저장된 데이터:', backendHeartList);

  res.send({ message: '데이터를 성공적으로 저장했습니다.' });
});


// 백엔드에 저장된 heartList를 프론트엔드에 전송
app.get('/deliver/heartList', (req, res) => {
  res.send(backendHeartList);
  console.log('관심지역 목록 데이터전송')
});


app.listen(4000, () => console.log('켜졌다!'))