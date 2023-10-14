import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function Powerbitest() {

  return (
    <div>
      <PowerBIEmbed
        embedConfig={{
          type: 'report', // 보고서 타입
          id: 'ff956d20-3082-48e1-aefb-057b1e35a91f', // CCTV 파일
          embedUrl: "https://app.powerbi.com/reportEmbed?reportId=ff956d20-3082-48e1-aefb-057b1e35a91f&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
          accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5LyIsImlhdCI6MTY5NzI5NjY1NiwibmJmIjoxNjk3Mjk2NjU2LCJleHAiOjE2OTczMDIzMjQsImFjY3QiOjAsImFjciI6IjEiLCJhZ2VHcm91cCI6IjQiLCJhaW8iOiJBVFFBeS84VUFBQUFCWTB2dE1qcGhoRTZFRUt6V3NjeFFieExMei9EODRRQUMralIxSVJ0TGtmT3BiOTdkNmEzN2VJV3c3NUIva0pDIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS2ltIiwiZ2l2ZW5fbmFtZSI6IkppaG8iLCJpcGFkZHIiOiIyMjEuMTU0LjI0LjgxIiwibmFtZSI6IktpbUppaG8iLCJvaWQiOiIxYzc0NjdhNC0xYjMyLTRiMjUtYTZiMS0wNjUxNTg4ZTUwM2EiLCJwdWlkIjoiMTAwMzIwMDA0OTAzNkM2RiIsInJoIjoiMC5BWEVBdkxJSl9TQ1NhMHlEY2lJTGU5VVlHUWtBQUFBQUFBQUF3QUFBQUFBQUFBQnhBTVUuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoicFZ3N2VHcW1hb2NUcVl5X0ZRdGFhZUlnb3dDOHNZSlUyb0RQdDIwVXVWayIsInRpZCI6ImZkMDliMmJjLTkyMjAtNGM2Yi04MzcyLTIyMGI3YmQ1MTgxOSIsInVuaXF1ZV9uYW1lIjoia29uZzg4QGR1a3N1bmcuYWMua3IiLCJ1cG4iOiJrb25nODhAZHVrc3VuZy5hYy5rciIsInV0aSI6Ik1abnZWcmNNNVVxSy1Bc3VVRXR1QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfcGwiOiJrby1LUiJ9.mHFRXWBnjF9ud1gAcuhIqKzFb4yZ2FCKVrON6WKZ1wGP_Rx4glayZNWv_7uHCRA9oITE6jSPa6875YHiHQ_JHP_uwyWzqMvAmJ4pV00CRBRL_aK1TklHaif7c8eNOCEf4pVBaIWJtzIqvADMhyj2ZJbDTN_AZpkykFdBvW7Lr6B7VI343AELziCfY4Ch4wsM1Y7t3XvPRmNk9dk41-8N73Q4abhvQjXIpA2UP91k2HdWxF6F9oNA5izGszKg6QxQqqtd4xYEqhYYiMhdhJ9k6iR_6WP9KodJdcsNKeWT8Wc6qr_IvHu_NvLXlQQlXc6UGmwSJl0-SkKe0Lj3M6IDmA",
          tokenType: models.TokenType.Aad, 
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false
              }
            },
            background: models.BackgroundType.Transparent,
          }
        }}

        // eventHandlers={
        //   new Map([
        //     ['loaded', function () { console.log('Report loaded'); }],
        //     ['rendered', function () { console.log('Report rendered'); }],
        //     ['error', function (event) { console.log(event.detail); }],
        //     ['visualClicked', (event) => {
        //       const visualData = event.detail;
        //       console.log('Visual Clicked:', visualData)
        //     }],
        //     ['pageChanged', (event) => console.log(event)],
        //   ])
        // }
        
        cssClassName={"embededReport"}
        getEmbeddedComponent={(embeddedReport) => {
          window.report = embeddedReport;
        }}
      />
    </div>
  )
}

export default Powerbitest;
