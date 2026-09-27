# エビデンス一覧（document-design スキル用）

確度ラベル：◎ 強い（複数研究・メタ分析・公的基準）／○ 中程度（査読付きの単独〜少数研究）／△ 弱い・要注意（経験則、追試失敗、出典不明）

---

## 0. 元ネタ「12pt→14ptで11%早く読める」の検証結果

- **判定：△ 数字の一次出典は確認できず。方向性（14pt の方が読みやすい）は研究で支持される。**
- 最も近い研究は下記 1-1（Bernard et al. 2001）。14pt は 12pt より有意に読みやすく、好まれた。ただし読書時間の差は「限界的な交互作用」で、12pt セリフ体だけが 14pt より有意に遅かった。対象は高齢者・画面上の文章で、「11%」という数字は論文要旨には出てこない。
- 資料に書くなら：「14pt は 12pt より読みやすいという研究がある（Bernard et al., 2001、高齢者対象）」程度に留める。

---

## 1. 文字サイズ・行間・行長

### 1-1. Bernard, Liao & Mills (2001) ○
*The effects of font type and size on the legibility and reading time of online text by older adults.* CHI '01 Extended Abstracts.
- 高齢者が 12pt / 14pt、セリフ体 / サンセリフ体の画面上の文章を読んだ。
- 14pt の方が有意に読みやすく（legibility）、好まれた。12pt セリフ体は 14pt より読むのが遅かった。
- 推奨：高齢の読み手には 14pt。
- https://dl.acm.org/doi/10.1145/634067.634173

### 1-2. Rello, Pielot & Marcos (2016) ○
*Make It Big! The Effect of Font Size and Line Spacing on Online Readability.* CHI 2016.
- 104 人、Wikipedia 記事、フォントサイズ 10/12/14/18/22/26pt × 行間 0.8/1.0/1.4/1.8、アイトラッキング計測。
- 18pt 以上で読みやすさ（アイトラッキング指標）と理解度が有意に向上。著者の結論は「18pt にせよ」。
- 行間は両極端（0.8 と 1.8）が読みやすさを損なう。
- https://www.semanticscholar.org/paper/6d76a24fd2ddb58aaec63d9142f1b9171021787f

### 1-3. Dyson & Haselgrove (2001) ○
*The influence of reading speed and line length on the effectiveness of reading from screen.* International Journal of Human-Computer Studies, 54(4).
- 1行 25 / 55 / 100 字で比較。55 字が最も効果的（100 字より理解度が高く、読みも速い）。速度と正確さのトレードオフはなかった。
- 日本語への換算は目安（全角 25〜40 字程度）。日本語での直接の検証ではない。
- https://www.sciencedirect.com/science/article/abs/pii/S1071581901904586

### 1-4. Wallace et al. (2022) ○（補足）
*Towards Individuated Reading Experiences: Different Fonts Increase Reading Speed for Different Individuals.* ACM TOCHI.
- 「万人に最適なフォント」はなく、個人に合ったフォントで読書速度が平均 35% 変わった。→ 一般論の数字を過信しない理由。
- https://dl.acm.org/doi/10.1145/3502222

### 1-5. WCAG 2.2（W3C） ◎（公的基準）
- 1.4.3 コントラスト（最低限）：通常文字 4.5:1、大きな文字 3:1。
- 1.4.12 テキストの間隔：行間は文字サイズの 1.5 倍以上にしても崩れないこと。
- 1.4.1 色の使用：色だけで情報を伝えない。
- https://www.w3.org/TR/WCAG22/

---

## 2. 読みやすさ＝信じやすさ・やる気（処理流暢性）

### 2-1. Reber & Schwarz (1999) ○
*Effects of perceptual fluency on judgments of truth.* Consciousness and Cognition, 8, 338–342.
- 「Osorno はチリにある」のような文を、背景とのコントラストが高い色／低い色で提示。見やすい文は「正しい」と判断される率が偶然より有意に高く、見にくい文は偶然レベル。
- → 薄いグレー文字は「読みにくい」だけでなく「信じられにくい」。
- https://pubmed.ncbi.nlm.nih.gov/10487787/

### 2-2. Song & Schwarz (2008) ○
*If it's hard to read, it's hard to do: Processing fluency affects effort prediction and motivation.* Psychological Science, 19, 986–988.
- 運動の手順を Arial（読みやすい）と Brush 体（読みにくい）で提示。読みにくいフォント群は「時間がかかる・大変そう」と見積もり、習慣にする意欲も低かった。
- → 行動してほしい手順書・申込案内ほど読みやすい書体に。
- https://pubmed.ncbi.nlm.nih.gov/19000208/

### 2-3. 反論とその顛末：「読みにくい方が覚える」説 ✗
- Diemand-Yauman, Oppenheimer & Vaughan (2011) *Fortune favors the bold (and the italicized)* は、読みにくいフォントで記憶成績が上がると報告。https://pubmed.ncbi.nlm.nih.gov/21040910/
- しかし Meyer et al. (2015) *Disfluent fonts don't help people solve math problems*（JEP: General）は元実験＋16 の追試、計 17 実験をプールして効果なし。https://digitalcommons.chapman.edu/esi_pubs/96/
- Eitel et al. (2014) *Fortune is fickle: null-effects of disfluency on learning outcomes* も効果なし。https://link.springer.com/article/10.1007/s11409-015-9151-5
- → 資料では採用しない。

---

## 3. 詰め込まない・構造化する（マルチメディア学習の原理）

### 3-1. Mayer の一貫性原理（Coherence）◎
- 目的に不要な素材（面白いが無関係な話、装飾画像、BGM）を除いた方が深く学べる。
- Mayer & Fiorella のまとめで 23 件中 23 件で支持、効果量の中央値 d = 0.86。近年のメタ分析でも「誘惑的詳細（seductive details）」の悪影響は g ≈ −0.3〜−0.4 程度で確認。
- https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-reducing-extraneous-processing-in-multimedia-learning-coherence-signaling-redundancy-spatial-contiguity-and-temporal-contiguity-principles/CD5B7AE1279A9AB81F8EEBB53DBEC86E

### 3-2. Mayer の信号化原理（Signaling）○
- 構造を示す手がかり（見出し、強調、矢印）を加えると学習が深まる。28 件中 24 件で支持、効果量中央値 d = 0.41。
- ただし強調しすぎると手がかりとして機能しない → 強調は絞る。

### 3-3. 冗長性原理・空間的近接原理 ○
- 冗長性：ナレーション＋同じ文章の画面表示は、ナレーション＋図より学習が劣ることが多い（学習者が文章と音声を二重処理するため）。
- 空間的近接：図と対応する説明は離さず近くに置く。
- 出典は 3-1 と同じ章。

### 3-4. Garner & Alley (2013) ○ アサーション・エビデンス型スライド
*How the design of presentation slides affects audience comprehension: A case for the assertion-evidence approach.* International Journal of Engineering Education, 29(6), 1564–1579.
- 工学系学生 110 人。見出しを「主張の文」、本文を図で構成したスライド群は、従来の「名詞見出し＋箇条書き」群より理解度が高く、誤解が少なく、主観的認知負荷も低かった。1 週間後の遅延テストでも全問題タイプで上回った。
- https://writing.engr.psu.edu/ae_comprehension.pdf

### 3-5. Cowan (2001) ◎ 作業記憶の容量
*The magical number 4 in short-term memory.* Behavioral and Brain Sciences, 24(1).
- 一度に保持できるのは約 4 チャンク（Miller の「7±2」より小さい）。→ 箇条書きは 3〜4 個にまとめる。

### 3-6. Kalyuga, Ayres, Chandler & Sweller (2003) ○ 熟達化反転効果
*The expertise reversal effect.* Educational Psychologist, 38(1).
- 初心者に効く丁寧な補足は、熟練者には冗長で逆効果になりうる。→ 読み手のレベルで作り分ける。

---

## 4. 記憶・注意の法則（資料構成への応用）

- **系列位置効果**（Murdock, 1962）○：リストの最初と最後が記憶に残りやすい。→ 結論は冒頭と締めに。
- **フォン・レストルフ効果（孤立効果）**（von Restorff, 1933）○：周囲と異なる 1 項目は記憶に残りやすい。→ 強調は 1 点に絞るほど効く。
- **ゲシュタルトの近接の法則** ○：近いものは同じグループに見える。→ 余白でグループを表現する。

---

## 5. 数字の見せ方

- **Gigerenzer & Hoffrage (1995)** ○ *How to improve Bayesian reasoning without instruction: Frequency formats.* Psychological Review, 102(4).
  - 確率（%）より自然頻度（「1000 人中 10 人」）で示すと正しい推論が大幅に増えた。
- **Tufte (1983) データインク比** △：『The Visual Display of Quantitative Information』。装飾を削れという経験則。実験的検証は限定的で、最小化しすぎると記憶に残りにくいという反論もある（Bateman et al., 2010, CHI "Useful junk?"）。

---

## 6. 使わない方がいい「よく見る数字」

| 主張 | 状態 |
|---|---|
| 12pt→14pt で 11% 速く読める | 一次出典未確認。方向性のみ Bernard 2001 が支持 |
| 余白で理解度が 20% 上がる | 一次出典が確認しにくい。引用しない |
| 読みにくいフォントの方が記憶に残る | 大規模追試で否定（Meyer et al. 2015） |
| 人は 7±2 個まで覚えられる | 現在は約 4 個が有力（Cowan 2001） |
