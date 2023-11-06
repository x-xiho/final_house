const { exec } = require("child_process");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const XLSX = require("xlsx");
const PORT = 4000;
const ExcelJS = require('exceljs');
app.use(bodyParser.json())

// ============================ //
// APP 설정
// ============================ //

app.use(cors()); //cors 허용
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.listen(PORT, () => console.log("서버가 시작됐습니다! 포트는", PORT));


const getExcelWorkbook = (name) => {
  try {
    return XLSX.readFile(name); // Excel 파일의 경로
  } catch (error) {
    // 존재하지 않을때
    const data = [
      {
        "name": "김지호",
        "age": "10대",
        "hobby": JSON.stringify(["test"]),
        "sex": "남성",
        "sports": JSON.stringify(["test"]),
        "tendency": "핫플 도시",
        "location1": "강남구",
        "location2": "송파구",
        "location3": "강동구",
        "favorites": "강남구"

      },
    ];
    const workbook = XLSX.utils.book_new(); // 새로운 워크북 생성
    const worksheet = XLSX.utils.json_to_sheet(data); // 데이터로 새로운 시트 생성
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1"); // 워크북에 시트 추가
    XLSX.writeFile(workbook, name); // Excel 파일로 저장
    return XLSX.readFile(name);
  }
};

// ============================ //
// API 정의
// ============================ //

app.get("/api/ping", (req, res) => {
  return res.status(200).json({ "message": "ok" });
});

app.get("/api/survey-result", (req, res) => {

  exec("python3 cd_share.py", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`Python Output: ${stdout}`);
    return res.status(201).json({ "message": "updated well!" });
  });
});


app.post("/users", (req, res) => {
  const { name, age, hobby, sex, sports, tendency, location1, location2, location3 } = req.body;
  console.log(name, age, hobby, sex, sports, tendency, location1, location2, location3);

  const workbook = getExcelWorkbook("survey-result.xlsx");
  const sheetName = workbook.SheetNames[0]; // 첫 번째 시트의 이름
  const worksheet = workbook.Sheets[sheetName]; // 첫 번째 시트
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  const newData = [
    { name, age, hobby, sex, sports, tendency }
  ];
  newData["location1"] = ""; //기본 열 추가로 빈 값 추가하기
  newData["favorite2"] = "";
  newData["favorite3"] = "";

  const updatedData = jsonData.concat(newData);
  const updatedWorkSheet = XLSX.utils.json_to_sheet(updatedData);
  workbook.Sheets[sheetName] = updatedWorkSheet;
  XLSX.writeFile(workbook, "survey-result.xlsx");

  return res.status(201).json({ "message": "created well!" });
});

app.get("/users/:name/locations", (req, res) => {
  const { name } = req.params;
  const workbook = getExcelWorkbook("survey-result.xlsx");
  const sheetName = workbook.SheetNames[0]; // 첫 번째 시트의 이름
  const worksheet = workbook.Sheets[sheetName]; // 첫 번째 시트
  const jsonData = XLSX.utils.sheet_to_json(worksheet);
  let userData = null;
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i]["name"] === name) {


      const location1 = jsonData[i]["location1"];
      const location2 = jsonData[i]["location2"];
      const location3 = jsonData[i]["location3"];

      userData = ({ location1, location2, location3 });
      break;
    }
  }
  if (userData) {
    return res.status(200).json(userData);
  } else {
    return res.status(404).json({ error: "사용자를 찾을 수 없습니다." });
  }
});


app.delete("/users/:name", (req, res) => {
  const targetName = req.params.name; // 사용자 이름을 가져옵니다.
  const excelFilePath = 'survey-result.xlsx';

  const workbook = getExcelWorkbook(excelFilePath);
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  // 사용자 이름이 "김효정"인 사용자 찾기
  let indexToDelete = -1;
  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i]["name"] === targetName) {
      indexToDelete = i;
      break;
    }
  }

  if (indexToDelete !== -1) {
    // 해당 사용자를 삭제
    jsonData.splice(indexToDelete, 1);

    // 업데이트된 데이터를 Excel 시트에 쓰기
    const updatedWorksheet = XLSX.utils.json_to_sheet(updatedWorksheet);
    workbook.Sheets[sheetName] = updatedWorksheet;

    // 업데이트된 Excel 파일 저장
    XLSX.writeFile(workbook, excelFilePath);

    return res.status(200).json({ result: "사용자 삭제 성공" });
  } else {
    return res.status(404).json({ error: "사용자를 찾을 수 없습니다." });
  }
});
// const favorites = [];
// app.put('/users/:name/favorites', (req, res) => {

//   const areas = req.body.favorites; // 관심 목록을 배열로 받음
//   const userName = req.params.name;
//   console.log('areas:', areas);

//   const workbook = getExcelWorkbook("survey-result.xlsx");
//   const sheetName = workbook.SheetNames[0]; // 첫 번째 시트의 이름
//   const worksheet = workbook.Sheets[sheetName]; // 첫 번째 시트
//   const jsonData = XLSX.utils.sheet_to_json(worksheet); // jsonData를 여기서 먼저 선언

//   console.log('jsonData:', jsonData); // jsonData를 사용하기 전에 다시 로깅

//   // 해당 사용자를 찾아서 관심 목록을 업데이트
//   for (let i = 0; i < jsonData.length; i++) {
//     if (jsonData[i]["name"] === userName) {
//       if (!Array.isArray(jsonData[i].favorites)) {
//         jsonData[i].favorites = []; // favorites가 배열이 아니면 빈 배열로 초기화
//       }

//       // areas 배열의 모든 지역을 추가
//       //jsonData[i].favorites.push(...areas);
//       favorites.push({ userName, favorites: areas});

//       // 엑셀 파일에 데이터 업데이트
//       const newWorksheet = XLSX.utils.json_to_sheet(jsonData);
//       workbook.Sheets[sheetName] = newWorksheet;
//       XLSX.writeFile(workbook, "survey-result.xlsx"); // 엑셀 파일에 저장

//       return res.status(201).json({ "message": "created well!" });
//     }
//   }

//   res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
// });


app.put('/users/:name/favorites', (req, res) => {
  const { name } = req.params;
  const { favorites: areas } = req.body;
  console.log(areas);
  const workbook = getExcelWorkbook("survey-result.xlsx");
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet);
  let userFound = false;

  for (let i = 0; i < jsonData.length; i++) {
    if (jsonData[i]["name"] === name) {
      if (!Array.isArray(jsonData[i].favorites)) {
        jsonData[i].favorites = jsonData[i].favorites.concat([areas]);
      }

      userFound = true;
      break;
    }
  }

  // 클라이언트에 응답을 보내거나 업데이트 결과를 반환합니다.
  if (userFound) {
    const newWorksheet = XLSX.utils.json_to_sheet(jsonData);
    workbook.Sheets[sheetName] = newWorksheet;
    XLSX.writeFile(workbook, "survey-result.xlsx");

    // 사용자를 찾은 경우 성공 응답
    res.json({ message: '관심 목록이 업데이트되었습니다.' });
  } else {
    // 사용자를 찾지 못한 경우 에러 응답
    res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
  }
});


app.delete('/users/:name/favorites/:favorites', (req, res) => {
  const { name, favorites } = req.params;

  // 엑셀 파일 불러오기
  const workbook = getExcelWorkbook("survey-result.xlsx");
  const sheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[sheetName];
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  // 사용자를 찾아서 해당 관심 목록을 삭제
  let userFound = false;
  jsonData.forEach(user => {
    if (user["name"] === name) {
      if (Array.isArray(user.favorites)) {
        user.favorites = user.favorites.filter(item => item !== favorites);
        userFound = true;
      }
    }
  });

  if (userFound) {
    // JSON 데이터를 엑셀 시트로 변환하여 저장
    const newWorksheet = XLSX.utils.json_to_sheet(jsonData);
    workbook.Sheets[sheetName] = newWorksheet;
    XLSX.writeFile(workbook, "survey-result.xlsx");

    res.json({ message: '관심 목록이 삭제되었습니다.' });
  } else {
    res.status(404).json({ error: '사용자를 찾을 수 없거나 해당 관심 목록이 없습니다.' });
  }
});
