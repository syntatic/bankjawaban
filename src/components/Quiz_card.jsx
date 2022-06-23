import React from 'react'

const QuizCard = ({matkul,quiz,soal,jawaban}) => {
  return (
    <div className='card'>
      <div className='name'>
        <h3 className='matkul'>{matkul}</h3>
        <h3 className='matkul'>{quiz}</h3>
      </div>
      <div className="soal">
        {soal}
      </div>
      <div className="jawaban">
        <h4>Jawaban</h4>
        {jawaban}
      </div>
      <hr />
    </div>
  )
}

export default QuizCard