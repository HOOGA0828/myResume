import type { Metadata } from "next";
import { ArrowDown, ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { capabilities, contactHref, experience, profile, projects, techStack } from "../../../lib/resume-content";
import "./career.css";

export const metadata: Metadata = {
  title: "鄭韋新｜經歷先行履歷",
  description: "鄭韋新的前端工程師經歷先行履歷，依序呈現工作經歷、技術專長與四個已上線作品。",
};

export default function CareerResume() {
  return (
    <main className="career-resume" id="top">
      <a className="career-skip" href="#experience">跳到工作經歷</a>
      <header className="career-nav">
        <a className="career-nav-brand" href="#top" aria-label="回到頁首">鄭韋新<span> / 履歷</span></a>
        <nav aria-label="經歷先行履歷導覽"><a href="#experience">經歷</a><a href="#skills">專長</a><a href="#projects">作品</a></nav>
        <a className="career-nav-switch" href="/resume/works">作品先行版 <ArrowUpRight aria-hidden="true" /></a>
      </header>

      <section className="career-cover" aria-labelledby="career-title">
        <div className="career-cover-main">
          <h1 id="career-title">鄭<span>韋</span>新<span className="career-name-dot">.</span></h1>
          <p className="career-cover-role">前端工程師<span>／</span>{profile.location}</p>
          <p className="career-cover-intro">{profile.intro}</p>
          <div className="career-cover-actions"><a href="#experience">閱讀經歷 <ArrowDown aria-hidden="true" /></a><a href={contactHref} target="_blank" rel="noreferrer">聯絡我 <ArrowUpRight aria-hidden="true" /></a></div>
        </div>
        <aside className="career-cover-aside" aria-label="個人資料">
          <figure><img src="/profile.jpg" alt="鄭韋新大頭貼" /><figcaption>鄭韋新 / FRONTEND ENGINEER</figcaption></figure>
          <dl><div><dt>LOCATION</dt><dd>{profile.location}</dd></div><div><dt>EMAIL</dt><dd><a href={contactHref} target="_blank" rel="noreferrer">{profile.email}</a></dd></div><div><dt>FOCUS</dt><dd>React · Product UX · AI Agent</dd></div></dl>
        </aside>
      </section>

      <div className="career-body">
        <section className="career-experience career-section" id="experience" aria-labelledby="career-experience-title">
          <div className="career-section-label"><span>01 / 04</span><span>WORK HISTORY</span></div>
          <div className="career-section-content"><div className="career-section-heading"><h2 id="career-experience-title">工作經歷<span className="career-red-dot">.</span></h2><p>從實際產品開發與跨端整合出發，持續把資訊和互動整理成清楚的使用體驗。</p></div>
            <div className="career-timeline">{experience.map((item, index) => <article key={`${item.period}-${item.company}`}><div className="career-time"><span>0{index + 1}</span><time>{item.period}</time></div><div className="career-job"><h3>{item.title}</h3><strong>{item.company}</strong><p>{item.detail}</p></div></article>)}</div>
          </div>
        </section>

        <section className="career-skills career-section" id="skills" aria-labelledby="career-skills-title">
          <div className="career-section-label"><span>02 / 04</span><span>CAPABILITIES</span></div>
          <div className="career-section-content"><div className="career-section-heading"><h2 id="career-skills-title">工作方法與專長<span className="career-red-dot">.</span></h2><p>{profile.approach}</p></div>
            <div className="career-skill-grid">{capabilities.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.description}</p></article>)}</div>
            <div className="career-stack"><span>TECHNOLOGY INDEX</span><div>{techStack.map((tech) => <span key={tech}>{tech}</span>)}</div></div>
          </div>
        </section>

        <section className="career-projects career-section" id="projects" aria-labelledby="career-projects-title">
          <div className="career-section-label"><span>03 / 04</span><span>SELECTED WORK</span></div>
          <div className="career-section-content"><div className="career-section-heading"><h2 id="career-projects-title">實作作品<span className="career-red-dot">.</span></h2><p>四個已上線的作品，涵蓋互動敘事、資料視覺化、自動化系統與學習體驗。</p></div>
            <div className="career-project-list">{projects.map((project) => <article key={project.number}>
              <div className="career-project-meta"><span>{project.number} / 04</span><span>{project.type}</span></div>
              <div className="career-project-copy"><h3>{project.title}</h3><p className="career-project-subtitle">{project.subtitle}</p><p className="career-project-description">{project.description}</p><div className="career-project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a href={project.url} target="_blank" rel="noreferrer">查看作品 <span>{project.displayUrl}</span><ArrowUpRight aria-hidden="true" /></a></div>
              <a className="career-project-image" href={project.url} target="_blank" rel="noreferrer" aria-label={`開啟${project.title}`}><img src={project.image} alt={project.imageAlt} loading="lazy" /></a>
            </article>)}</div>
          </div>
        </section>

        <section className="career-story career-section" id="about" aria-labelledby="career-story-title">
          <div className="career-section-label"><span>04 / 04</span><span>PERSONAL NOTE</span></div>
          <div className="career-section-content"><div className="career-section-heading"><h2 id="career-story-title">個人經歷<span className="career-red-dot">.</span></h2><p>跨出舒適圈，也跨出技術的邊界。</p></div><div className="career-story-text">{profile.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div><a className="career-contact" href={contactHref} target="_blank" rel="noreferrer"><span><Mail aria-hidden="true" />使用 Gmail 聯絡我<small>{profile.email}</small></span><ArrowUpRight aria-hidden="true" /></a></div>
        </section>
      </div>
      <footer className="career-footer"><span>鄭韋新 / RESUME 2026</span><div><a href="/">原版履歷</a><a href="/resume/works">作品先行版</a><a href="#top">回到頂部 <ArrowLeft aria-hidden="true" /></a></div></footer>
    </main>
  );
}
