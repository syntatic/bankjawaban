import React from "react";
import QuizCard from "../components/Quiz_card";

const Quizzes = () => {
  const soal = "Lorem ipsum dolor sit amet consectetur adipisicing elit.";
  const jawaban =
    "Tenetur ut nisi incidunt explicabo, enim est ex tempore beatae nam ipsa rerum illo facere necessitatibus, totam libero laboriosam quam iure eveniet!";
  return (
    <div className="Quizzes">
      <div className="AppBar">
        <div className=""></div>
        <div className="search">
          <input type="text" />
          <button>Cari</button>
        </div>
        <button className="add">+</button>
      </div>

      <QuizCard
        matkul="Sistem Operasi"
        quiz="Quiz 1"
        soal={soal}
        jawaban={jawaban}
      />
      <QuizCard
        matkul="Sistem Operasi"
        quiz="Quiz 1"
        soal={soal}
        jawaban={jawaban}
      />
      <QuizCard
        matkul="Sistem Operasi"
        quiz="Quiz 1"
        soal={soal}
        jawaban={jawaban}
      />
      <QuizCard
        matkul="Sistem Operasi"
        quiz="Quiz 1"
        soal={soal}
        jawaban={jawaban}
      />
      <QuizCard
        matkul="Sistem Operasi"
        quiz="Quiz 1"
        soal={soal}
        jawaban={jawaban}
      />
    </div>
  );
};

export default Quizzes;
