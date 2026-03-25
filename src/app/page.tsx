import Link from "next/link";

export default function Home() {
  return (
    <main className="container" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="card" style={{ width: "100%", textAlign: "center", padding: "48px 32px" }}>
        
        <div style={{ fontSize: "48px", marginBottom: "16px" }}>🤔</div>
        
        <h1 className="title">
          あなたの意思決定力を試そう<br />
          <span style={{ color: "var(--primary)" }}>行動経済学クイズ</span>
        </h1>
        
        <p className="subtitle">
          人は自分が思っているほど合理的な判断ができていません。日常の選択に潜む「心理の罠」を10問のクイズで暴いてみましょう。（所要時間：約3分）
        </p>

        <Link href="/quiz">
          <button className="btn-primary" style={{ padding: "18px 0", fontSize: "1.2rem", maxWidth: "300px", margin: "0 auto", display: "block" }}>
            クイズを始める
          </button>
        </Link>
        
      </div>
    </main>
  );
}
