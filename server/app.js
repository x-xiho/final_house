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


const getExcelWorkbook = (name) => {
  try {
    return XLSX.readFile(name); // Excel 파일의 경로
  } catch (error) {
    // 존재하지 않을때
    const data = [
      { 
      "age": "10대", 
      "hobby": JSON.stringify(["test"]), 
      "sex": "남성", 
      "sports": JSON.stringify(["test"]), 
      "tendency": "핫플 도시",   

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
  return res.status(200).json({"message": "ok"});
});

app.post("/api/form", (req, res) => {
  const { age, hobby, sex, sports, tendency } = req.body;
  console.log(age, hobby, sex, sports, tendency );

  const workbook = getExcelWorkbook("survey-result.xlsx");
  const sheetName = workbook.SheetNames[0]; // 첫 번째 시트의 이름
  const worksheet = workbook.Sheets[sheetName]; // 첫 번째 시트
  const jsonData = XLSX.utils.sheet_to_json(worksheet);
  
  const newData = [
    { age, hobby, sex, sports, tendency }
  ];
  const updatedData = jsonData.concat(newData);
  const updatedWorkSheet = XLSX.utils.json_to_sheet(updatedData);
  workbook.Sheets[sheetName] = updatedWorkSheet;
  XLSX.writeFile(workbook, "survey-result.xlsx");

  return res.status(201).json({"message": "created well!"});
});

const locationData = {
  김효정 : { locations: {"1위" : "도봉구", "2위" : "강남구", "3위" : "강남구"} },
  // 김지호 : { locations: ['마포구', '서초구', '관악구'] },
};
// 기존 엑셀 파일 열기
// const workbook = new ExcelJS.Workbook();
// workbook.xlsx.readFile('survey-result.xlsx')
//   .then(() => {
//     const worksheet = workbook.getWorksheet(1); // 첫 번째 워크시트 사용 (인덱스는 1부터 시작)


//     // 데이터 작성
//     for (const name in locationData) {
//       if (locationData.hasOwnProperty(name)) {
//         worksheet.getCell(`f${worksheet.actualRowCount + 1}`).value = name;
//         worksheet.getCell(`f${worksheet.actualRowCount}`).value = locationData[name].locations.join(', ');
//       }
//     }
//     // 열과 행을 지정해서 저장하는게 가능한지..?

//         // 엑셀 파일 다시 저장
//         return workbook.xlsx.writeFile('survey-result.xlsx');
//       })

app.get('/users/:name/locations', (req, res) => {
  const { name } = req.params;
  const userData = locationData[name];


  if (userData) {
    res.json(userData.locations);
  } else {
    res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
  }
});

app.use(bodyParser.json());

// 사용자 데이터 삭제 엔드포인트
app.delete('/users/:name', (req, res) => {
  const { name } = req.params;

  if (userData[name]) {
    // 사용자 데이터를 삭제
    delete userData[name];
    res.status(200).json({ message: '사용자 데이터가 삭제되었습니다.' });
  } else {
    res.status(404).json({ error: '사용자를 찾을 수 없습니다.' });
  }
});

/*
app.post('/form/:id', (req, res) => {
  // 프론트엔드에서 보낸 데이터는 req.body에 저장
  const { sex, age, hobby, sports, tendency } = req.body;

  // 엑셀 워크북을 생성합니다.
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('User Data');

  // 데이터를 엑셀에 추가합니다.
  worksheet.addRow(['Sex', 'Age', 'Hobby', 'Sports', 'Tendency']);
  worksheet.addRow([sex, age, hobby, sports, tendency]);

  // 엑셀 파일을 저장합니다.
  workbook.xlsx.writeFile('user_data.xlsx')
    .then(() => {
      console.log('User data saved to Excel file');
    })
    .catch((error) => {
      console.error('Error saving user data:', error);
    });

  // 처리 완료 후 응답을 보냅니다.
  res.status(200).json({ message: 'User info saved successfully' });
});

app.delete('/users/:id', (req, res) => {
  const userId = req.params.userId;

  // 엑셀 파일 열기
  const workbook = new ExcelJS.Workbook();
  workbook.xlsx.readFile('user_data.xlsx')
    .then(function () {
      const worksheet = workbook.getWorksheet(1);

      // 특정 사용자 정보를 삭제
      const userRow = worksheet.find(row => row.getCell(1).value === userId);
      if (userRow) {
        worksheet.spliceRows(userRow.number, 1);
      }

      // 엑셀 파일 저장
      return workbook.xlsx.writeFile('user_data.xlsx');
    })
    .then(function () {
      res.status(200).json({ message: 'User data deleted successfully' });
    })
    .catch(function (error) {
      console.error('Error deleting user data:', error);
      res.status(500).json({ error: 'Failed to delete user data' });
    });
});

app.get('/api/loadListFromExcel', (req, res) => {
  const workbook = new ExcelJS.Workbook();

  workbook.xlsx.readFile('list.xlsx')
    .then(function () {
      const worksheet = workbook.getWorksheet(1);
      const list = [];

      worksheet.eachRow({ includeEmpty: false }, (row) => {
        list.push(row.values[1]);
      });

      res.status(200).json({ list });
    })
    .catch(function (error) {
      console.error('Error loading list from Excel:', error);
      res.status(500).json({ error: 'Failed to load list from Excel' });
    });
});

// 지역을 찜하는 엔드포인트
app.post('/favorites/:id/:location', (req, res) => {
  const { id, location } = req.params;

  if (!userFavorites[id]) {
    userFavorites[id] = [];
  }
  // 중복 찜 방지
  if (!userFavorites[userId].includes(location)) {
    userFavorites[userId].push(location);
    res.status(200).json({ message: 'Location added to favorites' });
  } else {
    res.status(400).json({ message: 'Location is already in favorites' });
  }

  userFavorites[userId].push(location);



  res.status(200).json({ message: 'Location added to favorites' });
});


// 사용자의 찜한 지역 목록을 가져오는 엔드포인트
app.get('/favorites/:id', (req, res) => {
  const id = req.params.userId;
  const favorites = userFavorites[id] = [];

  res.status(200).json({ favoriteLocations: favorites });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const UserInfo = []; // 유저데이터 임시 저장 배열
const recommendResult = [{
  first: "강남구",
  second: "중구",
  third: "노원구",
}]; // 임시 추천결과 저장 배열
let backendHeartList = []; // 유저의 관심목록 저장
*/

