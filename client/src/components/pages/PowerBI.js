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
          embedUrl: "https://app.powerbi.com/reportEmbed?reportId=17fe5df0-9871-4479-b9fe-d317878995a8&autoAuth=true&ctid=fd09b2bc-9220-4c6b-8372-220b7bd51819",
          accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5LyIsImlhdCI6MTY5OTExMjEwOCwibmJmIjoxNjk5MTEyMTA4LCJleHAiOjE2OTkxMTYxMTEsImFjY3QiOjAsImFjciI6IjEiLCJhZ2VHcm91cCI6IjQiLCJhaW8iOiJBVFFBeS84VUFBQUEvM0pWWGh0UUJaaVd3UnFITnJodythVFJMMEh4WkNoeUdsRytYTERlMGNNVG5wUVhEMmV1OUdweGh3aE9iNjFhIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS2ltIiwiZ2l2ZW5fbmFtZSI6IkppaG8iLCJpcGFkZHIiOiIyMjEuMTU0LjI0LjgxIiwibmFtZSI6IktpbUppaG8iLCJvaWQiOiIxYzc0NjdhNC0xYjMyLTRiMjUtYTZiMS0wNjUxNTg4ZTUwM2EiLCJwdWlkIjoiMTAwMzIwMDA0OTAzNkM2RiIsInB3ZF9leHAiOiIwIiwicHdkX3VybCI6Imh0dHBzOi8vcG9ydGFsLm1pY3Jvc29mdG9ubGluZS5jb20vQ2hhbmdlUGFzc3dvcmQuYXNweCIsInJoIjoiMC5BWEVBdkxJSl9TQ1NhMHlEY2lJTGU5VVlHUWtBQUFBQUFBQUF3QUFBQUFBQUFBQnhBTVUuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoicFZ3N2VHcW1hb2NUcVl5X0ZRdGFhZUlnb3dDOHNZSlUyb0RQdDIwVXVWayIsInRpZCI6ImZkMDliMmJjLTkyMjAtNGM2Yi04MzcyLTIyMGI3YmQ1MTgxOSIsInVuaXF1ZV9uYW1lIjoia29uZzg4QGR1a3N1bmcuYWMua3IiLCJ1cG4iOiJrb25nODhAZHVrc3VuZy5hYy5rciIsInV0aSI6Il9JX3ZuWmZUZ1VLX3luMTRzYVVVQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfcGwiOiJrby1LUiJ9.d10Om6lZIApP2BsV-RL6cV3sJQ3fqUDav9T53zpNb4pczMOXZFb9U4SSiWjU0vKpslkhLbZ5-gGyZRIwqrc5yEOjUVwWDtEjZOQFZjHqdBOtH1MhB1pEMxjJHwLZInkNVmelXNzOZMMObTbUpxHDyIHrn1KNjp4nOC9r1a4iuxvFjEnSponK6geL_rY-aHEgB1G9nmnwIlcOgsm--zKkWzq1iZe-gCPsYZo4RYmLHQ1tjG0f7kSAW1S21FBZ3vC009dkWJbPs8tl0JtZ1FlEwlNZ4zUWTwNzHZCnGQBIBNXTWt1KEZ1yYN_5eUvMUUSJzSWENQTW0e4lona4nEfjYA",
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

export default PowerBI