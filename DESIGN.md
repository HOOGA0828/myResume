---
name: 鄭韋新｜前端工程師履歷與作品集
description: One portfolio with an original digital studio homepage and two route-specific recruiting resumes.
colors:
  root-ink: "#080a0d"
  root-panel: "#101318"
  root-panel-raised: "#15191f"
  root-text: "#eff3f4"
  root-muted: "#9da6aa"
  root-mint: "#8ef0d0"
  root-coral: "#ff6d4a"
  root-cyan: "#4dc8ff"
  root-lime: "#c8ff65"
  root-violet: "#b898ff"
  root-line: "rgba(238,242,244,.14)"
  root-soft-line: "rgba(238,242,244,.08)"
  works-background: "#101512"
  works-ink: "#f4f2e9"
  works-muted: "#b6c1b8"
  works-line: "#506157"
  works-accent: "#ff704d"
  career-paper: "#f1f0eb"
  career-ink: "#1a2935"
  career-muted: "#52616a"
  career-line: "#bfc7c7"
  career-accent: "#bd432d"
typography:
  root-display:
    fontFamily: "Inter, Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(3.5rem, 5.4vw, 5.4rem)"
    fontWeight: 760
    lineHeight: 1.1
    letterSpacing: "-.035em"
  root-body:
    fontFamily: "Inter, Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "clamp(1rem, 1.3vw, 1.125rem)"
    lineHeight: 1.8
  root-label:
    fontFamily: "JetBrains Mono, SFMono-Regular, Consolas, monospace"
    fontSize: "12px"
  works-display:
    fontFamily: "Resume Serif TC, serif"
    fontSize: "clamp(4.5rem, 6vw, 6rem)"
    fontWeight: 750
    lineHeight: 1.15
    letterSpacing: "-.03em"
  works-headline:
    fontFamily: "Resume Serif TC, serif"
    fontSize: "clamp(2.7rem, 4vw, 4.75rem)"
    lineHeight: 1.17
    letterSpacing: "-.035em"
  works-body:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.85
  career-display:
    fontFamily: "Resume Serif TC, serif"
    fontSize: "clamp(5rem, 8vw, 6rem)"
    fontWeight: 780
    lineHeight: 1.18
    letterSpacing: "-.035em"
  career-headline:
    fontFamily: "Resume Serif TC, serif"
    fontSize: "clamp(2.75rem, 4.6vw, 5.2rem)"
    fontWeight: 780
    lineHeight: 1.22
    letterSpacing: "-.035em"
  career-body:
    fontFamily: "Noto Sans TC, PingFang TC, Microsoft JhengHei, sans-serif"
    fontSize: ".9375rem"
    lineHeight: 1.75
rounded:
  root-base: ".75rem"
  root-pill: "99px"
spacing:
  root-page-gutter: "clamp(24px, 5vw, 80px)"
  root-section-space: "clamp(76px, 9vw, 120px)"
components:
  root-primary-button:
    backgroundColor: "{colors.root-mint}"
    textColor: "{colors.root-ink}"
    padding: "17px 20px 17px 24px"
  root-project-card:
    backgroundColor: "transparent"
    textColor: "#101316"
  works-work-index:
    backgroundColor: "#1b241e"
    textColor: "{colors.works-ink}"
    padding: "13px 14px"
  works-tag:
    backgroundColor: "transparent"
    textColor: "{colors.works-muted}"
    padding: "6px 9px"
  career-skill-cell:
    backgroundColor: "transparent"
    textColor: "{colors.career-ink}"
    padding: "25px 27px 30px"
  career-contact:
    backgroundColor: "{colors.career-ink}"
    textColor: "#fff"
    padding: "23px 25px"
---

# Design System: 鄭韋新

## Overview

**Creative North Star: "Three ways to read one engineer"**

The existing `/` page is a dark digital studio portfolio: mint interface light, a code console, large sans-serif type, and occasional bright project accents. It remains its own visual world.

The two recruiting resumes deliberately change the reading order and visual language. `/resume/works` is a dark editorial contact sheet led by real project screenshots. `/resume/career` is a light technical field report led by dated work history. Their CSS variables live on the route roots, so these palettes and typographic roles apply only to their named routes. All three retain the real portrait and project images and use Traditional Chinese as the reading language.

**Key Characteristics:**

- The same portrait and four project screenshots in three distinct presentations.
- `/resume/works`: near-black green, warm white, orange-red, large unframed screenshots, and continuous project numbers.
- `/resume/career`: pale paper, deep ink blue, vermilion marks, fine rules, and a visible chronological spine.
- Square, editorial surfaces on the new routes; restrained motion and visible keyboard focus.

## Colors

### Primary

- **Original mint** (`root-mint`): action fills, selected words, status marks, and focus on `/`. The homepage offers alternative theme palettes through its existing theme switcher; these frontmatter values record the default theme.
- **Contact-sheet orange** (`works-accent`): numbers, links, emphasis, focus, and the corner image action on `/resume/works`.
- **Field-report vermilion** (`career-accent`): section punctuation, marginal indices, links, and focus on `/resume/career`.

### Secondary

- **Original coral, cyan, lime, and violet** (`root-coral`, `root-cyan`, `root-lime`, `root-violet`): the homepage uses these for code syntax, project identities, marks, and limited decorative details. They are not resume palette tokens.

### Neutral

- **Original ink and panels** (`root-ink`, `root-panel`, `root-panel-raised`): the homepage canvas and console layers. `root-text` and `root-muted` carry its main and supporting text; `root-line` and `root-soft-line` divide dark surfaces.
- **Contact-sheet background** (`works-background`): the project-led canvas. `works-ink` is its warm text, `works-muted` its supporting copy, and `works-line` its dividers and tag outlines.
- **Field-report paper** (`career-paper`): the resume canvas. `career-ink` is its text and strong rule; `career-muted` carries secondary reading; `career-line` makes the timeline and grids legible without filled cards.

**The Route Palette Rule.** Use the `root-*` tokens on `/`, `works-*` on `/resume/works`, and `career-*` on `/resume/career`. The few light sections inside `/resume/works` are intentional editorial reversals, not a fourth global theme.

## Typography

**Display Font:** The original route uses Inter with Traditional Chinese system fallbacks. Both resumes use the locally hosted `Resume Serif TC` for names, section titles, and project titles.

**Body Font:** Both resumes use Noto Sans TC, PingFang TC, and Microsoft JhengHei fallbacks. The original route uses Inter before that stack.

**Label/Mono Font:** The original route uses JetBrains Mono with SFMono-Regular and Consolas fallbacks. The resume routes use compact sans-serif indices and labels.

### Hierarchy

- **Display:** The homepage has a heavy sans-serif hero; both resumes use oversized serif names. Each route's exact size, weight, and line-height are in the frontmatter.
- **Headline:** Resume section and project headings are serif, tightly tracked, and substantially larger than body text. The original route keeps sans-serif section headings.
- **Body:** Resume descriptions are comfortable reading lines (typically `1.7`–`1.9` line-height), with capped measures in the implemented layouts.
- **Label:** Small numerals, dates, metadata, and technology tags provide fast scanning. The original route uses mono for its labels; the resumes use bold sans-serif labels and tabular project/date numbers.

**The Evidence Type Rule.** On the two resume routes, reserve the serif for names and editorial headings; keep descriptions, dates, controls, and metadata in the route's sans-serif body stack.

## Layout

The original `/` uses a wide two-column hero, a console, then a light project section and darker expertise/story sections. Its final layout pass sets a responsive page gutter (`root-page-gutter`), section rhythm (`root-section-space`), and a `1440px` inner content limit. At `1000px` the hero and project cards stack; at `720px` the content narrows further.

`/resume/works` begins with a `0.82fr / 1.18fr` opening split and a large `1.87` aspect-ratio featured screenshot. Four numbered work links form a contact strip. Subsequent project spreads alternate image and copy across `1.2fr / .8fr` and `.8fr / 1.2fr` columns. The page turns to pale green for capabilities, dark green for history, and warm paper for the portrait and contact. At `1100px` these layouts stack and the work strip scrolls horizontally; at `700px` the page uses `20px` side padding and a single reading column.

`/resume/career` uses a `1.48fr / .52fr` cover: large name and role at left, grayscale portrait and contact data at right. The body keeps a narrow numbered margin beside the main column, with vertical rules continuing through sections. History is the first section, followed by capabilities, four project cases, and a personal note. At `760px` the report becomes one column and its cover aside sits below the introduction; at `500px` the skill grid also becomes one column.

## Elevation & Depth

The original homepage uses a lifted console (`0 24px 64px rgba(0,0,0,.25)` in the final layout pass) and a coral offset shadow on primary-action hover. The resume routes use no box shadows. On `/resume/works`, contrast between dark canvas, real screenshots, and the two paper-like section reversals supplies depth. On `/resume/career`, a hierarchy of dark and pale rules supplies structure.

**The Flat Resume Rule.** Keep both recruiting routes flat; screenshots, contrast, spacing, and fine rules already separate their content.

## Shapes

The two resume routes use square imagery, cells, link bars, and panels. Their screenshots are cropped directly with `object-fit: cover`, without device frames. `/resume/works` uses fine outlined technology tags and a square orange image action; `/resume/career` uses rectangular grid cells and pale filled project tags. The original homepage retains pill project tags (`99px`); its final project rows are flat, border-top entries rather than raised cards. The root stylesheet also defines a shared `.75rem` radius token for its component layer.

## Components

### Navigation

- **Original `/`:** A fixed, translucent dark bar with a three-part grid, mono wordmark, mint hover state, and a `68px` final height. At the small breakpoint it becomes a two-column layout.
- **`/resume/works`:** A `72px` sticky dark bar with name, three section links, and version links. At `1100px` version links disappear; at `700px` it becomes `62px` tall and tighter.
- **`/resume/career`:** A `68px` sticky paper bar with an ink rule, three section links, and the works-version link. At `760px` it becomes `60px` tall and the version link is hidden.

### Buttons and Links

- **Original `/`:** A square mint primary link with dark text and asymmetrical padding; hover moves it upward and adds a coral offset shadow. Text links use a mono label and underline rule.
- **`/resume/works`:** The hero's project link is a square orange corner action. Project detail links use a top rule and an orange arrow. The final contact link is a solid warm red rectangle.
- **`/resume/career`:** Cover actions and project links are underlined text links; the final contact link is a full ink rectangle with pale text and vermilion icons.
- **Focus:** Both resumes use a two-pixel accent outline with a four-pixel offset. The original uses the same geometry in mint.

### Project Entries and Tags

- **Original `/`:** Final project entries are separated by a top rule, with large copy and real image panes in a two-column row. Outlined pill tags are used here.
- **`/resume/works`:** The four-item image index, numbered featured project, and alternating numbered spreads are the signature component set. Images scale only slightly on hover. Tags are square outlines on the dark background.
- **`/resume/career`:** Projects read as report rows with number/type at left, copy at center, and a real screenshot at right. Tags are compact pale rectangles. The two-column capability grid and dated experience rows share the page's rule system.

### Responsive and Motion States

The resume routes keep their content order when they collapse to one column. Image zooms use a short transition; hover color changes are restrained. Both routes disable effective animation and transition duration under `prefers-reduced-motion: reduce` and expose skip links when focused.

## Do's and Don'ts

### Do:

- **Do** keep the homepage's mint digital-studio styling scoped to `/`.
- **Do** use the real portrait and project screenshots as content on both resume routes.
- **Do** preserve the work-first reading order on `/resume/works` and the dated history-first reading order on `/resume/career`.
- **Do** preserve visible focus outlines and the mobile single-column reading order.

### Don't:

- **Don't** apply the dark contact-sheet palette to the light career report or the paper report's vermilion as the works route accent.
- **Don't** wrap resume screenshots in invented device frames or replace them with abstract illustrations.
- **Don't** introduce raised cards or ornamental shadows into the two flat resume routes.
