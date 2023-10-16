# final_house
졸작 팀플 파일 백업본

### To do
- [ ] 지역탐색 페이지에서 다른 페이지로 이동할 시 경고창 띄우기 '지금까지 입력한 내용이 저장되지 않습니다. '
- [ ] 메인화면 / 마이페이지에서 지역에 대한 정보를 어디까지 보여줄건지 -> 지역이름만 보여줄건지 지역 관련 정보도 같이 보여줄건지

- [ ] 파워비아이 페이지 -> 대시보드랑 시각화 지도 어떻게 보여줄건지
- [ ] 로그인 / 로그아웃 문제

/////

###교수님 피드백
근거있는 UX 디자인 -> 사용자의 편리성을 위해



-> 모든 연령대의 사람들이 쉽게 사용할 수 있도록 직관적으로 디자인 했는지?
-> 불필요한 클릭을 요구하지 않는지?
-> 데이터 전달이 잘 되는지?


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
