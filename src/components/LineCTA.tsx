export default function LineCTA() {
  // TODO: 実際のLINE公式アカウントの友だち追加URLに置き換える
  const lineAddUrl = "https://lin.ee/placeholder";

  return (
    <div className="cta-box">
      <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "12px", color: "var(--foreground)" }}>
        行動経済学をもっと学ぶ
      </h3>
      <p style={{ color: "var(--text-muted)", fontSize: "14px", marginBottom: "20px", lineHeight: "1.5" }}>
        LINE公式アカウントに登録すると、意思決定に役立つ行動経済学の豆知識が定期的に届きます！
      </p>
      <a 
        href={lineAddUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ 
          display: "inline-block",
          backgroundColor: "#06c755", 
          color: "white", 
          padding: "14px 24px", 
          borderRadius: "8px", 
          fontWeight: "bold",
          textDecoration: "none",
          width: "100%"
        }}
      >
        LINEで友だち追加する
      </a>
    </div>
  );
}
