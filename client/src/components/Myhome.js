import React from 'react'
import PageSex from './pages/Page1Sex'
import { Outlet } from 'react-router-dom'

function Myhome() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Myhome