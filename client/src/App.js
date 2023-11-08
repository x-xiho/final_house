import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Nav from './components/Nav'
import Main from './components/Main'
import Myhome from './components/Myhome'
import Mypage from './components/Mypage'
import Login from './components/Login'

import Page0Start from './components/pages/Page0Start'
import Page1Sex from './components/pages/Page1Sex'
import Page2Age from './components/pages/Page2Age'
import Page3Family from './components/pages/Page3Family'
import Page4Marry from './components/pages/Page4Marry'
import Page5Child from './components/pages/Page5Child'
import Page6Hobby from './components/pages/Page6Hobby'
import Page6Sports from './components/pages/Page6Sports'
import Page7Priority from './components/pages/Page7Priority'
import Page8Car from './components/pages/Page8Car'
import Page9Env from './components/pages/Page9Env'
import Page10Welfare from './components/pages/Page10Welfare'
import Page11Tendency from './components/pages/Page11Tendency'
import PageEnd from './components/pages/PageEnd'





function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="login" element={<Login />} />
        <Route element={<Nav />}>
          <Route path="/" element={<Main />} />

          <Route path="myhome" element={<Myhome />}>
            <Route index element={<Page0Start />} />
            <Route path="pagesex" element={<Page1Sex />} />
            <Route path="pageage" element={<Page2Age />} />
            <Route path="pagefamily" element={<Page3Family />} />
            <Route path="pagemarry" element={<Page4Marry />} />
            <Route path="pagechild" element={<Page5Child />} />
            <Route path="pagehobby" element={<Page6Hobby />} />
            <Route path="pagesports" element={<Page6Sports />} />
            <Route path="pagepriority" element={<Page7Priority />} />
            <Route path="pagecar" element={<Page8Car/>} />
            <Route path="pageenv" element={<Page9Env />} />
            <Route path="pagewelfare" element={<Page10Welfare />} />
            <Route path="pagetendency" element={<Page11Tendency />} />
            <Route path="pageend" element={<PageEnd />} />

          </Route>

          <Route path="mypage" element={<Mypage />} />


        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App