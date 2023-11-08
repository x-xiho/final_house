import React from 'react'
import { useNavigate } from 'react-router-dom'

function Page9Env() {
  const navigate = useNavigate();
  return (
    <div>
      <button className='page1-btn' onClick={() => navigate('/myhome/pagecar')}>이전</button>
      <button className='page1-btn' onClick={() => navigate('/myhome/pagewelfare')}>다음</button>
    </div>
  )
}

export default Page9Env