export const profile = {
  name: "鄭韋新",
  role: "前端工程師",
  location: "高雄・台灣",
  email: "popo51102@gmail.com",
  intro: "我是鄭韋新，擁有 3 年 React 開發經驗。善用 AI Agent 擴張一人開發的邊界，從介面、資料到部署，把複雜需求整理成清楚、可用的數位體驗。",
  approach: "從 React 生態系出發，保有對使用者與產品脈絡的敏感度；AI 則是我加速探索、驗證與交付的夥伴。",
  story: [
    "在 30 歲前往日本語言學校，是一次主動選擇陌生的挑戰。那段經驗訓練了我的獨立解題、快速適應與跨文化溝通，也讓我更確定：面對新的技術與環境，我願意先走出去，再把它學會。",
    "回到台灣後，我把這份韌性放進每一次實作。持續精進 React、Next.js、Tailwind CSS 與 Vue，並用 AI 工具突破一人開發的邊界。",
  ],
} as const;

export const projects = [
  { number: "01", type: "互動敘事", title: "共筆下一頁", subtitle: "互動式 AI 生成小說網站", description: "把閱讀變成共同創作。讀者不只翻頁，還能選擇故事走向，讓 AI 接續生成下一段敘事，形成每次都不同的閱讀路徑。", url: "https://nextstory.hoogaworld.com/", displayUrl: "nextstory.hoogaworld.com", tags: ["Next.js", "AI Agent", "Supabase", "Prompt Design"], image: "/projects/next-story.png", imageAlt: "共筆下一頁網站首頁畫面" },
  { number: "02", type: "資料視覺化", title: "日本即時氣象地圖", subtitle: "把氣象 API 轉成可探索的資訊介面", description: "串接即時氣象資料，將多城市資訊映射到互動地圖。用視覺層次簡化高密度數據，讓使用者一眼理解各地天氣差異。", url: "https://vue3-weather-zeta.vercel.app/", displayUrl: "vue3-weather-zeta.vercel.app", tags: ["Vue 3", "D3.js", "Weather API", "Data Viz"], image: "/projects/japan-weather.png", imageAlt: "日本即時氣象地圖與各縣市溫度畫面" },
  { number: "03", type: "自動化系統", title: "日本新品追蹤系統", subtitle: "從爬蟲、AI 辨識到前端展示", description: "整合連鎖餐飲新品資料，自動收集、辨識並整理成可瀏覽的內容。把繁瑣的情報蒐集流程變成一套可持續運作的產品。", url: "https://jpfood-tracker.vercel.app/", displayUrl: "jpfood-tracker.vercel.app", tags: ["Node.js", "Web Crawler", "AI Vision", "CI/CD"], image: "/projects/japan-food.png", imageAlt: "日本連鎖餐飲新品追蹤網站商品卡畫面" },
  { number: "04", type: "學習體驗", title: "JLPT 漢字練習遊戲", subtitle: "N1–N3 題庫的互動學習循環", description: "用即時回饋、題目節奏與清楚的進度感，讓單字與漢字練習不再只是背誦，而是一段可持續挑戰的遊戲體驗。", url: "https://hooga0828.github.io/JLPT-GAME/", displayUrl: "hooga0828.github.io/JLPT-GAME", tags: ["JavaScript", "Game UX", "JLPT", "Responsive"], image: "/projects/jlpt-game.png", imageAlt: "JLPT 漢字練習遊戲答題畫面" },
] as const;

export const capabilities = [
  { title: "前端產品開發", description: "React、Next.js、TypeScript、Vue 3；從元件架構到響應式介面。" },
  { title: "跨端與系統整合", description: "WebView JS Bridge、REST API、第三方登入，以及前後端協作流程。" },
  { title: "AI Agent 開發模式", description: "提示詞設計、AI 輔助編碼與自動化腳本，獨立完成含資料庫的產品。" },
  { title: "使用者體驗簡化", description: "具高齡使用者產品經驗，擅長把複雜資訊與操作路徑變得直覺。" },
] as const;

export const experience = [
  { period: "2022 — 2025", title: "前端工程師", company: "吉樂健康資訊科技", detail: "課程首頁與論壇改版、內部後台、WebView 協作、高齡使用者體驗優化" },
  { period: "2022", title: "前端工程師", company: "金富達科技", detail: "React、Styled Components、Google 登入與 API 串接" },
  { period: "2021", title: "前端工程師養成班", company: "資策會", detail: "前後端、資料庫、Git 與團隊專案開發" },
] as const;

export const techStack = ["React", "TypeScript", "Next.js", "Vue 3", "Tailwind CSS", "Supabase", "Node.js", "D3.js", "GitHub Actions", "Cloudflare"] as const;

export const contactHref = "https://mail.google.com/mail/?view=cm&fs=1&to=popo51102@gmail.com";
