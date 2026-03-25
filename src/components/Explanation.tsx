export default function Explanation({ 
  concept, 
  explanation, 
  isCorrect, 
  onNext, 
  isLast 
}: { 
  concept: string; 
  explanation: string; 
  isCorrect: boolean; 
  onNext: () => void; 
  isLast: boolean;
}) {
  return (
    <div className="explanation">
      <div style={{ 
        fontSize: "20px", 
        fontWeight: "bold", 
        marginBottom: "12px",
        color: isCorrect ? "var(--success)" : "var(--error)"
      }}>
        {isCorrect ? "✅ 正解！" : "❌ 不正解..."}
      </div>
      
      <div className="badge">{concept}</div>
      
      <p style={{ lineHeight: "1.6", marginBottom: "24px", color: "var(--foreground)" }}>
        {explanation}
      </p>
      
      <button className="btn-primary" onClick={onNext}>
        {isLast ? "結果を見る →" : "次の問題へ →"}
      </button>
    </div>
  );
}
