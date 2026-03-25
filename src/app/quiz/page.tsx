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
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const currentQuestion = questionsData[currentIndex];
  const isLast = currentIndex === questionsData.length - 1;

  const handleAnswer = (correct: boolean) => {
    setIsCorrect(correct);
    setShowExplanation(true);
    if (correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (isLast) {
      router.push(`/result?score=${score}`);
    } else {
      setShowExplanation(false);
      setCurrentIndex((prev) => prev + 1);
    }
  };

  return (
    <main className="container" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="card" style={{ width: "100%" }}>
        <ProgressBar current={currentIndex + 1} total={questionsData.length} />
        
        <QuestionCard 
          question={currentQuestion.question}
          options={currentQuestion.options}
          correctIndex={currentQuestion.correctIndex}
          onAnswer={handleAnswer}
        />

        {showExplanation && (
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
