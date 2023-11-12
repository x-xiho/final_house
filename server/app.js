const { exec } = require("child_process");
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const XLSX = require("xlsx");
const PORT = 4000;
const ExcelJS = require('exceljs');
//const execa = require('execa');
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
        "name": "김효정",
        "age": "10대",
        "child": JSON.stringify(["없음"]),
        "hobby": JSON.stringify(["운동"]),
        "sex": "남성",
        "sports": JSON.stringify(["축구"]),
        "tendency": "핫플 도시",
        "welfare": JSON.stringify(["필요없음"]),
        "location1": "",
        "location2": "",
        "location3": ""

      },
    ];
    const workbook = XLSX.utils.book_new(); // 새로운 워크북 생성

    // 첫 번째 시트 (Sheet1) 생성 및 데이터 추가
    const worksheet1 = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet1, "Sheet1");

    // 두 번째 시트 (Sheet2) 생성 및 데이터 추가
    const dataSheet2 = [
      {
        'name': "",
        '안전': "",
        '생활시설': "",
        '교육': "",
        '의료': "",
        '환경': "",
        '교통': "",
        '기타': ""

      }
    ]
    const worksheet2 = XLSX.utils.json_to_sheet(dataSheet2);
    XLSX.utils.book_append_sheet(workbook, worksheet2, "Sheet2");

    const dataSheet3 = [
      {
        "name": "",
        "광역버스": "",
        "기차": "",
        "따릉이": "",
        "시내버스": "",
        "자차": "",
        "지하철": ""
      }
    ]
    const worksheet3 = XLSX.utils.json_to_sheet(dataSheet3);
    XLSX.utils.book_append_sheet(workbook, worksheet3, "Sheet3");

    const dataSheet4 = [
      {
        "name": "",
        "공원": "",
        "미세먼지": "",
        "소음": "",
        "주택침수": "",
        "풍수해": ""

      }
    ]
    const worksheet4 = XLSX.utils.json_to_sheet(dataSheet4);
    XLSX.utils.book_append_sheet(workbook, worksheet4, "Sheet4");

    const dataSheet5 = [
      {
        "name": "",
        "favorites": ""
      }
    ]
    const worksheet5 = XLSX.utils.json_to_sheet(dataSheet5);
    XLSX.utils.book_append_sheet(workbook, worksheet5, "Sheet5");


    XLSX.writeFile(workbook, name); // Excel 파일로 저장
    return XLSX.readFile(name);

  }
};

// ============================ //
// API 정의
// ============================ //



// app.post("/users", (req, res) => {
//   const { name, age, child, hobby, sex, sports, tendency, welfare, location1, location2, location3 } = req.body;
//   console.log(name, age, child, hobby, sex, sports, tendency, welfare, location1, location2, location3);

//   const workbook = getExcelWorkbook("survey-result.xlsx");
//   const sheetName = workbook.SheetNames[0]; // 첫 번째 시트의 이름
//   const worksheet = workbook.Sheets[sheetName]; // 첫 번째 시트
//   const jsonData = XLSX.utils.sheet_to_json(worksheet);

//   const newData = [
//     { name, age, hobby, sex, sports, tendency }
//   ];
//   newData["location1"] = ""; //기본 열 추가로 빈 값 추가하기
//   newData["favorite2"] = "";
//   newData["favorite3"] = "";

//   const { 안전, 생활시설, 교육, 의료, 환경, 교통, 기타 } = req.body;
//   console.log( 안전, 생활시설, 교육, 의료, 환경, 교통, 기타 );

//   const workbook = getExcelWorkbook("survey-result.xlsx");
//   const sheetName = workbook.SheetNames[0]; // 첫 번째 시트의 이름
//   const worksheet = workbook.Sheets[sheetName]; // 첫 번째 시트
//   const jsonData = XLSX.utils.sheet_to_json(worksheet);

const excelFilePath = 'survey-result.xlsx';

app.post('/users', (req, res) => {
  const { name, age, child, hobby, sex, sports, tendency, welfare, location1, location2, location3 } = req.body;
  const workbook = getExcelWorkbook(excelFilePath);
  const newData1 = [
    { name, age, child, hobby, sex, sports, tendency, welfare, location1, location2, location3 }
  ];

  // 시트 1에 데이터 추가
  const sheet1 = workbook.Sheets[workbook.SheetNames[0]];
  XLSX.utils.sheet_add_json(sheet1, newData1, { header: ['name', 'age', 'child', 'hobby', 'sex', 'sports', 'tendency', 'welfare', 'location1', 'location2', 'location3'], skipHeader: false });

  // 변경된 엑셀 파일 저장
  XLSX.writeFile(workbook, excelFilePath);

  // Command to run the Python script
  const command = 'python3 cb_share.py';

  // Execute the Python script
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ error: 'Python script execution error' });
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return res.status(500).json({ error: 'Python script execution error' });
    }
    console.log(`Python script output: ${stdout}`);

    return res.status(201).json({ message: 'Data saved successfully' });
  });
});



app.post("/rank", (req, res) => {
  const { name, 안전, 생활시설, 교육, 의료, 환경, 교통, 기타 } = req.body;

  // 예시로 newData1을 정의 (원하는 데이터로 수정 필요)
  const newData1 = [{ name, 안전, 생활시설, 교육, 의료, 환경, 교통, 기타 }];

  const workbook = XLSX.readFile(excelFilePath);
  const sheet2 = workbook.Sheets[workbook.SheetNames[1]];

  // sheet_add_json 사용법에 따라 데이터 추가
  XLSX.utils.sheet_add_json(sheet2, newData1, { header: ['name', '안전', '생활시설', '교육', '의료', '환경', '교통', '기타'], skipHeader: false });

  // 파일에 쓰기
  XLSX.writeFile(workbook, excelFilePath);

  res.send('데이터 저장 완료');
});

app.post("/car", (req, res) => {
  const { name, 광역버스, 기차, 따릉이, 시내버스, 자차, 지하철 } = req.body;

  // 예시로 newData1을 정의 (원하는 데이터로 수정 필요)
  const newData1 = [{ name, 광역버스, 기차, 따릉이, 시내버스, 자차, 지하철 }];

  const workbook = XLSX.readFile(excelFilePath);
  const sheet3 = workbook.Sheets[workbook.SheetNames[2]];

  // sheet_add_json 사용법에 따라 데이터 추가
  XLSX.utils.sheet_add_json(sheet3, newData1, { header: ['name', '광역버스', '기차', '따릉이', '시내버스', '자차', '지하철'], skipHeader: false });

  // 파일에 쓰기
  XLSX.writeFile(workbook, excelFilePath);

  res.send('데이터 저장 완료');
});

app.post("/env", (req, res) => {
  const { name, 공원, 미세먼지, 소음, 주택침수, 풍수해 } = req.body;

  // 예시로 newData1을 정의 (원하는 데이터로 수정 필요)
  const newData1 = [{ name, 공원, 미세먼지, 소음, 주택침수, 풍수해 }];

  const workbook = XLSX.readFile(excelFilePath);
  const sheet4 = workbook.Sheets[workbook.SheetNames[3]];

  // sheet_add_json 사용법에 따라 데이터 추가
  XLSX.utils.sheet_add_json(sheet4, newData1, { header: ['name', '공원', '미세먼지', '소음', '주택침수', '풍수해'], skipHeader: false });

  // 파일에 쓰기
  XLSX.writeFile(workbook, excelFilePath);

  res.send('데이터 저장 완료');
});

// app.get("/users/:name/locations", (req, res) => {
//   const { name } = req.params;
//   const workbook = getExcelWorkbook("survey-result.xlsx");
//   const sheetName = workbook.SheetNames[0]; // 첫 번째 시트의 이름
//   const worksheet = workbook.Sheets[sheetName]; // 첫 번째 시트
//   const jsonData = XLSX.utils.sheet_to_json(worksheet);
//   let userData = null;
//   for (let i = 0; i < jsonData.length; i++) {
//     if (jsonData[i]["name"] === name) {


//       const location1 = jsonData[i]["location1"];
//       const location2 = jsonData[i]["location2"];
//       const location3 = jsonData[i]["location3"];

//       userData = ({ location1, location2, location3 });
//       break;
//     }
//   }
//   if (userData) {
//     return res.status(200).json(userData);
//   } else {
//     return res.status(404).json({ error: "사용자를 찾을 수 없습니다." });
//   }
// });


app.get("/users/:name/locations", (req, res) => {
  const workbook = getExcelWorkbook("survey-result.xlsx");
  const sheetName = workbook.SheetNames[0]; // 첫 번째 시트의 이름
  const worksheet = workbook.Sheets[sheetName]; // 첫 번째 시트
  const jsonData = XLSX.utils.sheet_to_json(worksheet);

  const lastRow = jsonData.length > 0 ? jsonData[jsonData.length - 1] : null;

  if (lastRow) {
    const location1 = lastRow["location1"];
    const location2 = lastRow["location2"];
    const location3 = lastRow["location3"];

    const userData = { location1, location2, location3 };
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
    const updatedWorksheet = XLSX.utils.json_to_sheet(jsonData); // jsonData로 업데이트
    workbook.Sheets[sheetName] = updatedWorksheet;

    // 업데이트된 Excel 파일 저장
    XLSX.writeFile(workbook, excelFilePath);

    return res.status(200).json({ result: "사용자 삭제 성공" });
  } else {
    return res.status(404).json({ error: "사용자를 찾을 수 없습니다." });
  }
});




// 사용자의 관심 목록을 업데이트하는 라우트
app.put('/users/:userName/favorites', async (req, res) => {
  const userName = req.params.userName;
  const favorites = req.body.favorites;

  try {
    // 엑셀 파일 로드
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelFilePath);

    // 시트 및 행 조회
    const sheetName = 'Sheet5';
    const worksheet = workbook.getWorksheet(sheetName);

    // 새로운 행 추가
    const newRow = [userName, favorites];
    worksheet.addRow(newRow);

    // 엑셀 파일 저장
    await workbook.xlsx.writeFile(excelFilePath);

    res.json({ success: true, message: '관심 목록 업데이트 성공' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: '서버 오류' });
  }
});

// 사용자의 관심 목록을 삭제하는 라우트

app.delete('/users/:userName/favorites/:area', async (req, res) => {
  const userName = req.params.userName;
  const area = req.params.area;
  const excelFilePath = 'survey-result.xlsx';

  try {
    // 엑셀 파일 로드
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelFilePath);

    // 시트 및 행 조회
    const sheetName = 'Sheet5';
    const worksheet = workbook.getWorksheet(sheetName);

    // 사용자 및 favorites 조회
    const userNameColumnIndex = 1;
    const areaColumnIndex = 2;

    let indexToDelete = -1;
    worksheet.eachRow((row, rowNumber) => {
      if (
        row.getCell(userNameColumnIndex).value === userName &&
        row.getCell(areaColumnIndex).value === area
      ) {
        indexToDelete = rowNumber;
        return false; // 루프 종료
      }
    });

    if (indexToDelete !== -1) {
      // 해당 사용자를 삭제
      worksheet.spliceRows(indexToDelete, 1);

      // 엑셀 파일 저장
      await workbook.xlsx.writeFile(excelFilePath);

      res.json({ success: true, message: 'favorites 삭제 성공' });
    } else {
      res.status(404).json({ success: false, message: '해당 name과 favorites를 찾을 수 없습니다.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: '서버 오류' });
  }
});

app.get('/users/:userName/favorites', async (req, res) => {
  const userName = req.params.userName;
  const excelFilePath = 'survey-result.xlsx';

  try {
    // 엑셀 파일 로드
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(excelFilePath);

    // 시트 및 행 조회
    const sheetName = 'Sheet5';
    const worksheet = workbook.getWorksheet(sheetName);

    // 사용자 및 favorites 조회
    const userNameColumnIndex = 1;
    const areaColumnIndex = 2;

    const heartList = [];
    worksheet.eachRow((row) => {
      if (row.getCell(userNameColumnIndex).value === userName) {
        const favorite = row.getCell(areaColumnIndex).value;
        if (favorite) {
          heartList.push(favorite);
        }
      }
    });

    res.json({ heartList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: '서버 오류' });
  }
});