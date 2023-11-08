import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

// 도봉구 샘플
function PowerBI() {
  return (
    <div>
      <PowerBIEmbed
        embedConfig={{
          type: 'report', // 보고서 타입
          id: '17fe5df0-9871-4479-b9fe-d317878995a8',
          // URL 수정 요함
          embedUrl: "https://app.powerbi.com/reportEmbed?reportId=17fe5df0-9871-4479-b9fe-d317878995a8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
          accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5LyIsImlhdCI6MTY5OTQ0MDcwMSwibmJmIjoxNjk5NDQwNzAxLCJleHAiOjE2OTk0NDUxNzYsImFjY3QiOjAsImFjciI6IjEiLCJhZ2VHcm91cCI6IjQiLCJhaW8iOiJBVFFBeS84VUFBQUFKUUFIVWJGOUxleFdDNGNEN1BXNWpvY3pBMkJKRnNKbExsaXRjWmpaTkNwTnF2VzAxZnQ2cGZZMjdJVFZxQ3lDIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS2ltIiwiZ2l2ZW5fbmFtZSI6IkppaG8iLCJpcGFkZHIiOiIyMjEuMTU0LjI0LjgxIiwibmFtZSI6IktpbUppaG8iLCJvaWQiOiIxYzc0NjdhNC0xYjMyLTRiMjUtYTZiMS0wNjUxNTg4ZTUwM2EiLCJwdWlkIjoiMTAwMzIwMDA0OTAzNkM2RiIsInJoIjoiMC5BWEVBdkxJSl9TQ1NhMHlEY2lJTGU5VVlHUWtBQUFBQUFBQUF3QUFBQUFBQUFBQnhBTVUuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoicFZ3N2VHcW1hb2NUcVl5X0ZRdGFhZUlnb3dDOHNZSlUyb0RQdDIwVXVWayIsInRpZCI6ImZkMDliMmJjLTkyMjAtNGM2Yi04MzcyLTIyMGI3YmQ1MTgxOSIsInVuaXF1ZV9uYW1lIjoia29uZzg4QGR1a3N1bmcuYWMua3IiLCJ1cG4iOiJrb25nODhAZHVrc3VuZy5hYy5rciIsInV0aSI6InhyS3V3Wko3VzBxRDMxNDQzOHluQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfcGwiOiJrby1LUiJ9.t-3sJ0qpxQ43y4pH6viZEDp8z-UNOpEZiIBC1vYF09yjiFtK61jzIJrRpbPHvCuoiBBTgc3uiolO91vQGEupk99EHOEaB-QiCRnTPKoAyzME9bTTRU7GMK000BUjfLipq0oHbUnr77Bgcsn2CcDXAVu8gltgtspSWfcg6Mo3qi2hIxUY8Fq4y1701Vx1G5YX418RLJIKdumPlfSVa5gWiLQ4wGB6Cd19tIQsBE9LHYqNeVE__X1F9HXHn2-WakVjMkA5Q16eBzyTp9pZCu2DZkWGPj_BdUTR_rfuu4mHm9JYZQso5hm213yw4r5d0t49ZHAytxhgAv16PIEbdUsbKw",
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

export default PowerBI