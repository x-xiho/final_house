import React, { useState, useEffect } from 'react';
import { PowerBIEmbed } from 'powerbi-client-react';
import { models } from 'powerbi-client';
import axios from 'axios';

// 도봉구 샘플
function Powerbitest() {
  // const accessToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSIsImtpZCI6IlQxU3QtZExUdnlXUmd4Ql82NzZ1OGtyWFMtSSJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzA5Y2UwYWYtZjZjZS00MDVkLTgyZWYtYzU4ZjBlNDM1MWFmLyIsImlhdCI6MTcwMDczNjQyOCwibmJmIjoxNzAwNzM2NDI4LCJleHAiOjE3MDA3NDAzMjgsImFpbyI6IkUyVmdZTGhmbmU4c0lQcDFJZE9tV1RFNnBvY3JBQT09IiwiYXBwaWQiOiI0YzExOThkMi1kYzRjLTRlNmUtODc3OC04M2IzMDQ3MDdiOGYiLCJhcHBpZGFjciI6IjEiLCJpZHAiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zMDljZTBhZi1mNmNlLTQwNWQtODJlZi1jNThmMGU0MzUxYWYvIiwiaWR0eXAiOiJhcHAiLCJvaWQiOiJmNGViOWRlZi03NzZlLTQyYzUtOThlMy1jMmIxOTE1OTBjMDAiLCJyaCI6IjAuQVZZQXItQ2NNTTcyWFVDQzc4V1BEa05ScndrQUFBQUFBQUFBd0FBQUFBQUFBQUNmQUFBLiIsInN1YiI6ImY0ZWI5ZGVmLTc3NmUtNDJjNS05OGUzLWMyYjE5MTU5MGMwMCIsInRpZCI6IjMwOWNlMGFmLWY2Y2UtNDA1ZC04MmVmLWM1OGYwZTQzNTFhZiIsInV0aSI6IlYwZUxETnVFSDBLZnU4UERqS0RuQUEiLCJ2ZXIiOiIxLjAifQ.gGyjz2GG3zW7IhCQCZsx1s4XSprlfwrP3CW-aw-ER12ETtzaE0G7iEBNAmNdQAX5vBdUIdJp4B9y-MN5TKSjBywfSo-_FGd7OWwTpjbyTWf8wmknX2gCoon2PwjX5chYssZHNkEgOHoXUA2dxz3oFWySrua1_gGp0KxkL3-KKZSSsXyoSxgg61d00jur4P18tILENPX1Lt8IlGeheFmwfxEvLzf4dKM5wEf2hTLUcY2C7k961chy3IzJ5ar07YiD6pY1FI7DM-mKwGpUTe-dxiqdGG2ILi9do4FpBook3fupXqL962yNO3g4pE6vxPoUsqbFTsSstuh3PHsAJdClLg'; // 여기에 Access Token 값을 적어주세요

  // const requestBody = {
  //   username: 'kibwa23_01@kibwaaisw.onmicrosoft.com',
  //   roles: ['Viewer']
  // };
  
  // const tokenRequestUrl = 'https://api.powerbi.com/v1.0/myorg/groups/f2b70bfb-8415-4d39-9862-0684567bf136/reports/88a88bf8-ce06-4688-a9f5-7a1bda12e1a6/GenerateToken';
  
  // axios.post(tokenRequestUrl, requestBody, {
  //   headers: {
  //     Authorization: `Bearer ${accessToken}`
  //   }
  // })
  //   .then(response => {
  //     console.log('토큰을 성공적으로 받았습니다:', response.data);
  //     // 받은 토큰을 처리하는 로직 추가
  //   })
  //   .catch(error => {
  //     console.error('토큰을 받는 동안 에러 발생:', error);
  //   });

    //////////////////////////////////////////////////////////////
  const requestBody = {
    username: "kibwa23_01@kibwaaisw.onmicrosoft.com",
    roles: [
      "Viewer"
    ]
  };
  
  const tokenRequestUrl = 'https://api.powerbi.com/v1.0/myorg/groups/f2b70bfb-8415-4d39-9862-0684567bf136/reports/88a88bf8-ce06-4688-a9f5-7a1bda12e1a6/GenerateToken';
  
  axios.post(tokenRequestUrl, requestBody)
    .then(response => {
      // 요청 성공 시 처리
      console.log('토큰을 성공적으로 받았습니다:', response.data);
      // 받은 토큰을 처리하는 로직 추가
    })
    .catch(error => {
      // 요청 실패 시 처리
      console.error('토큰을 받는 동안 에러 발생nn:', error);
    });


  return (
    <div>
      <PowerBIEmbed
        embedConfig={{
          type: 'report', // 보고서 타입
          id: '88a88bf8-ce06-4688-a9f5-7a1bda12e1a6',
          embedUrl:"https://app.powerbi.com/reportEmbed?reportId=88a88bf8-ce06-4688-a9f5-7a1bda12e1a6&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUtPUkVBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19",
          accessToken:"H4sIAAAAAAAEAB2Wxa7FCo5F_-VNU1KYSqpBmJkzCzPzafW_962eW7K8vCzv__nHzr5xycp__v0PVJxzQW-nGNAOCeRRZa3mud8a6zgaXH0NWF1J8JMud7x6ATpjzt-z8LaJrqUJZaksnkJvtc0Bz6czBUxeut3uC08-zxcykY1i-iwe1BK1T_fK_HuPd-MkbA1PZXkCgNRUO9czsQGS7tLnYs68bAySynjb67B4n7c7Ba68To2PfYcDwtItB5x83AWxq3BXI1K4Z55nyspEB7hZiyKEGn7P37XxR2aHaHv8oCPzAcrxekWnN2OqhdFrbhIHgPsAWeHGvspBVW__oWO__ZQokliQxcuse3YMrk2625OfI-OyVx1OUW2_iyRgJMOMh8U0zcRwQjltNo1k_nOGFCy86sa9Xt49VctQ26UHP99S7goOfjDs3mWJ_skqFCNvecveclSzYdX7IjzQdMldphvrdwqcdJamcxKSGGEwzvmhiOT8hMB0ZmVfdgOJUWtM_NV0LJatnRTQtw0RH1EtNK87u9_LCb-R06TapdorxTbM_xQhOUjdcACMMnj1siAitiyDNQNeT7e6aho-r4Z657-njDrEpNZ2JeirGzCV4K5xj10rCW4GRTky-naH69b2qRH-254SF3AV_-o8hqYvbW-hQEeR4SYJhKb4QE8-S0bJz3f9Q3VFPs8S37u0gamineHVvxNFIiBp5b3oeAijXbpBGnlon-Mk7mZ8rsuIAPU813-yLAyD7-UyAaM6EX5ULmk_K8AtdcpAdKOTwIQXDHXH6bJB9c3fExDQZJCOtXzMNlNoPWvBgIhtWLy7iQWcgbEwneeBPEh9KFQOJPsgFdMx2G2pz28dJWEr71hOFcQfsvyb6MZ3Plv8_oJ0PIbJ2fKPuarmirPXQkLZpzvZWt9_kARrGZ_KnOfHzhVvzfBTLAkRovP8M8BQggVutNz8aKXFB6bNz7A67OoG0RNqRthKY1wImt72DYlg7m6_rMw6Q847945fE2aeAPDnJea5iO9JuTo6LjRxMn0lbdX5cFTp5Zny_gmY6H1iGwNyYgw70yT61jfym72fEz6rdT1J-l1nRzKwVaSPjoPTmMXqK2L3hjwXMiBg5vMgGinGtk42ufLtpBh_DerJK5AWo-RnY1mmk94b4om-p6u5s_VNL6unH7Hers9noYx9qw-aAcU7pOLXuUmlq_C7tSlIz6TXVA2ndEgs92aAYC1a1UYtkL9lhZMmex3F-V48mizZqNmg9jfMe8-6mIQfOGosxMCTv0dDIHo04dy3ASH3RebytzEQ1INe0i8tQAINZibkAJszTiyurPkHVYuDEPkisK2AWUI_tCGHSEqKppMhIbOy1UzfAyUky0UtRbC0-Me4ryoh4LrT1Oos7I7m72f7ShjEVRKUyah6Yr8eAOZgERsx74oCDlCx3DO09UFJxvJOhNlUhk9CDeKKIz4RL_1uuoduUWydRlGMLygAHGUxPYD_hrbp_OVuzVbmZmZqBO26V7fBZ0vWAeguCdE28NmexKcux4tFMdc69mcn1r2Sw7bE7HXBdrZw3d2iQFO8qKWa2wXsHb1cfb9FKIcmZ1vDC-RisEP6mJmlZpZboQH1QOtY_ErYSSX-lHhComvUqNVOi6jgwypD9glqyNhgf-f-JdUwrHk-n3MZenql4PfiZtaolM_U8G0mX0p3O0aU-GgTyxFI-5LL6uTnexpdDhu7B1Z-gL-ph8pZrtHYScgeZhbLlRs1yHuw_qBA5EHjnGbfmUmyWuYeQrwhxO3SwZ8vNSYRalb5XQr_EpJdBCTeplk3wHk6by1pgdo9vvVz004hmWUHpBPFwh6blJw40s2lDTOX4_cv22y6bn-uGbczYa4oEzb1Fs9iiAzMnyo_vW3nI-fXAbLBksj9UDwncXPeSVqC_EwP6NKPYwyzcBO_0pts1uMEZha-T3QngktZCVKHLayYfIOPYqetZKChaJon5Ihz59bKDqKLSo6UJoUgMseCbZR4ReDAEqURe8BiBS46-Ep6ga-Rbu55nnCNZdwq3vgIrkNxVLLtaWbRuUQLZ7TYCWRfWt7TELroSsPBQe11lpV0CFAojUCkifQKvGGI8tYB94nXbDdWQ7kaQyVOyL75DIw-qzBh0QNem8DZJcNts9urpeqksvAci5vJKBOGe4A_hNEtBE9wyobbCVqZDHXEh-1Ck4oDwK3l777quGrq8GrW47YFruIhiRYCrQv48U1iQdj9AWNCv8n_gkGfV3rEveJk_9mUU74fCVPm3MKjllGKL9MieIoxCWCXF6saj_eIGc3fVvfx76FxJytIN2eroE_pJoqVeL1UtJcDSwruKdBidFXSuh89RNebh-xE-FdCZkU7_tqnebOkl5YEuJ3T5AAS-Zcg-RhxCjZWbbMg2jNazJb0RnK4V33Dk6ht8Kv2TmTCWUANNvo17fzSxz2_7v4JTWHkfUZqoXG7cNnhhbVGY7UnvOIzYOemMT9GALlHFBGj1Z2KIz81455AwrNPguXuFH9Hn8Rs5iW8bI_NX5fA1--6_6xnEJXqM5NRMjfEnMDH8UIgLvsEGm0zRc8TLydKMWlFEbWd2ETxBxrhhvgtp90rJ8kX3mAcRDH6MJhwgf57dAKCa3qJuH_-9Q-3f-u5aNX3FwcPV3c4xPZCqmQkVgy0HEJe5C9r7SeKETh4xTNPtVP67rxcvH1rsYysigjuK9RBB5_WPn0wInIMyPSYoaQASVdn3mc2Iix_rUPG8WivM5VefOJlzAuq_UlFQ4NAymFA5SmPIGtYiXkSpPGPFalXiTgshM1sNk1FBWvvnr99yCXfrwMIiUFcUu3gjBqlPjzE958N4zCQZtIgfGDluaQ5HjSwmaoQak_10kuh0-Vx8lCx-pP48-w2pHxDg7C6f1FRJXEnPIWajfeyoEI2b2mUivPBD_3MOLm-AljkKCfBk2o1DptMQwVmOlSti2eavrWk5QT3Ls-FBmTS1FZg1DgQsMMsef7zn_9i_ta22pXwjzJm5v4fuveBIIVRwbSi-41u_r_K65o5O6-9-iuL_1QPYHg-HWDLvSjgsusXYslixB-BJePpCGXGo_bbbeBi60i72tza5AUvw5FDpI5xLDUsQ11bHfXly1-IK5-ZJyVszJ4kTwQfrje8nTTXIsakDSdC_qjH2xPMbloXnXlrfmg9cX5hizw9Nz7gBogocSDcvcA6NvSXwo7e6nUvQBIZXSkg2V0iB-a-d2Wefr8dBD7J3YD-4BNgL_-ogXefb5lHx4erMjyiH6QURKinXezl4vc7ic2gGTSEieGM0AhJ_s7LloQqLNAN5naPYRv5gnbs3HD7iut4Smg5mXZUd02VI2BaVz467HpFrFD9YbV8TYzfqDOU1AWYCIAdaACDJf0X8__-H7oo6JYCDQAA.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUtPUkVBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZXhwIjoxNzAwNzQ2NzY0LCJhbGxvd0FjY2Vzc092ZXJQdWJsaWNJbnRlcm5ldCI6dHJ1ZX0=",
          tokenType: models.TokenType.Embed,
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

export default Powerbitest