import type { Metadata } from "next";
import { ArrowDownRight, ArrowLeft, ArrowUpRight, Mail } from "lucide-react";
import { capabilities, contactHref, experience, profile, projects, techStack } from "../../../lib/resume-content";
import "./works.css";

export const metadata: Metadata = {
  title: "鄭韋新｜作品先行履歷",
  description: "鄭韋新的前端工程師作品先行履歷，展示四個已上線作品、專長與完整工作經歷。",
};

export default function WorksResume() {
  const featured = projects[0];

  return (
    <main className="works-resume" id="top">
      <a className="works-skip" href="#projects">跳到作品</a>
      <header className="works-nav">
        <a className="works-brand" href="#top" aria-label="回到頁首">鄭韋新<span> / WS</span></a>
        <nav aria-label="作品先行履歷導覽"><a href="#projects">作品</a><a href="#experience">經歷</a><a href="#about">關於</a></nav>
        <div className="works-versions"><a href="/">原版</a><a href="/resume/career">經歷先行版 <ArrowUpRight aria-hidden="true" /></a></div>
      </header>

      <section className="works-opening" aria-labelledby="works-heading">
        <div className="works-opening-copy">
          <h1 id="works-heading">{profile.name}</h1>
          <p className="works-role">{profile.role} · {profile.location}</p>
          <p className="works-statement">把想法<br />做成<span>真正能用</span>的產品。</p>
          <p className="works-intro">{profile.intro}</p>
          <a className="works-scroll" href="#projects">瀏覽完整作品 <ArrowDownRight aria-hidden="true" /></a>
        </div>
        <article className="works-feature" id="work-01">
          <a className="works-feature-image" href={featured.url} target="_blank" rel="noreferrer" aria-label={`開啟${featured.title}`}><img src={featured.image} alt={featured.imageAlt} /><span className="works-image-action"><ArrowUpRight aria-hidden="true" /></span></a>
          <div className="works-feature-caption"><div><span className="works-project-count">01 / 04</span><p>{featured.type}</p></div><div><h2>{featured.title}</h2><p className="works-subtitle">{featured.subtitle}</p><p className="works-feature-description">{featured.description}</p></div></div>
          <div className="works-feature-tags">{featured.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        </article>
      </section>

      <nav className="works-strip" id="projects" aria-label="四個作品索引">{projects.map((project) => <a href={`#work-${project.number}`} key={project.number}><span>{project.number}</span><img src={project.image} alt="" loading="lazy" /><strong>{project.title}</strong></a>)}</nav>

      <section className="works-gallery" aria-label="作品詳細介紹">{projects.slice(1).map((project, index) => <article className={`works-project works-project-${index + 2}`} id={`work-${project.number}`} key={project.number}>
        <div className="works-project-visual"><img src={project.image} alt={project.imageAlt} loading="lazy" /></div>
        <div className="works-project-copy"><p className="works-project-top"><span>{project.number} / 04</span><span>{project.type}</span></p><h2>{project.title}</h2><p className="works-project-subtitle">{project.subtitle}</p><p className="works-project-description">{project.description}</p><div className="works-tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="works-project-link" href={project.url} target="_blank" rel="noreferrer">查看作品 <span>{project.displayUrl}</span><ArrowUpRight aria-hidden="true" /></a></div>
      </article>)}</section>

      <section className="works-practice" id="expertise" aria-labelledby="works-practice-heading"><div className="works-practice-intro"><h2 id="works-practice-heading">讓技術回到<br />使用者身上。</h2><p>{profile.approach}</p></div><div className="works-capabilities">{capabilities.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>)}</div><div className="works-stack" aria-label="使用技術">{techStack.map((tech) => <span key={tech}>{tech}</span>)}</div></section>

      <section className="works-history" id="experience" aria-labelledby="works-history-heading"><div className="works-history-lead"><h2 id="works-history-heading">經歷，是作品<br />背後的累積。</h2><p>從團隊產品開發到獨立完成 side project，持續把複雜需求整理成能交付的介面。</p></div><div className="works-history-list">{experience.map((item) => <article key={`${item.period}-${item.company}`}><time>{item.period}</time><div><h3>{item.title}</h3><p>{item.company}</p><span>{item.detail}</span></div></article>)}</div></section>

      <section className="works-about" id="about" aria-labelledby="works-about-heading"><figure><img src="/profile.jpg" alt="鄭韋新大頭貼" loading="lazy" /><figcaption>{profile.name} / FRONTEND ENGINEER</figcaption></figure><div><h2 id="works-about-heading">跨出舒適圈，<br />也跨出技術的邊界。</h2>{profile.story.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}<a href={contactHref} target="_blank" rel="noreferrer"><Mail aria-hidden="true" /> 使用 Gmail 聯絡我 <ArrowUpRight aria-hidden="true" /><small>{profile.email}</small></a></div></section>
      <footer className="works-footer"><span>鄭韋新 © 2026</span><div><a href="/">原版履歷</a><a href="/resume/career">經歷先行版</a><a href="#top">回到頂部 <ArrowLeft aria-hidden="true" /></a></div></footer>
    </main>
  );
}
