import React from 'react'
import QuizField from '../components/Quiz_field'

const AddIndie = () => {
  return (
    <div className='AddIndie'>
      <div className="AppBar">
        <h1>Tambah</h1>
        <button>Tambah</button>
      </div>
      <input type="text" placeholder='Quiz'className='quizName'/>

      <QuizField/>
    </div>
  )
}

export default AddIndie