"use client";

import { useEffect, useState } from "react";

type QuestionCardProps = {
  question: string;
  options: string[];
  correctIndex: number;
  onAnswer: (isCorrect: boolean) => void;
};

export default function QuestionCard({ question, options, correctIndex, onAnswer }: QuestionCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // 問題が変わったときに選択状態をリセットする
  useEffect(() => {
    setSelectedIndex(null);
  }, [question]);

  const handleSelect = (index: number) => {
    if (selectedIndex !== null) return; // すでに回答済みの場合は何もしない
    setSelectedIndex(index);
    onAnswer(index === correctIndex);
  };

  return (
    <div>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "24px", lineHeight: "1.6" }}>
        {question}
      </h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {options.map((option, index) => {
          let btnClass = "option-btn";
          if (selectedIndex !== null) {
            if (index === correctIndex) {
              btnClass += " option-correct";
            } else if (index === selectedIndex) {
              btnClass += " option-incorrect";
            }
          }

          return (
            <button
              key={index}
              className={btnClass}
              onClick={() => handleSelect(index)}
              disabled={selectedIndex !== null}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
