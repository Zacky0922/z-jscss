export function floatingFigure() {
  // 基本スタイル設定
  let sty = document.createElement("style");
  sty.appendChild(
    document.createTextNode(
      "@keyframes floatingFigure {" +
        [
          "0%",
          "{transform: translateY(0) rotate(0deg);}",
          "100%",
          "{transform: translateY(calc(-110vh - 200px)) rotate(720deg);}",
        ].join(" ") +
        "}"
    )
  );
  document.head.appendChild(sty);

  // UL枠設定
  let ul = document.createElement("ul");
  ul.setAttribute(
    "style",
    "position: fixed;" +
      "margin: 0;" +
      "padding: 0 5px;" +
      "top: 0;" +
      "left: 0;" +
      "overflow: hidden;" +
      "z-index: -100;"
  );
  ul.classList.add("h-100", "w-100");

  // パーティクル設定（画面幅に比例した数を生成。負荷を考慮してmax30）
  let count = Math.min(Math.round(window.innerWidth / 80), 30);
  let color = Math.round(Math.random() * 360); // HSL設定
  for (let i = 0; i < count * 3; i++) {
    let li = document.createElement("li");
    li.setAttribute(
      "style",
      [
        // 表示位置
        "position:absolute;",
        "display:block;",
        "list-style:none;",
        "opacity:0.7;",
        "bottom:-200px;",
        // floaterサイズ
        "padding:",
        Math.round(Math.random() * 60 + 15) + "px;",
        // 角丸四角の丸み具合
        "border-radius: ",
        Math.round(Math.random() * 25 + 20) + "%;",
        // 位置
        "left:" +
          Math.round((100 / (count + 1)) * i) +
          "%;" +
          // 色
          (Math.random() > 0.5
            ? "background-color:hsl(" +
              (color = (color + Math.round(Math.random() * 180 + 90)) % 360) +
              ",100%,80%);"
            : "border: 5px solid hsl(" +
              (color = (color + Math.round(Math.random() * 180 + 90)) % 360) +
              ",100%,80%);") +
          // 速度・時間差
          "animation:floatingFigure " +
          Math.round(Math.random() * 15 + 8) +
          "s linear " +
          +Math.round(Math.random() * 20) +
          "s infinite;",
      ].join(" ")
    );
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
}
