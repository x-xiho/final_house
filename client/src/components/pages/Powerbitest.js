import React, { useEffect } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function Powerbitest() {

  return (
    <div>
      <PowerBIEmbed
        embedConfig={{
          type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: 'ff956d20-3082-48e1-aefb-057b1e35a91f',
          embedUrl: "https://app.powerbi.com/reportEmbed?reportId=ff956d20-3082-48e1-aefb-057b1e35a91f&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7Im1vZGVybkVtYmVkIjp0cnVlLCJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
          accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5LyIsImlhdCI6MTY5NzE5Njc5MiwibmJmIjoxNjk3MTk2NzkyLCJleHAiOjE2OTcyMDEyOTYsImFjY3QiOjAsImFjciI6IjEiLCJhZ2VHcm91cCI6IjQiLCJhaW8iOiJBVFFBeS84VUFBQUFVR1V1NDhEd214MUpTY0xhT3l5S09jUUI2NzZMMlJyTDJNMWlxVDBwQitwMDUwdzgrcHVLUWVCMjNBVXRWY3llIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMiIsImZhbWlseV9uYW1lIjoiS2ltIiwiZ2l2ZW5fbmFtZSI6IkppaG8iLCJpcGFkZHIiOiIyMjEuMTU0LjI0LjgxIiwibmFtZSI6IktpbUppaG8iLCJvaWQiOiIxYzc0NjdhNC0xYjMyLTRiMjUtYTZiMS0wNjUxNTg4ZTUwM2EiLCJwdWlkIjoiMTAwMzIwMDA0OTAzNkM2RiIsInJoIjoiMC5BWEVBdkxJSl9TQ1NhMHlEY2lJTGU5VVlHUWtBQUFBQUFBQUF3QUFBQUFBQUFBQnhBTVUuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoicFZ3N2VHcW1hb2NUcVl5X0ZRdGFhZUlnb3dDOHNZSlUyb0RQdDIwVXVWayIsInRpZCI6ImZkMDliMmJjLTkyMjAtNGM2Yi04MzcyLTIyMGI3YmQ1MTgxOSIsInVuaXF1ZV9uYW1lIjoia29uZzg4QGR1a3N1bmcuYWMua3IiLCJ1cG4iOiJrb25nODhAZHVrc3VuZy5hYy5rciIsInV0aSI6IjA0YkdtYWdqMkUyR1dLdUNBNnNRQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdLCJ4bXNfcGwiOiJrby1LUiJ9.iUK1hLDPsWVSyCaQnKbOQdJqIE4Lzq-GROnfX2dXlFRMsdOa1j5MW-kyO9JAxSsg8jFkfUVdakN_wxW8TFQ-oX9YCrxfpMNQbrC9kelg41pnguNZS6TyE5sNPE3WOY3IrajhwHZDRXJTMNMVoCobl5xXPvb9KurOGKxYanuJwZWcB5AyYroW8Eb2xJDGxHRARIOPi4aURaXVVsJ9H3jXusjdkLPbcqB7xif0iOmmai4VHvMFrH_s4iimZN-4Eg_2FgfFZudYMkWBFejzt6rQMM9LO0pOlpOQApP9V3iVKL3vdD7NM4C0arIkAXx2xv_D5_5RaVhD6HnOQ0jCVsbjdA",
          tokenType: models.TokenType.Aad, // Use models.TokenType.Aad for SaaS embed
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
