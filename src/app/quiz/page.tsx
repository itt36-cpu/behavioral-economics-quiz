"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "../../components/ProgressBar";
import QuestionCard from "../../components/QuestionCard";
import Explanation from "../../components/Explanation";
import questionsData from "../../data/questions.json";

export default function QuizPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  // 回答状況を配列で保持する（未回答はnull）
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(questionsData.length).fill(null));

  const currentQuestion = questionsData[currentIndex];
  const isLast = currentIndex === questionsData.length - 1;
  const currentAnswer = answers[currentIndex];
  const isAnswered = currentAnswer !== null;
  const isCorrect = currentAnswer === currentQuestion.correctIndex;

  // 動的にスコアを計算
  const score = answers.reduce<number>((acc, ans, index) => {
    return acc + (ans === questionsData[index].correctIndex ? 1 : 0);
  }, 0);

  const handleAnswer = (index: number) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[currentIndex] = index;
      return newAnswers;
    });
  };

  const handleNext = () => {
    if (isLast) {
      router.push(`/result?score=${score}`);
    } else {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <main className="container" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
      
      {currentIndex > 0 && (
        <button 
          onClick={handleBack}
          style={{ 
            position: "absolute", 
            top: "10px", 
            left: "20px", 
            color: "var(--text-muted)", 
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
            cursor: "pointer",
            fontWeight: "bold",
            background: "none",
            border: "none",
            padding: "8px",
            borderRadius: "6px",
            transition: "background 0.2s"
          }}
          onMouseOver={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.05)"}
          onMouseOut={(e) => e.currentTarget.style.backgroundColor = "transparent"}
        >
          ← 前の問題に戻る
        </button>
      )}

      <div className="card" style={{ width: "100%", marginTop: "30px" }}>
        <ProgressBar current={currentIndex + 1} total={questionsData.length} />
        
        <QuestionCard 
          question={currentQuestion.question}
          options={currentQuestion.options}
          correctIndex={currentQuestion.correctIndex}
          selectedAnswer={currentAnswer}
          onAnswer={handleAnswer}
        />

        {isAnswered && (
          <Explanation 
            concept={currentQuestion.concept}
            explanation={currentQuestion.explanation}
            isCorrect={isCorrect}
            onNext={handleNext}
            isLast={isLast}
          />
        )}
      </div>
    </main>
  );
}
