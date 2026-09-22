import {
  ArrowDown, ArrowUpRight, Bot, Code2, Languages, Mail, Network, Workflow,
} from "lucide-react";
import { ThemeSwitcher } from "../components/theme-switcher";

const projects = [
  { number: "01", kicker: "AI STORYTELLING", title: "共筆下一頁", subtitle: "互動式 AI 生成小說網站", description: "把閱讀變成共同創作。讀者不只翻頁，還能選擇故事走向，讓 AI 接續生成下一段敘事，形成每次都不同的閱讀路徑。", url: "https://nextstory.hoogaworld.com/", displayUrl: "nextstory.hoogaworld.com", tags: ["Next.js", "AI Agent", "Supabase", "Prompt Design"], tone: "coral", image: "/projects/next-story.png", imageAlt: "共筆下一頁網站首頁畫面" },
  { number: "02", kicker: "DATA VISUALIZATION", title: "日本即時氣象地圖", subtitle: "把氣象 API 轉成可探索的資訊介面", description: "串接即時氣象資料，將多城市資訊映射到互動地圖。用視覺層次簡化高密度數據，讓使用者一眼理解各地天氣差異。", url: "https://vue3-weather-zeta.vercel.app/", displayUrl: "vue3-weather-zeta.vercel.app", tags: ["Vue 3", "D3.js", "Weather API", "Data Viz"], tone: "cyan", image: "/projects/japan-weather.png", imageAlt: "日本即時氣象地圖與各縣市溫度畫面" },
  { number: "03", kicker: "AUTOMATION SYSTEM", title: "日本新品追蹤系統", subtitle: "從爬蟲、AI 辨識到前端展示", description: "整合連鎖餐飲新品資料，自動收集、辨識並整理成可瀏覽的內容。把繁瑣的情報蒐集流程變成一套可持續運作的產品。", url: "https://jpfood-tracker.vercel.app/", displayUrl: "jpfood-tracker.vercel.app", tags: ["Node.js", "Web Crawler", "AI Vision", "CI/CD"], tone: "lime", image: "/projects/japan-food.png", imageAlt: "日本連鎖餐飲新品追蹤網站商品卡畫面" },
  { number: "04", kicker: "LEARNING EXPERIENCE", title: "JLPT 漢字練習遊戲", subtitle: "N1–N3 題庫的互動學習循環", description: "用即時回饋、題目節奏與清楚的進度感，讓單字與漢字練習不再只是背誦，而是一段可持續挑戰的遊戲體驗。", url: "https://hooga0828.github.io/JLPT-GAME/", displayUrl: "hooga0828.github.io/JLPT-GAME", tags: ["JavaScript", "Game UX", "JLPT", "Responsive"], tone: "violet", image: "/projects/jlpt-game.png", imageAlt: "JLPT 漢字練習遊戲答題畫面" },
] as const;

export default function Home() {
  return (
    <main>
      <div className="noise" aria-hidden="true" />
      <nav className="site-nav" aria-label="主要導覽">
        <a href="#top" className="wordmark" aria-label="回到頁首"><span>W</span><i />S</a>
        <div className="nav-links"><a href="#projects">作品</a><a href="#expertise">專長</a><a href="#story">關於</a></div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <div className="availability"><span /> FRONTEND ENGINEER · KAOHSIUNG</div>
          <h1>把想法做成<br /><em>真正能用</em>的產品。</h1>
          <p className="hero-lead">我是鄭韋新，擁有 3 年 React 開發經驗。善用 AI Agent 擴張一人開發的邊界，從介面、資料到部署，把複雜需求整理成清楚、可用的數位體驗。</p>
          <div className="hero-actions"><a href="#projects" className="primary-button">看我的實作 <ArrowDown /></a></div>
        </div>
        <div className="hero-console" aria-label="開發能力摘要">
          <div className="console-bar"><span><i /><i /><i /></span><b>build-profile.ts</b><span>⌘ K</span></div>
          <div className="console-body">
            <p><span>01</span><b>const</b> engineer = &#123;</p><p><span>02</span>&nbsp;&nbsp;name: <em>&quot;鄭韋新&quot;</em>,</p>
            <p><span>03</span>&nbsp;&nbsp;focus: [<em>&quot;React&quot;</em>, <em>&quot;Product UX&quot;</em>],</p><p><span>04</span>&nbsp;&nbsp;mode: <em>&quot;AI-augmented&quot;</em>,</p>
            <p><span>05</span>&#125;;</p>
          </div>
          <div className="console-metrics"><div><strong>3+</strong><span>YEARS / FRONTEND</span></div><div><strong>4</strong><span>CODEX / SIDE PROJECTS</span></div></div>
        </div>
        <a className="scroll-cue" href="#projects"><span>SCROLL TO EXPLORE</span><i /></a>
      </section>

      <section className="projects-section" id="projects">
        <div className="section-intro"><div><span className="section-index">01 / SELECTED WORK</span><h2>用 Codex，<br />把 side project 做到底。</h2></div><p>每一個作品都從真實興趣或需求出發。不是停在概念，而是走完規劃、實作、整合與上線的完整路徑。</p></div>
        <div className="project-list">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.number}>
              <div className="project-head"><span>{project.number}</span><span>{project.kicker}</span><span>CODEX-BUILT</span></div>
              <div className="project-content"><div className="project-copy"><p className="project-subtitle">{project.subtitle}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.url} target="_blank" rel="noreferrer" className="project-link"><span>OPEN PROJECT</span><b>{project.displayUrl}</b><ArrowUpRight /></a></div><figure className={`project-visual project-image ${project.tone}`}><img src={project.image} alt={project.imageAlt} loading="lazy" /></figure></div>
            </article>
          ))}
        </div>
      </section>

      <section className="expertise-section" id="expertise">
        <div className="section-label"><span>02</span><p>EXPERTISE / HOW I WORK</p></div>
        <div className="expertise-layout"><div className="expertise-heading"><h2>技術是手段，<br />清楚好用才是答案。</h2><p>從 React 生態系出發，保有對使用者與產品脈絡的敏感度；AI 則是我加速探索、驗證與交付的夥伴。</p></div><div className="capability-list">
          <div className="capability"><Code2 /><span>01</span><div><h3>前端產品開發</h3><p>React、Next.js、TypeScript、Vue 3；從元件架構到響應式介面。</p></div></div>
          <div className="capability"><Workflow /><span>02</span><div><h3>跨端與系統整合</h3><p>WebView JS Bridge、REST API、第三方登入，以及前後端協作流程。</p></div></div>
          <div className="capability"><Bot /><span>03</span><div><h3>AI Agent 開發模式</h3><p>提示詞設計、AI 輔助編碼與自動化腳本，獨立完成含資料庫的產品。</p></div></div>
          <div className="capability"><Network /><span>04</span><div><h3>使用者體驗簡化</h3><p>具高齡使用者產品經驗，擅長把複雜資訊與操作路徑變得直覺。</p></div></div>
        </div></div>
        <div className="tech-marquee" aria-label="技術清單"><div className="tech-marquee-track"><span>REACT <i /> TYPESCRIPT <i /> NEXT.JS <i /> VUE 3 <i /> TAILWIND CSS <i /> SUPABASE <i /> NODE.JS <i /> D3.JS <i /> GITHUB ACTIONS <i /> CLOUDFLARE <i /></span><span aria-hidden="true">REACT <i /> TYPESCRIPT <i /> NEXT.JS <i /> VUE 3 <i /> TAILWIND CSS <i /> SUPABASE <i /> NODE.JS <i /> D3.JS <i /> GITHUB ACTIONS <i /> CLOUDFLARE <i /></span></div></div>
      </section>

      <section className="story-section" id="story">
        <div className="section-label"><span>03</span><p>STORY / EXPERIENCE</p></div>
        <div className="story-layout"><div className="story-statement"><figure className="profile-photo"><div className="profile-image"><img src="/profile.jpg" alt="鄭韋新大頭貼" /></div></figure><Languages /><p>跨出舒適圈，<br />也跨出技術的邊界。</p><a className="story-contact" href="https://mail.google.com/mail/?view=cm&fs=1&to=popo51102@gmail.com" target="_blank" rel="noreferrer" aria-label="使用 Gmail 寄信給鄭韋新"><Mail /><span>使用 Gmail 聯絡我<small>popo51102@gmail.com</small></span><ArrowUpRight /></a></div><div className="story-text"><p>在 30 歲前往日本語言學校，是一次主動選擇陌生的挑戰。那段經驗訓練了我的獨立解題、快速適應與跨文化溝通，也讓我更確定：面對新的技術與環境，我願意先走出去，再把它學會。</p><p>回到產品開發，我把這份韌性放進每一次實作。持續精進 React、Next.js、Tailwind CSS 與 Vue，並用 AI 工具突破一人開發的邊界。</p></div><div className="timeline">
          <div className="timeline-item current"><span>2022 — 2025</span><h3>前端工程師</h3><p>吉樂健康資訊科技</p><small>課程首頁與論壇改版、內部後台、WebView 協作、高齡使用者體驗優化</small></div>
          <div className="timeline-item"><span>2022</span><h3>前端工程師</h3><p>金富達科技</p><small>React、Styled Components、Google 登入與 API 串接</small></div>
          <div className="timeline-item"><span>2021</span><h3>前端工程師養成班</h3><p>資策會</p><small>前後端、資料庫、Git 與團隊專案開發</small></div>
        </div></div>
      </section>
      <ThemeSwitcher />
    </main>
  );
}
