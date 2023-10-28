import React from 'react'
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

// 도봉구 샘플
function PowerBI() {
  return (
    <div>
      <PowerBIEmbed
        embedConfig={{
          type: 'report', // 보고서 타입
          id: '64847c3f-9d8c-43ee-8c69-e7bc8d46a8d0', // CCTV 파일
          embedUrl: "https://app.powerbi.com/reportEmbed?reportId=64847c3f-9d8c-43ee-8c69-e7bc8d46a8d0&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
          accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5LyIsImlhdCI6MTY5ODUwOTQ3MCwibmJmIjoxNjk4NTA5NDcwLCJleHAiOjE2OTg1MTM2ODksImFjY3QiOjAsImFjciI6IjEiLCJhZ2VHcm91cCI6IjQiLCJhaW8iOiJBVFFBeS84VUFBQUF3RkVqTWFMendNa0ZiN1c2YWRjM3BIZnlhYzIwek1XZFlCRVk3V1F5NWY5VXBsWkwwZ3RpUC9udFpJR3BudGNZIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS2ltIiwiZ2l2ZW5fbmFtZSI6IkppaG8iLCJpcGFkZHIiOiIyMjEuMTU0LjI0LjgxIiwibmFtZSI6IktpbUppaG8iLCJvaWQiOiIxYzc0NjdhNC0xYjMyLTRiMjUtYTZiMS0wNjUxNTg4ZTUwM2EiLCJwdWlkIjoiMTAwMzIwMDA0OTAzNkM2RiIsInB3ZF9leHAiOiI2NTUzNiIsInB3ZF91cmwiOiJodHRwczovL3BvcnRhbC5taWNyb3NvZnRvbmxpbmUuY29tL0NoYW5nZVBhc3N3b3JkLmFzcHgiLCJyaCI6IjAuQVhFQXZMSUpfU0NTYTB5RGNpSUxlOVVZR1FrQUFBQUFBQUFBd0FBQUFBQUFBQUJ4QU1VLiIsInNjcCI6InVzZXJfaW1wZXJzb25hdGlvbiIsInN1YiI6InBWdzdlR3FtYW9jVHFZeV9GUXRhYWVJZ293QzhzWUpVMm9EUHQyMFV1VmsiLCJ0aWQiOiJmZDA5YjJiYy05MjIwLTRjNmItODM3Mi0yMjBiN2JkNTE4MTkiLCJ1bmlxdWVfbmFtZSI6Imtvbmc4OEBkdWtzdW5nLmFjLmtyIiwidXBuIjoia29uZzg4QGR1a3N1bmcuYWMua3IiLCJ1dGkiOiJ4b0Q3TTlfOE9reWJIaTNNQ21HUkFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXSwieG1zX3BsIjoia28tS1IifQ.ttgTvigmTyPtZRSqAaZSBuP_tUJufARvAIWmz-HgRcbtGvVB41Lt_VYpYnSKxLMrfXslwkCCFD9qo3rz-VzdCwBv8T0C30hVa3VenUHofmxF9wnh7yA6TrO9c4qsbvpwmCpAPc9EylvyCaTThtDHYR4ORhOVaLlNZs8q9ADhTprZ_zLGbfNxr4M7ykdyMNxFRF8wQd1OfTLUGcy2U-wFW4QU_U7_m1LIqTWV7_IN8VRJfX5KI22UBY9UdpMXzUDg9bpGJpHqHXQLKI0KN1_BRg1fq29_nRiXoFiCLwYayTBHm6n68iUFoExuTKJ8tNcfXeqGJzMfUXOae6920YqEew",
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