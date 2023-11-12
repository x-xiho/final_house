# final_house
졸작 팀플 파일

#### 당장 To do
- [ ] final_house 파일 azure 배포-> server 파일과 연동하기@!!!!!
- [ ] 로그인 토큰 만료 시키기? / 보안이 괜찮은지
- [ ] 화면 렌더링 시 처음 한 번만 실행되는 방법 탐색

### To do

- [ ] 지역탐색 페이지에서 다른 페이지로 이동할 시 경고창 띄우기 '지금까지 입력한 내용이 저장되지 않습니다. ' -> prompt 시도 실패. react 버전이 안 맞음ㅜ -> 시간나면 시도
- [ ] 화면의 크기에 따라 폰트 크기 변경될 수 있도록 css 변경
- [ ] 메인화면 / 마이페이지에서 지역에 대한 정보를 어디까지 보여줄건지 -> 지역이름 / 평균시세 등
- [ ] 파워비아이 페이지 구성

- [ ] powerBi 액세스 토큰 자동화 방법 찾기 / powerbi 페이지 ui 디자인 

### API 정의서
*[노션](https://www.notion.so/2-29540c534eb54de2808f282591fea938)
-->> 우선순위 데이터에 대한 엔드포인트

유저데이터 = {
name : "",
age : "",
sex : "",
hobby : ["","","",],
sports : ["","",""],
}

우선순위 데이터 = {
환경 : 1,
교통 : 2,
생활시설 : 3,
...
}

지역추천 데이터 = {
location1 : "",
location2: "",
location3 : "",
}

foavorites = {
["","",""]
}

---------------------------------------------

#### Azure 배포
*[참고 티스토리](https://zigispace.net/1111)


1. App serviec -> 리소스 만들기 -> 웹앱 
2. 리소스 그룹 (rg-name) / 이름(app-name) / 러타임 스택 ( node 18 LTS ) / 지역 ( korea central ) / 플랜 새로 만들기 (asp-name) / 가격 책정 플랜 ( B1 ) -> 검토 만들기 / 배포완
3. vscode에서 해당하는 파일 deploy

   
/////

###교수님 피드백
근거있는 UX 디자인 -> 사용자의 편리

-> 모든 연령대의 사람들이 쉽게 사용할 수 있도록 직관적으로 디자인 했는지?
-> 불필요한 클릭을 요구하지 않는지?




----------------------------
powerbi 연동 코드 / 여러개의 column 값 변경하기
```
useEffect(() => {
  const applyMultipleFilters = async () => {
    const filter1 = {
      $schema: "http://powerbi.com/product/schema#basic",
      target: {
        table: "테이블명",
        column: "관리기관명"
      },
      operator: "In",
      values: ["서울특별시 강남구청"],
      filterType: models.FilterType.BasicFilter
    };

    const filter2 = {
      $schema: "http://powerbi.com/product/schema#basic",
      target: {
        table: "테이블명",
        column: "설치목적"
      },
      operator: "In",
      values: ["교통"],
      filterType: models.FilterType.BasicFilter
    };

    const combinedFilter = {
      $schema: "http://powerbi.com/product/schema#advanced",
      target: {
        table: "테이블명"
      },
      logicalOperator: "And",
      conditions: [filter1, filter2]
    };

    console.log("실행중 실행중");

    if (window.report) {
      const pages = await window.report.getPages();
      const page = pages[0]; // 예를 들어 첫 번째 페이지 사용

      const visuals = await page.getVisuals();
      const visual = visuals[0]; // 예를 들어 첫 번째 시각적 요소 사용
      console.log("비주얼 로고 찍음", visual);
      // console.log("combinedFilter 찍음", combinedFilter);

      await visual.setSlicerState({
        filters: [combinedFilter]
      });
    }
  }

  applyMultipleFilters();
}, []);

```

### powerbi 페이지 이동 코드
```
  const powerbibtn = async (name) => {
    window.location.reload();
    console.log("선택한 지역 이름", name)
    console.log('파워비아이 연동 함수 실행됨 ds', typeof name);

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

```
