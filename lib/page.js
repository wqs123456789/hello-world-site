function renderPage() {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Hello World · Node.js on Vercel</title>
  <style>
    :root { color-scheme: dark; }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      font-family: ui-sans-serif, -apple-system, "Segoe UI", "Microsoft YaHei", sans-serif;
      background: radial-gradient(circle at 20% 10%, #1b2b53 0%, #0b1020 45%, #05070f 100%);
      color: #eaf0ff;
    }
    .card {
      text-align: center;
      padding: 56px 64px;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.04);
      border: 1px solid rgba(255, 255, 255, 0.12);
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
      backdrop-filter: blur(10px);
    }
    h1 {
      margin: 0;
      font-size: clamp(40px, 9vw, 88px);
      letter-spacing: -0.03em;
      background: linear-gradient(120deg, #7dd3fc, #c4b5fd 45%, #f9a8d4);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
    }
    p { margin: 18px 0 0; color: #93a4c4; font-size: 15px; }
    code {
      padding: 2px 8px;
      border-radius: 6px;
      background: rgba(255, 255, 255, 0.08);
      color: #bae6fd;
      font-size: 13px;
    }
  </style>
</head>
<body>
  <main class="card">
    <h1>Hello World</h1>
    <p>由 Node.js 生成 · 运行于 <code>Vercel</code></p>
  </main>
</body>
</html>`;
}

module.exports = { renderPage };
