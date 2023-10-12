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
          accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyIsImtpZCI6Ii1LSTNROW5OUjdiUm9meG1lWm9YcWJIWkdldyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5LyIsImlhdCI6MTY5NzEwMTIxNCwibmJmIjoxNjk3MTAxMjE0LCJleHAiOjE2OTcxMDU4NjIsImFjY3QiOjAsImFjciI6IjEiLCJhZ2VHcm91cCI6IjQiLCJhaW8iOiJBVFFBeS84VUFBQUF2LzJ5QVMyRWkxYlFxWWp1SHlrd1M4TmIrY211eG5CMEMyVnpDejNBbmdBbDlvc01uSVE1b0RPcjJCZExRRHE4IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS2ltIiwiZ2l2ZW5fbmFtZSI6IkppaG8iLCJpcGFkZHIiOiIyMjEuMTU0LjI0LjgxIiwibmFtZSI6IktpbUppaG8iLCJvaWQiOiIxYzc0NjdhNC0xYjMyLTRiMjUtYTZiMS0wNjUxNTg4ZTUwM2EiLCJwdWlkIjoiMTAwMzIwMDA0OTAzNkM2RiIsInJoIjoiMC5BWEVBdkxJSl9TQ1NhMHlEY2lJTGU5VVlHUWtBQUFBQUFBQUF3QUFBQUFBQUFBQnhBTVUuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoicFZ3N2VHcW1hb2NUcVl5X0ZRdGFhZUlnb3dDOHNZSlUyb0RQdDIwVXVWayIsInRpZCI6ImZkMDliMmJjLTkyMjAtNGM2Yi04MzcyLTIyMGI3YmQ1MTgxOSIsInVuaXF1ZV9uYW1lIjoia29uZzg4QGR1a3N1bmcuYWMua3IiLCJ1cG4iOiJrb25nODhAZHVrc3VuZy5hYy5rciIsInV0aSI6IjV0V3l4cWFQd0VxeTAyQkFKeEVmQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfcGwiOiJrby1LUiJ9.hcZ3tJoGcSfyOJ3rSp783XOgLP1refBuoPzXC5YFSpaPpD9aA5eI6kYO3Nxl2Ptk1tYXXMwC34w6YFVe_IVpcToIRnEaKqWgiunMxIs0o52QDbR2fHfAG4fkARCipsuTEKQzjkCiEhX8roYmOBNzcho3RsqktZJ4cEOmRMfL44BeULrYCVs48HabgKmN7EQFyFCYIO9BnxtZBT_tO8eruUTiSUyuG7hb1ln4Ranv6ijwi7qPBOButkFUSIqdj6losOER-WriQVPbHU5gYekNe3HApxigd2x1EllPGe3Ia3fzzMBofFvDEy8kULeYPu7xC_h8c7E4mnIu6fZNOhcMnA",
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
            ['visualClicked', () => console.log('visual clicked')],
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