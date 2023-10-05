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
  second : "중구",
  third : "노원구",
}]; // 임시 추천결과 저장 배열
let backendHeartList = []; // 유저의 관심목록 저장




//// 데이터 이름 고치기!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1002


// 프론트에서 데이터 달라고하면 백엔드에서 보내줌
app.get('/deliver/UserInfo', function (req, res) {
  res.json(UserInfo);
});


// 프론트에서 보낸 유저 데이터 백엔드에 저장
app.post('/save/UserInfo', function (req, res) {
  const { gender, hobby, sports } = req.body;
  const newUserInfo = { gender, hobby, sports };
  
  UserInfo.push(newUserInfo);
  console.log('새로운 데이터가 추가되었습니다:', newUserInfo); // 콘솔에 데이터 출력
  console.log('현재 저장된 데이터:', UserInfo);
  res.json(newUserInfo);
});


// 설문지 끝내고 보내는 지역 순위 결과
app.get('/deliver/recommendResult', function (req, res) {
  res.json(recommendResult);
});

// 프론트에서 보낸 관심목록 데이터 백엔드에 저장
app.post('/saveHeartList', (req, res) => {
  const heartList = req.body.heartList;
  backendHeartList = heartList;

  console.log('현재 저장된 데이터:', backendHeartList);

  res.send({ message: '데이터를 성공적으로 저장했습니다.' });
});


// 백엔드에 저장된 heartList를 클라이언트에 전송
app.get('/deliver/heartList', (req, res) => {
  res.send({ backendHeartList });
  console.log('데이터전송')
});


app.listen(4000, () => console.log('켜졌다!'))