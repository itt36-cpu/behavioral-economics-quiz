export default function ProgressBar({ current, total }: { current: number; total: number }) {
  const percentage = Math.round((current / total) * 100);
  
  return (
    <div style={{ marginBottom: "24px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "16px", color: "var(--foreground)", fontWeight: "bold", marginBottom: "8px" }}>
        <span>第 {current} 問</span>
        <span style={{ color: "var(--text-muted)", fontSize: "14px" }}>全 {total} 問</span>
      </div>
      <div className="progress-bar-bg">
        <div 
          className="progress-bar-fill" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
