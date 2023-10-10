import React from 'react'
import PageGender from './pages/PageGender'
import { Outlet } from 'react-router-dom'

function Myhome() {
  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Myhome