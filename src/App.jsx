import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import {
  academicProjects,
  education,
  experience,
  interests,
  languages,
  profile,
  projects,
  skillGroups,
} from './data.js'

const navItems = [
  { label: 'Work', id: 'work' },
  { label: 'Experience', id: 'experience' },
  { label: 'Toolkit', id: 'skills' },
  { label: 'About', id: 'about' },
]

function App() {
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const revealItems = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    )
    revealItems.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('main section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Back to top">
            {profile.initials}<span>.</span>
          </a>

          <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? 'is-active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>
              Get in touch <ArrowUpRight size={15} strokeWidth={2} />
            </a>
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow reveal"><span className="eyebrow-mark" />Marketing · Content · Growth</p>
              <h1 className="reveal">
                Good brands aren’t just seen. <em>They’re remembered.</em>
              </h1>
              <p className="hero-lede reveal">
                I’m {profile.name} — a marketing student and intern turning research, words and design
                into campaigns that feel human and actually perform.
              </p>
              <div className="hero-actions reveal">
                <a className="button button-primary" href="#work">
                  Explore my work <ArrowUpRight size={17} strokeWidth={2} />
                </a>
                <a className="button button-line" href="/Samruddhi_Rajulkar_Resume.pdf" download>
                  Download résumé <ArrowDown size={16} strokeWidth={2} />
                </a>
              </div>
            </div>

            <aside className="hero-panel reveal" aria-label="At a glance">
              <div className="panel-head">
                <span>Currently</span>
                <strong>BBA student &amp; marketing intern</strong>
              </div>
              <div className="panel-monogram" aria-hidden="true">
                {profile.initials}<span>.</span>
              </div>
              <div className="panel-location">
                <span className="status-dot" />
                {profile.location}
              </div>
              <div className="panel-facts">
                <div className="fact">
                  <strong>25 → 32%</strong>
                  <span>engagement lifted in one month</span>
                </div>
                <div className="fact">
                  <strong>6 roles</strong>
                  <span>across marketing, finance &amp; leadership</span>
                </div>
                <div className="fact">
                  <strong>4 languages</strong>
                  <span>English, Hindi, Gujarati, Marathi</span>
                </div>
              </div>
            </aside>
          </div>
          <div className="container hero-foot">
            <span>Available for internships &amp; collaborations</span>
            <a href="#work" className="scroll-cue">
              Scroll to explore <ArrowDown size={15} strokeWidth={2} />
            </a>
          </div>
        </section>

        <div className="ticker" aria-hidden="true">
          <div className="ticker-track">
            <span>CONTENT STRATEGY <i>✳</i> SOCIAL MEDIA <i>✳</i> CAMPAIGNS <i>✳</i> BRAND THINKING <i>✳</i> RESEARCH <i>✳</i> </span>
            <span>CONTENT STRATEGY <i>✳</i> SOCIAL MEDIA <i>✳</i> CAMPAIGNS <i>✳</i> BRAND THINKING <i>✳</i> RESEARCH <i>✳</i> </span>
          </div>
        </div>

        <section className="section work-section" id="work">
          <div className="container work-layout">
            <div className="section-intro sticky-intro reveal">
              <span className="section-index">01 / Selected work</span>
              <h2>Work with a <em>point of view.</em></h2>
              <p>
                Campaigns, pages and content systems I’ve shaped — from the first idea to the final post.
              </p>
            </div>
            <div className="work-list">
              {projects.map((project, index) => (
                <a
                  className="work-row reveal"
                  key={project.title}
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="work-number">{String(index + 1).padStart(2, '0')}</span>
                  <div className="work-body">
                    <span className="work-kind">{project.kind}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span className="work-link">{project.linkLabel} <ArrowUpRight size={15} /></span>
                  </div>
                  <span className="work-arrow"><ArrowUpRight size={22} strokeWidth={1.7} /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="container">
            <div className="section-head reveal">
              <span className="section-index">02 / Experience</span>
              <h2>Where I’ve <em>done the work.</em></h2>
              <p>Real briefs, real teams, real deadlines — across agencies, a university and the stock markets.</p>
            </div>

            <div className="timeline">
              {experience.map((job) => (
                <article className={`timeline-row reveal ${job.highlight ? 'is-highlight' : ''}`} key={job.role + job.company}>
                  <div className="timeline-date">{job.period}</div>
                  <div className="timeline-rail" aria-hidden="true"><span /></div>
                  <div className="timeline-content">
                    {job.highlight && <span className="timeline-tag">Leadership</span>}
                    <h3>{job.role}</h3>
                    <p className="timeline-company">{job.company}</p>
                    <ul>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-head reveal">
              <span className="section-index">03 / Toolkit</span>
              <h2>Strategy, backed by <em>the right tools.</em></h2>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group, index) => (
                <div className="skill-row reveal" key={group.title}>
                  <span className="skill-number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{group.title}</h3>
                  <p>{group.detail}</p>
                </div>
              ))}
            </div>
            <div className="extra-lines reveal">
              <div>
                <span className="mini-label">Languages</span>
                <p>{languages.join('  /  ')}</p>
              </div>
              <div>
                <span className="mini-label">Interests</span>
                <p>{interests.join('  /  ')}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section about-section" id="about">
          <div className="container about-layout">
            <div className="section-intro reveal">
              <span className="section-index">04 / Background</span>
              <h2>Curious by nature. <em>Organised by habit.</em></h2>
              <p>
                Detail-oriented and comfortable owning a task end to end — whether that means handling
                budgets and financial documents or translating a brief into content people want to read.
              </p>
            </div>
            <div className="about-content">
              <div className="about-block reveal">
                <h3 className="about-title">Education</h3>
                {education.map((item) => (
                  <div className="edu-row" key={item.title}>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.place}</p>
                    </div>
                    <span>{item.meta}</span>
                  </div>
                ))}
              </div>
              <div className="about-block reveal">
                <h3 className="about-title">Academic projects</h3>
                <ul className="academic-list">
                  {academicProjects.map((item) => (
                    <li key={item.title}>
                      <strong>{item.title}</strong>
                      <span>{item.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <span className="contact-index">05 / Get in touch</span>
            <h2 className="reveal">Let’s make something <em>worth talking about.</em></h2>
            <p className="contact-note reveal">
              Open to marketing internships, freelance campaigns and collaborations.
            </p>
            <div className="contact-links reveal">
              <a href={`mailto:${profile.email}`} className="contact-email">
                {profile.email} <ArrowUpRight size={22} strokeWidth={1.8} />
              </a>
              <div className="contact-secondary">
                <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="brand small">{profile.initials}<span>.</span></span>
          <p>Marketing, content &amp; things that connect.</p>
          <a href="#top">Back to top <ArrowRight size={14} className="rotate-up" /></a>
        </div>
      </footer>
    </>
  )
}

export default App
