import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Myhome() {

  const navigate = useNavigate();
  //로그인 안했으면 로그인 페이지로 강제 이동
  useEffect(() => {
    const userLogin = localStorage.getItem('name')

    if (userLogin === null) {
      // window.location.replace('/login')
      navigate('/login');
    }
  })


  return (
    <div>
      <Outlet />
    </div>
  )
}

export default Myhome