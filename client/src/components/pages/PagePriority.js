import React from 'react'
import '../PagesCss/PageCss.css'

function PagePriority() {

  const handleSubmit = (e) => {
    e.preventDefault(); //페이지 새로고침 방지

    if (selectedOption !== null) {
      localStorage.setItem('priority', selectedOption);
      navigate('pageage');
    }

    axios.post('http://localhost:4000/save/UserInfo', { priority: selectedOption })
      .then((response) => {
        console.log(response.data);
      })

      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div>
      {/* 우선 순위에 대한 질문 */}
      <div className='page1-text'>
        <div className='page1-num'>Q.0n</div>
        <div className='page1-qurry'>거주지를 고를때 나의 우선순위는?</div>
      </div>

      <form onSubmit={handleSubmit} className='page1-form'>
        <div className='page-radioStyle'>
          <label className='radioStyle'>
            <input type="radio"
              name="priority"
              value="남성"
              checked={selectedOption === "남성"}
              onChange={handleRadioChange} />
              <span>남성</span>
          </label>

          <label className='radioStyle'>
            <input type="radio"
              name="priority"
              value="여성"
              checked={selectedOption === "여성"}
              onChange={handleRadioChange} />
              <span>여성</span>
          </label>
        </div>

        <div className='Nextbtn'>
          <button type='submit'
            disabled={selectedOption === null}
            className='page1-btn'>
            다음
            </button>
        </div>
      </form>

    </div>
  )
}

export default PagePriority