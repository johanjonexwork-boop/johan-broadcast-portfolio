"use client";

import { useEffect, useState } from "react";

type Project = {
  number: string;
  title: string;
  category: string;
  description: string;
  type: "video" | "photo" | "design";
  media?: string;
  link?: string;
  tag: string;
};

const projects: Project[] = [
  {
    number: "01",
    title: "Live Broadcast & Switching",
    category: "LIVE PRODUCTION",
    description: "Live-streaming and switching experience, including Maasi Maha Peruvizha at Mahabalipuram.",
    type: "video",
    tag: "Broadcast"
  },
  {
    number: "02",
    title: "The Court — Promo",
    category: "PROMOTIONAL CONTENT",
    description: "Contributed to promotional video production for The Court, associated with JioHotstar.",
    type: "video",
    tag: "Promo"
  },
  {
    number: "03",
    title: "Bigg Boss — Poster Shoot",
    category: "CAMPAIGN / PHOTOGRAPHY",
    description: "Involved in planning the poster concept and photoshoot.",
    type: "photo",
    tag: "Campaign"
  },
  {
    number: "04",
    title: "Mr. & Mrs. Office",
    category: "CAMPAIGN / PHOTOGRAPHY",
    description: "Supported planning for the poster and photoshoot.",
    type: "photo",
    tag: "Photoshoot"
  },
  {
    number: "05",
    title: "Indian Bank — Corporate Ad",
    category: "ADVERTISING / DIRECTION",
    description: "Worked as Assistant Director on an advertisement for Indian Bank’s corporate office.",
    type: "video",
    tag: "Commercial"
  },
  {
    number: "06",
    title: "Drone Cinematography",
    category: "AERIAL VIDEO",
    description: "Aerial footage captured through drone operation. Add your strongest drone clips here.",
    type: "video",
    tag: "Aerial"
  },
  {
    number: "07",
    title: "Short Films",
    category: "DOP / EDITING",
    description: "Worked on 7+ short films as Director of Photography and editor.",
    type: "video",
    tag: "Film"
  },
  {
    number: "08",
    title: "LOHO Magazine",
    category: "EDITORIAL / DESIGN",
    description: "Magazine and visual-media work through the Loyola Hostel Media Team.",
    type: "design",
    tag: "Editorial"
  },
  {
    number: "09",
    title: "Dreamers Creation",
    category: "PRODUCTION",
    description: "Production work. Add a short description of your role and the final output.",
    type: "video",
    tag: "Production"
  }
];

const experience = [
  {
    role: "Assistant Director · Videographer · Drone Operator",
    company: "Heeds",
    period: "4 months",
    detail: "Supported production planning and on-set execution, captured video, operated drones, and contributed creative ideas. Worked on promotional planning and photoshoots connected with JioHotstar projects."
  },
  {
    role: "Video Editor · Executive Producer",
    company: "Galatta Media",
    period: "1 month",
    detail: "Edited short-form videos and managed video scheduling and publishing timelines."
  },
  {
    role: "Media Team",
    company: "Shammah TV",
    period: "3 years",
    detail: "Worked across media production, video editing, live streaming, broadcast content, technical setup, and creative execution. Led the media team for one year."
  },
  {
    role: "Video Editing & Graphic Design Intern",
    company: "DT Next / Daily Thanthi",
    period: "1 month",
    detail: "Created short-form news videos and carousel graphics for digital platforms."
  },
  {
    role: "Secretary · Coordinator · Member",
    company: "LAMP — Loyola Art & Media Production",
    period: "3 years",
    detail: "Contributed to coverage of 600+ college events across photography, videography, editing, design, and broadcasting."
  },
  {
    role: "Media Representative · Team Member",
    company: "LOHO Media",
    period: "3 years",
    detail: "Supported hostel event coverage, magazine work, LED-wall visuals, and live-event coordination."
  },
  {
    role: "Multimedia Artist",
    company: "LKK Department Media Team",
    period: "3 years",
    detail: "Contributed video editing, graphic design, and media support for department activities."
  },
  {
    role: "Media & Editorial Support",
    company: "Loyola Students Council / Office of Media Relations",
    period: "2–3 years",
    detail: "Designed newspaper, magazine, and newsletter visuals and documented college events through photography and video."
  }
];

const software = [
  "vMix", "OBS Studio", "Adobe Premiere Pro", "Adobe Photoshop",
  "Adobe InDesign", "Adobe XD", "Dreamweaver", "Canva",
  "Adobe Express", "Affinity"
];

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);
  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter((project) => project.type === activeFilter.toLowerCase());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div className="top-progress" aria-hidden="true" />
      <header className="site-header">
        <a className="wordmark" href="#home" onClick={closeMenu} aria-label="Johan home">
          JJ<span>.</span>
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "CLOSE −" : "MENU +"}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          {[
            ["Work", "#work"],
            ["Experience", "#experience"],
            ["Profile", "#profile"],
            ["Software", "#software"],
            ["Contact", "#contact"]
          ].map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let&apos;s connect <ArrowUpRight /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-shell" id="home">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow"><span className="live-dot" /> BROADCAST · LIVE PRODUCTION · MEDIA</p>
              <h1>Making moments<br />work <em>live.</em></h1>
              <p className="hero-description">
                I&apos;m Johan J Jonex — a media professional building experience across live
                broadcasting, streaming and switching, video production, and visual storytelling.
              </p>
              <div className="hero-actions">
                <a className="button button-light" href="#work">Explore my work <ArrowUpRight /></a>
                <a className="text-link" href="#contact">Get in touch <span>↘</span></a>
              </div>
              <div className="hero-meta">
                <span>BASED IN CHENNAI, INDIA</span>
                <span>AVAILABLE FOR BROADCAST OPPORTUNITIES</span>
              </div>
            </div>
            <div className="hero-art reveal">
              <div className="art-frame">
                <div className="art-topline"><span>FIELD NOTES / 001</span><span>LIVE SIGNAL</span></div>
                <div className="signal-mark">
                  <span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span /><span />
                </div>
                <div className="art-center">
                  <span className="art-cross">+</span>
                  <div className="play-ring"><span>▶</span></div>
                  <p>FROM SIGNAL<br />TO STORY</p>
                </div>
                <div className="art-bottomline"><span>PRODUCTION / CONTROL / CREATIVE</span><span>JJ—01</span></div>
              </div>
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <span className="floating-label label-a">ON AIR<span> ●</span></span>
              <span className="floating-label label-b">REC <span>◉</span></span>
            </div>
          </div>
          <a className="scroll-cue" href="#work"><span className="scroll-line" /> SCROLL TO EXPLORE <span>↓</span></a>
        </section>

        <section className="work-section section-shell section-pad" id="work">
          <div className="section-heading reveal">
            <div><p className="eyebrow">01 / SELECTED WORK</p><h2>Work in <em>motion.</em></h2></div>
            <p className="section-intro">A selection of broadcast, production, aerial, and design work. Replace the sample cards with your own media as you build this portfolio.</p>
          </div>
          <div className="filters reveal" role="group" aria-label="Filter projects">
            {["All", "Video", "Photo", "Design"].map((filter) => (
              <button key={filter} className={activeFilter === filter ? "filter active" : "filter"} onClick={() => setActiveFilter(filter)}>
                {filter}<span>{filter === "All" ? projects.length.toString().padStart(2, "0") : projects.filter((p) => p.type === filter.toLowerCase()).length.toString().padStart(2, "0")}</span>
              </button>
            ))}
          </div>
          <div className="project-grid">
            {filteredProjects.map((project, index) => (
              <article className={`project-card reveal project-${(index % 3) + 1}`} key={project.number}>
                <div className={`project-visual visual-${project.type}`}>
                  {project.media ? (
                    /\\.(mp4|webm|ogg)(\\?.*)?$/i.test(project.media) ? (
                      <video className="project-media" src={project.media} controls playsInline preload="metadata" />
                    ) : (
                      <img className="project-media" src={project.media} alt={project.title} />
                    )
                  ) : (
                    <div className="visual-grid" />
                  )}
                  <span className="project-number">{project.number} / 09</span>
                  <span className="visual-symbol">{project.type === "video" ? "▶" : project.type === "photo" ? "◎" : "▤"}</span>
                  <span className="visual-caption">{project.tag}</span>
                  <span className="visual-corner">JJ—WORKS</span>
                </div>
                <div className="project-info">
                  <div><p className="project-category">{project.category}</p><h3>{project.title}</h3></div>
                  <span className="project-arrow"><ArrowUpRight /></span>
                </div>
                <p className="project-description">{project.description}</p>
              </article>
            ))}
          </div>
          <p className="upload-note reveal"><span>↳</span> To add your work: put media in <code>public/media</code>, then update the project list in <code>components/Portfolio.tsx</code>. Instructions are included in the README.</p>
        </section>

        <section className="experience-section section-pad" id="experience">
          <div className="section-shell">
            <div className="section-heading reveal">
              <div><p className="eyebrow">02 / EXPERIENCE</p><h2>Built across<br /><em>the workflow.</em></h2></div>
              <p className="section-intro">From live-event execution to post-production, each role has added a new layer to how I understand media.</p>
            </div>
            <div className="timeline">
              {experience.map((item, index) => (
                <article className="timeline-item reveal" key={item.company}>
                  <div className="timeline-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="timeline-main">
                    <p className="timeline-period">{item.period}</p>
                    <h3>{item.company}</h3>
                    <p className="timeline-role">{item.role}</p>
                    <p className="timeline-detail">{item.detail}</p>
                  </div>
                  <span className="timeline-index">0{index + 1}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="profile-section section-shell section-pad" id="profile">
          <div className="section-heading reveal">
            <div><p className="eyebrow">03 / PROFESSIONAL PROFILE</p><h2>Curious by nature.<br /><em>Calm under pressure.</em></h2></div>
          </div>
          <div className="profile-grid reveal">
            <p className="profile-lead">I work where technical execution meets creative storytelling.</p>
            <div className="profile-copy">
              <p>
                I&apos;m a B.Voc Digital Journalism student at Loyola College, Chennai, graduating in 2027.
                My experience spans live streaming and switching, broadcast content, camera work,
                editing, graphic design, and production coordination.
              </p>
              <p>
                Through Shammah TV, college media teams, event coverage, and production projects,
                I&apos;ve learned to contribute across the workflow — from setting up and capturing
                content to shaping the final output. I&apos;m especially interested in growing within
                professional broadcast environments and live production teams.
              </p>
              <div className="profile-facts">
                <div><span>EDUCATION</span><strong>B.Voc Digital Journalism</strong><small>Loyola College, Chennai · 2027</small></div>
                <div><span>CORE INTEREST</span><strong>Broadcast & Live Production</strong><small>Streaming · Switching · Production</small></div>
                <div><span>LANGUAGES</span><strong>English · Tamil · Malayalam</strong><small>Communication across teams</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="software-section section-shell section-pad" id="software">
          <div className="section-heading reveal">
            <div><p className="eyebrow">04 / TOOLS OF THE TRADE</p><h2>Software & <em>systems.</em></h2></div>
            <p className="section-intro">Tools I&apos;ve worked with across live production, editing, and design. Add or remove tools to match your current proficiency.</p>
          </div>
          <div className="software-grid reveal">
            {software.map((name, index) => (
              <div className="software-item" key={name}><span>{String(index + 1).padStart(2, "0")}</span><strong>{name}</strong><ArrowUpRight /></div>
            ))}
          </div>
          <p className="software-footnote">Broadcast focus: vMix · OBS Studio · Live streaming & switching</p>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-shell contact-inner reveal">
            <p className="eyebrow"><span className="live-dot" /> 05 / CONTACT</p>
            <h2>Have a signal<br />to <em>send?</em></h2>
            <p className="contact-copy">I&apos;m looking to learn, contribute, and grow with broadcast and live production teams. Let&apos;s connect.</p>
            <a className="contact-email" href="mailto:johanjonexwork@gmail.com">johanjonexwork@gmail.com <ArrowUpRight /></a>
            <div className="contact-links">
              <a href="tel:+918122929197">+91 81229 29197</a>
              <a href="https://www.instagram.com/johanjnx/" target="_blank" rel="noreferrer">Instagram <ArrowUpRight /></a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="wordmark" href="#home">JJ<span>.</span></a>
        <span>© {new Date().getFullYear()} JOHAN J JONEX</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}
