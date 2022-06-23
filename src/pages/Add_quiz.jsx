import React from 'react'
import QuizField from '../components/Quiz_field'

const AddQuiz = () => {
  return (
    <div className='AddQuiz'>
      <div className="AppBar">
        <h1>Tambah</h1>
        <button>Tambah</button>
      </div>
      <div className="name">
        <input type="text" placeholder='Nama Quiz'/>
        <input type="text" placeholder='Matkul' />
      </div>
      <div className="qna">
        <QuizField/>
        <QuizField/>
        <QuizField/>
        <QuizField/>
      </div>
      <button>Tambah Soal</button>
    </div>
  )
}

export default AddQuiz