import React from 'react'

import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client'

function Powerbi() {
  return (
    <div>

      <PowerBIEmbed
        embedConfig={{
          type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: 'ff956d20-3082-48e1-aefb-057b1e35a91f',
          embedUrl: "https://app.powerbi.com/reportEmbed?reportId=ff956d20-3082-48e1-aefb-057b1e35a91f&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
          accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5LyIsImlhdCI6MTY5NzExMDQyOSwibmJmIjoxNjk3MTEwNDI5LCJleHAiOjE2OTcxMTQ3ODcsImFjY3QiOjAsImFjciI6IjEiLCJhZ2VHcm91cCI6IjQiLCJhaW8iOiJBVFFBeS84VUFBQUFvVDFqSjdOaHQ2RWNJcENZNUFwYlJwTFh2cklDTG1rdUdmNVE1SE8zcEVMTGR1ZjRyWTFwRnExYkorL1VMeDhKIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS2ltIiwiZ2l2ZW5fbmFtZSI6IkppaG8iLCJpcGFkZHIiOiIyMjEuMTU0LjI0LjgxIiwibmFtZSI6IktpbUppaG8iLCJvaWQiOiIxYzc0NjdhNC0xYjMyLTRiMjUtYTZiMS0wNjUxNTg4ZTUwM2EiLCJwdWlkIjoiMTAwMzIwMDA0OTAzNkM2RiIsInJoIjoiMC5BWEVBdkxJSl9TQ1NhMHlEY2lJTGU5VVlHUWtBQUFBQUFBQUF3QUFBQUFBQUFBQnhBTVUuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoicFZ3N2VHcW1hb2NUcVl5X0ZRdGFhZUlnb3dDOHNZSlUyb0RQdDIwVXVWayIsInRpZCI6ImZkMDliMmJjLTkyMjAtNGM2Yi04MzcyLTIyMGI3YmQ1MTgxOSIsInVuaXF1ZV9uYW1lIjoia29uZzg4QGR1a3N1bmcuYWMua3IiLCJ1cG4iOiJrb25nODhAZHVrc3VuZy5hYy5rciIsInV0aSI6ImtTdG4xWGxYZjB1ZnQzT1BQQklZQVEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfcGwiOiJrby1LUiJ9.bHEoibaTtadKSiHodMKGlgRYRMQrIYBwryfAwJyfNlO3l0cpqjV4ELN6JdowprcsDq4rlLyj5smLMCfk-mBsWwpCb8yoePToyvuvLJebMGXb1Qr-l0nQ_SwgP2DQlyym8T-NgB8FCF7jPzsWrTcUqzGczAtmh107ZhNHkLmTq-hUPXWHM6PEtlhJqabE2lhZna-Tf6qA5bNGcplpn3Z1S53pMf2WZa36991eB84iQdCEVDItqS8n9ibp1yngUZoklVKWYPUE_wjFZJ96PvtF7FAF8RZx19k-dFR-XFUBT3g8yRYte6f3-fy84JuHuc49NmxMnT9zdkmWTtjAX11nZg",
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
            ['visualClicked', (event) => {const visualData = event.detail;
            console.log('Visual Clicked:', visualData)}],
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

export default Powerbi