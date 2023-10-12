import React, { useEffect } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function Powerbitest() {

  // useEffect(() => {
  //   const applyBasicFilter = async () => {
  //     const basicFilter = {
  //       $schema: "http://powerbi.com/product/schema#basic",
  //       target: {
  //         table: "12_04_08_E_CCTV정보_서울_20230710 - 복사본_종로구",
  //         column: "관리기관명"
  //       },
  //       operator: "In",
  //       values: ["서울특별시 강남구청"],
  //       filterType: models.FilterType.BasicFilter
  //     };

  //     console.log("실행중 실행중");

  //     if (window.report) {
  //       const pages = await window.report.getPages();
  //       const page = pages[0]; // 예를 들어 첫 번째 페이지 사용

  //       const visuals = await page.getVisuals();
  //       const visual = visuals[0]; // 예를 들어 첫 번째 시각적 요소 사용
  //       console.log("비주얼 로고 찍음", visual);
  //       // console.log("basicFilter 찍음",basicFilter);

  //       await visual.setSlicerState({
  //         filters: [basicFilter]
  //       });

  //     }
  //   }

  //   applyBasicFilter();
  // }, []);

  return (
    <div>
      <PowerBIEmbed
        embedConfig={{
          type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: 'ff956d20-3082-48e1-aefb-057b1e35a91f',
          embedUrl: "https://app.powerbi.com/reportEmbed?reportId=ff956d20-3082-48e1-aefb-057b1e35a91f&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
          accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5LyIsImlhdCI6MTY5NzExODI4OCwibmJmIjoxNjk3MTE4Mjg4LCJleHAiOjE2OTcxMjM5NjUsImFjY3QiOjAsImFjciI6IjEiLCJhZ2VHcm91cCI6IjQiLCJhaW8iOiJFMkZnWUVqTGR2MXNkMXl0cDY2OHVzV1c3Vk9MVU1TT0NiTlhDMm5KSFR4MldjUldMTm01UHRBNnY2Q2tqRnRab3NRaVN2RU9BQT09IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS2ltIiwiZ2l2ZW5fbmFtZSI6IkppaG8iLCJpcGFkZHIiOiIyMjEuMTU0LjI0LjgxIiwibmFtZSI6IktpbUppaG8iLCJvaWQiOiIxYzc0NjdhNC0xYjMyLTRiMjUtYTZiMS0wNjUxNTg4ZTUwM2EiLCJwdWlkIjoiMTAwMzIwMDA0OTAzNkM2RiIsInJoIjoiMC5BWEVBdkxJSl9TQ1NhMHlEY2lJTGU5VVlHUWtBQUFBQUFBQUF3QUFBQUFBQUFBQnhBTVUuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoicFZ3N2VHcW1hb2NUcVl5X0ZRdGFhZUlnb3dDOHNZSlUyb0RQdDIwVXVWayIsInRpZCI6ImZkMDliMmJjLTkyMjAtNGM2Yi04MzcyLTIyMGI3YmQ1MTgxOSIsInVuaXF1ZV9uYW1lIjoia29uZzg4QGR1a3N1bmcuYWMua3IiLCJ1cG4iOiJrb25nODhAZHVrc3VuZy5hYy5rciIsInV0aSI6IkI5LXRFOHNoQUU2Q2c1WkxxM0c2QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfcGwiOiJrby1LUiJ9.Lti7fybpKoPEyecD1TwheQ7tOPlSefoybUl3bAmeSVBlWYvf0GzOWo23vx13LIqFubNFdMy0qk9KRix97vQf52zEy-E_v-fuou_4K3dAOIF_BHFfWcmxwqz8K54TVo2nTqqQgSUazmijn0u-zN9s3DQNQaz1ceY9uuVFlHPCnfk1xXfvO57pTNVr2JIiYOw40w2jcy0VJJ3JZb5pKv7mmoybvDeWHgPwo_392Iok0szb12S6A0mkW80Num6ieJIcLOLaBvvhFhMyI2uaTdnDeskY9Tn_uqGopn3VpgoKKP5JOOXpJZyAxJ7GTXebSU4lFA7nPDAI428298pA4P2bww",
          tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: true
              }
            },
            background: models.BackgroundType.Transparent,
          }
        }}

        eventHandlers={
          new Map([
            ['loaded', function () { console.log('Report loaded'); }],
            ['rendered', function () { console.log('Report rendered'); }],
            ['error', function (event) { console.log(event.detail); }],
            ['visualClicked', (event) => {
              const visualData = event.detail;
              console.log('Visual Clicked:', visualData)
            }],
            ['pageChanged', (event) => console.log(event)],
          ])
        }
        cssClassName={"embededReport"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
    </div>
  )
}

export default Powerbitest;
