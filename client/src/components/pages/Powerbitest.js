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
          accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5LyIsImlhdCI6MTY5NzM2NzYzMywibmJmIjoxNjk3MzY3NjMzLCJleHAiOjE2OTczNzIzNTgsImFjY3QiOjAsImFjciI6IjEiLCJhZ2VHcm91cCI6IjQiLCJhaW8iOiJBVFFBeS84VUFBQUFSd1FVemRyYjl1OWdYRng2dk5KcERSMFpVajYyaVhLQngzbHdzaThWMldnUHNkZGR4RzI0Z3ZMQ0NHKzV4TFFLIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS2ltIiwiZ2l2ZW5fbmFtZSI6IkppaG8iLCJpcGFkZHIiOiIyMjEuMTU0LjI0LjgxIiwibmFtZSI6IktpbUppaG8iLCJvaWQiOiIxYzc0NjdhNC0xYjMyLTRiMjUtYTZiMS0wNjUxNTg4ZTUwM2EiLCJwdWlkIjoiMTAwMzIwMDA0OTAzNkM2RiIsInB3ZF9leHAiOiIxMjA3MzczIiwicHdkX3VybCI6Imh0dHBzOi8vcG9ydGFsLm1pY3Jvc29mdG9ubGluZS5jb20vQ2hhbmdlUGFzc3dvcmQuYXNweCIsInJoIjoiMC5BWEVBdkxJSl9TQ1NhMHlEY2lJTGU5VVlHUWtBQUFBQUFBQUF3QUFBQUFBQUFBQnhBTVUuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoicFZ3N2VHcW1hb2NUcVl5X0ZRdGFhZUlnb3dDOHNZSlUyb0RQdDIwVXVWayIsInRpZCI6ImZkMDliMmJjLTkyMjAtNGM2Yi04MzcyLTIyMGI3YmQ1MTgxOSIsInVuaXF1ZV9uYW1lIjoia29uZzg4QGR1a3N1bmcuYWMua3IiLCJ1cG4iOiJrb25nODhAZHVrc3VuZy5hYy5rciIsInV0aSI6IlJpUS12UGFwNlVXcy0tLTVfWEZoQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfcGwiOiJrby1LUiJ9.QG9bzPTe96DDRrPKg7r4z0nrHzNKDl3XJpO4ORhD1Jj8EbJwLygo8zqyNhZE0pxHoHVlj0acG95jwb5imyXqpFzwYnQozHI8Sw8wMI0maOS-iugtFBqoToHEIKV0GKxd4kaP_Oixil1Wfbr62wx73ZiCKqjr1QYyoh-Z8HVml0q2W-fzyYmSbuEY8bnU8xyTyFQnbcYrXSZ-i1PtdRsPlq1WQyA4aRd5MUHnPz5KaMaAYJuhRTKArW12vUYmhNpTiAQmuA74480E6quhZVyk78v5Pp4YCkO7WZz7rGdf_EqwTD2Qb1auiXvrXAEVXpOa0IOAUO5v1MXMo1gZv88JgA",
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
