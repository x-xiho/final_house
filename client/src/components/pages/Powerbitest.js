import React from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';

function Powerbitest() {

  return (
    <div>
      <PowerBIEmbed
        embedConfig={{
          type: 'report', // 보고서 타입
          id: '64847c3f-9d8c-43ee-8c69-e7bc8d46a8d0', // CCTV 파일
          embedUrl: "https://app.powerbi.com/reportEmbed?reportId=17fe5df0-9871-4479-b9fe-d317878995a8&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUVBU1QtQVNJQS1BLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",
          accessToken:"eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSIsImtpZCI6IjlHbW55RlBraGMzaE91UjIybXZTdmduTG83WSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5LyIsImlhdCI6MTY5OTI0MzkwNiwibmJmIjoxNjk5MjQzOTA2LCJleHAiOjE2OTkyNDg1MzgsImFjY3QiOjAsImFjciI6IjEiLCJhZ2VHcm91cCI6IjQiLCJhaW8iOiJBVFFBeS84VUFBQUFVbXdTSlJXZjhsMHFlMXdSZm80N2FwSlVFa2JuVVhQaDlRNnh3aG8xVzZWRmZXRzVJNmxQWHBmOGFZWUdydWp3IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiS2ltIiwiZ2l2ZW5fbmFtZSI6IkppaG8iLCJpcGFkZHIiOiIyMDMuMjUyLjIyMy4yNTMiLCJuYW1lIjoiS2ltSmlobyIsIm9pZCI6IjFjNzQ2N2E0LTFiMzItNGIyNS1hNmIxLTA2NTE1ODhlNTAzYSIsInB1aWQiOiIxMDAzMjAwMDQ5MDM2QzZGIiwicmgiOiIwLkFYRUF2TElKX1NDU2EweURjaUlMZTlVWUdRa0FBQUFBQUFBQXdBQUFBQUFBQUFCeEFNVS4iLCJzY3AiOiJ1c2VyX2ltcGVyc29uYXRpb24iLCJzaWduaW5fc3RhdGUiOlsia21zaSJdLCJzdWIiOiJwVnc3ZUdxbWFvY1RxWXlfRlF0YWFlSWdvd0M4c1lKVTJvRFB0MjBVdVZrIiwidGlkIjoiZmQwOWIyYmMtOTIyMC00YzZiLTgzNzItMjIwYjdiZDUxODE5IiwidW5pcXVlX25hbWUiOiJrb25nODhAZHVrc3VuZy5hYy5rciIsInVwbiI6Imtvbmc4OEBkdWtzdW5nLmFjLmtyIiwidXRpIjoieUtUbzBxTHltRWlMc1lXUlB4MWFBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19wbCI6ImtvLUtSIn0.myYTaZRB0bVEGyG76zgMh25YLG2TOstOi0sz1z42x7SOl34tIzY_zAyynjQKfFCNbSSY1dvc1et-V-G898sOtCSO6GPNfIHeQAqZ8P5MWnMiZcXKjkwLAL3SNLRPznrscxdA-3o0Zt8Z3Ns9CPrCx2V2hs2WhvJi4B8XIPRhxwfq9eJ_uJalcyWpfMtPWst9rjFQjZaWQb00i6bwYf8lJ_SDe_zRuydgCoacTyYgT23VxhA3K_Hl1diFoLvzad9Oit_BAFfVBh7f4QZyW9ThYXhelBG9gmDPkJjeUKTWaPeQtLeA5iFYUHOw0C8iKJ51AfE8wjzH_WEp1YxeFPpxtA",
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

export default Powerbitest;
