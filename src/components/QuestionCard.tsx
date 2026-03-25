"use client";

type QuestionCardProps = {
  question: string;
  options: string[];
  correctIndex: number;
  selectedAnswer: number | null;
  onAnswer: (index: number) => void;
};

export default function QuestionCard({ question, options, correctIndex, selectedAnswer, onAnswer }: QuestionCardProps) {
  const handleSelect = (index: number) => {
    if (selectedAnswer !== null) return;
    onAnswer(index);
  };

  return (
    <div>
      <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "24px", lineHeight: "1.6" }}>
        {question}
      </h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        {options.map((option, index) => {
          let btnClass = "option-btn";
          if (selectedAnswer !== null) {
            if (index === correctIndex) {
              btnClass += " option-correct";
            } else if (index === selectedAnswer) {
              btnClass += " option-incorrect";
            }
          }

          return (
            <button
              key={index}
              className={btnClass}
              onClick={() => handleSelect(index)}
              disabled={selectedAnswer !== null}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
