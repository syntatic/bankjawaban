import React from 'react'

const QuizField = () => {
  
  return (
    <div className='content'>
      <input type="text" placeholder='Soal' required />
      <textarea placeholder='Jawaban'/>
      <hr />
    </div>
  )
}

export default QuizField