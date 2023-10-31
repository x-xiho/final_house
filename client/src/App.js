import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Nav from './components/Nav'
import Main2 from './components/Main2'
import Myhome from './components/Myhome'
import Login from './components/Login'
import Mypage from './components/Mypage'

import Page0Start from './components/pages/Page0Start'
import Page1Sex from './components/pages/Page1Sex'
import Page2Age from './components/pages/Page2Age'
import Page3Family from './components/pages/Page3Family'
import Page4Marry from './components/pages/Page4Marry'
import Page5Hobby from './components/pages/Page5Hobby'
import Page6Sports from './components/pages/Page6Sports'
import Page7Tendency from './components/pages/Page7Tendency'
import PageEnd from './components/pages/PageEnd'
import PagePriority from './components/pages/PagePriority'




function App() {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route path="login" element={<Login />} />
        <Route element={<Nav />}>
          {/* <Route path="/" element={<Main />} /> */}
          <Route path="/" element={<Main2 />} />

          <Route path="myhome" element={<Myhome />}>
          <Route index element={<Page0Start/>} />
            <Route path="pagesex" element={<Page1Sex/>} />
            <Route path="pageage" element={<Page2Age/>} />
            <Route path="pagefamily" element={<Page3Family/>} />
            <Route path="pagemarry" element={<Page4Marry/>} />
            <Route path="pagehobby" element={<Page5Hobby/>} />
            <Route path="pagesports" element={<Page6Sports/>} />
            <Route path="pagetendency" element={<Page7Tendency/>} />
            <Route path="pageend" element={<PageEnd />} />
          </Route>

          <Route path="mypage" element={<Mypage />} />
          <Route path="test" element={<PagePriority/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App