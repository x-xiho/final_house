import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Nav from './components/Nav'
import Main from './components/Main'
import Myhome from './components/Myhome'
import Login from './components/Login'
import Mypage from './components/Mypage'

import PageGender from './components/pages/PageGender'
import Page2 from './components/pages/Page2'
import Page3 from './components/pages/Page3'
import PageEnd from './components/pages/PageEnd'
import PageAge from './components/pages/PageAge'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        
      <Route path="login" element={<Login />} />
        <Route element={<Nav />}>
          <Route path="/" element={<Main />} />

          <Route path="myhome" element={<Myhome />}>
            <Route index element={<PageGender/>} />
            <Route path="pageage" element={<PageAge/>} />
            <Route path="page2" element={<Page2 />} />
            <Route path="page3" element={<Page3 />} />
            <Route path="pageEnd" element={<PageEnd />} />
          </Route>

          <Route path="mypage" element={<Mypage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App