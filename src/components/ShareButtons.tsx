export default function ShareButtons({ score, total }: { score: number; total: number }) {
  const text = encodeURIComponent(`行動経済学クイズで${total}問中${score}問正解しました！あなたも意思決定力を試してみませんか？`);
  const url = encodeURIComponent(typeof window !== "undefined" ? window.location.origin : "https://example.com");

  const xUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
  const lineUrl = `https://social-plugins.line.me/lineit/share?url=${url}&text=${text}`;

  return (
    <div className="share-btn-group">
      <a href={xUrl} target="_blank" rel="noopener noreferrer" className="share-btn share-x">
        Xでシェア
      </a>
      <a href={fbUrl} target="_blank" rel="noopener noreferrer" className="share-btn share-fb">
        Facebook
      </a>
      <a href={lineUrl} target="_blank" rel="noopener noreferrer" className="share-btn share-line">
        LINE
      </a>
    </div>
  );
}
