import React from 'react'
import Page1 from './pages/Page1'
import { Outlet } from 'react-router-dom'

function Myhome() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Myhome