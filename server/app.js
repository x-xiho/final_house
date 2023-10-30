const { exec } = require("child_process");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const XLSX = require("xlsx");
const PORT = 4000;
const ExcelJS = require('exceljs');

// ============================ //
// APP 설정
// ============================ //

app.use(cors()); //cors 허용
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.listen(PORT, () => console.log("서버가 시작됐습니다! 포트는", PORT));


const data = [
  {
    name: "김효정",
    age: "10대",
    hobby: JSON.stringify(["test"]),
    sex: "남성",
    sports: JSON.stringify(["test"]),
    tendency: "핫플도시",
    location1:"강남구",
    location2:"노원구",
    location3:"중구",
    favorites: "강남구"
  },
];

const getExcelWorkbook = (name) => {
  try {
    return XLSX.readFile(name); // Excel 파일의 경로
  } catch (error) {
    // 존재하지 않을때
    const data = [
      {
        name: "김효정",
        age: "10대",
        hobby: JSON.stringify(["test"]),
        sex: "남성",
        sports: JSON.stringify(["test"]),
        tendency: "핫플도시",
        location1:"강남구",
        location2:"노원구",
        location3:"중구",
        favorites: "강남구"
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

  exec("python3 app.py", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`Python Output: ${stdout}`);
    return res.status(201).json({ "message": "updated well!" });
  });
});


app.post("/users", (req, res) => {
  const { name, age, hobby, sex, sports, tendency, locations } = req.body;
  console.log(name, age, hobby, sex, sports, tendency, locations);

  const workbook = getExcelWorkbook("survey-result.xlsx");
  const sheetName = workbook.SheetNames[0]; // 첫 번째 시트의 이름
  const worksheet = workbook.Sheets[sheetName]; // 첫 번째 시트
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  const newData = [
    { name, age, hobby, sex, sports, tendency }
  ];
  newData["locations"] = ""; //기본 열 추가로 빈 값 추가하기
  newData["favorites"] = "";
  const updatedData = jsonData.concat(newData);
  const updatedWorkSheet = XLSX.utils.json_to_sheet(updatedData);
  workbook.Sheets[sheetName] = updatedWorkSheet;
  XLSX.writeFile(workbook, "survey-result.xlsx");
  const {exce} = require('child_process');
  
  // Python 스크립트를 실행
  exec('cb_share.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`오류 발생: ${error}`);
      return;
    }
    console.log(`결과: ${stdout}`);
  });

  return res.status(201).json({ "message": "created well!" });
});


app.get("/users/:name/locations", (req, res) => {
  const { name } = req.params;

  const workbook = getExcelWorkbook("survey-result.xlsx");
  const sheetName = workbook.SheetNames[0]; // 첫 번째 시트의 이름
  const worksheet = workbook.Sheets[sheetName]; // 첫 번째 시트
  const jsonData = XLSX.utils.sheet_to_json(worksheet);


  const { location1, location2, location3 } = data[0];
  console.log(location1, location2, location3);
  res.json({ location1, location2, location3 });

  // for (let i = 0; i < jsonData.length; i++) {
  //   if (jsonData[i]["name"] === name) {
  //     const userData = jsonData[i]["locations"];
  //     return res.status(200).json({ "locations": JSON.parse(userData) });
  //   }
  // }
  // return res.status(404).json({ error: "사용자를 찾을 수 없습니다." });
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
    const updatedWorksheet = XLSX.utils.json_to_sheet(jsonData);
    workbook.Sheets[sheetName] = updatedWorksheet;

    // 업데이트된 Excel 파일 저장
    XLSX.writeFile(workbook, excelFilePath);

    return res.status(200).json({ result: "사용자 삭제 성공" });
  } else {
    return res.status(404).json({ error: "사용자를 찾을 수 없습니다." });
  }
});

// POST 요청을 사용하여 관심 목록에 추가
app.post('/users/:name/favorites', (req, res) => {
  const { area } = req.body;

  if (!area) {
    return res.status(400).json({ message: '지역을 지정해야 합니다.' });
  }

  heartList.add(area);

  return res.status(201).json({ message: `${area}를 관심목록에 추가했습니다.` });
});

// DELETE 요청을 사용하여 관심 목록에서 삭제
app.delete('/users/:name/favorites', (req, res) => {
  const { area } = req.body;

  if (!area) {
    return res.status(400).json({ message: '지역을 지정해야 합니다.' });
  }

  if (heartList.has(area)) {
    heartList.delete(area);
    return res.json({ message: `${area}를 관심목록에서 삭제했습니다.` });
  } else {
    return res.status(404).json({ message: `${area}는 관심목록에 없습니다.` });
  }
});