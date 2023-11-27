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
          id: '88a88bf8-ce06-4688-a9f5-7a1bda12e1a6',
          embedUrl:"https://app.powerbi.com/reportEmbed?reportId=88a88bf8-ce06-4688-a9f5-7a1bda12e1a6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUtPUkVBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
          accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzA5Y2UwYWYtZjZjZS00MDVkLTgyZWYtYzU4ZjBlNDM1MWFmLyIsImlhdCI6MTcwMDcyMTE3NCwibmJmIjoxNzAwNzIxMTc0LCJleHAiOjE3MDA3MjUwNzQsImFpbyI6IkUyVmdZTmdyTHI5VlByanZxWmhwOEpUalMwT1BBd0E9IiwiYXBwaWQiOiI0YzExOThkMi1kYzRjLTRlNmUtODc3OC04M2IzMDQ3MDdiOGYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zMDljZTBhZi1mNmNlLTQwNWQtODJlZi1jNThmMGU0MzUxYWYvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiJmNGViOWRlZi03NzZlLTQyYzUtOThlMy1jMmIxOTE1OTBjMDAiLCJyaCI6IjAuQVZZQXItQ2NNTTcyWFVDQzc4V1BEa05ScndrQUFBQUFBQUFBd0FBQUFBQUFBQUNmQUFBLiIsInN1YiI6ImY0ZWI5ZGVmLTc3NmUtNDJjNS05OGUzLWMyYjE5MTU5MGMwMCIsInRpZCI6IjMwOWNlMGFmLWY2Y2UtNDA1ZC04MmVmLWM1OGYwZTQzNTFhZiIsInV0aSI6IkZmd3lBdl9BSDB5eTljelFmZllmQVEiLCJ2ZXIiOiIxLjAifQ.qQOXAnnediroPOMRUSjckDvFUWV47t_j0luPiTrfU3TRmwy3gGR9rOX63ZMgRCNjKjc3fRNTZ96q2AQqt_nUFYtCUvsokSqDERHvWg7KFKV7b3j4tcSkziORD8x00Rnllo9hZqm9LSz4FvlROStureyAc9yVPV6rG5AxIF1979u_5F6L3moWQ-E6zAUkXBSqUg5c0hFZwCjWwQcIJDDNzGiSDL6hiJs4ERo-GdERH5NrrBaIdxdkNXfF3YMOi15fv-6Z_FWBfZ5RB0Pe9r3CvJWJqesAaB0cFGJcuHkj_m30P4EqJw3MMv-BJgre-R_oJGSCg8UnLyUC-qi_YTv1-w",
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