"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";
import ShareButtons from "../../components/ShareButtons";
import LineCTA from "../../components/LineCTA";
import questionsData from "../../data/questions.json";

function ResultContent() {
  const searchParams = useSearchParams();
  const scoreParam = searchParams.get("score");
  const score = scoreParam ? parseInt(scoreParam, 10) : 0;
  const total = questionsData.length;

  let level = "";
  let message = "";
  
  if (score === total) {
    level = "行動経済学マスター！🎓";
    message = "完璧です！あなたは心理の罠に惑わされない合理的な意思決定者です。";
  } else if (score >= total * 0.7) {
    level = "行動経済学の達人✨";
    message = "素晴らしい成績です！日常の多くのバイアスを回避できていますね。";
  } else if (score >= total * 0.4) {
    level = "行動経済学の学習者📚";
    message = "惜しい！いくつかの心理の罠に引っかかってしまったようです。";
  } else {
    level = "行動経済学の初心者🔰";
    message = "人間の直感は意外と騙されやすいもの。これを機に学んでみませんか？";
  }

  return (
    <div className="card" style={{ width: "100%", textAlign: "center" }}>
      <h1 className="title">クイズ結果</h1>
      
      <div style={{ margin: "32px 0" }}>
        <div style={{ fontSize: "64px", fontWeight: "bold", color: "var(--primary)", lineHeight: 1 }}>
          {score} <span style={{ fontSize: "24px", color: "var(--text-muted)" }}>/ {total}</span>
        </div>
        <div style={{ fontSize: "18px", marginTop: "8px" }}>正解</div>
      </div>
      
      <div style={{ padding: "24px", backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "12px", marginBottom: "32px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "8px", color: "var(--success)" }}>
          {level}
        </h2>
        <p style={{ color: "var(--foreground)", lineHeight: "1.6" }}>
          {message}
        </p>
      </div>

      <ShareButtons score={score} total={total} />
      
      <LineCTA />

      <div style={{ marginTop: "32px", borderTop: "1px solid var(--border)", paddingTop: "24px" }}>
        <Link href="/">
          <button className="btn-primary" style={{ backgroundColor: "var(--card-hover)", color: "var(--foreground)" }}>
            もう一度挑戦する
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <main className="container" style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Suspense fallback={<div style={{ textAlign: "center" }}>Loading...</div>}>
        <ResultContent />
      </Suspense>
    </main>
  );
}
