import "./app.scss";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import { experience, profile, projects, researchSummary } from "./content";

const App = () => {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a href="#top" className="wordmark" aria-label="Aiym Aibekova home">
          {profile.name}
        </a>

        <nav className="topnav" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#research">Research</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="resume-button" href={profile.resume} download>
          Resume ↗
        </a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow">
              CS + Economics @ PLU • Software Engineer Intern @ Microsoft • Tacoma, WA
            </p>
            <h1>{profile.title}</h1>
            <p className="intro">{profile.intro}</p>

            <div className="hero-actions">
              <a href="#work" className="primary-action">
                Explore my work
              </a>
              <a href={profile.resume} className="secondary-action" download>
                Download resume
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-label="Build, Learn, Measure diagram">
            <div className="constellation">
              <span className="node n1">Build</span>
              <span className="node n2">Learn</span>
              <span className="node n3">Measure</span>
            </div>
          </div>
        </section>

        <section className="proof-strip" aria-label="Quick proof strip">
          {profile.highlights.map((item) => (
            <div key={item} className="proof-pill">
              {item}
            </div>
          ))}
        </section>

        <section id="work" className="work-section">
          <div className="section-header">
            <p className="section-kicker">Selected work</p>
            <h2>Recent projects and shipped thinking.</h2>
          </div>
          <Portfolio projects={projects} />
        </section>

        <section id="experience" className="experience-section">
          <div className="section-header">
            <p className="section-kicker">Experience</p>
            <h2>Engineering work with product and research context.</h2>
          </div>

          <div className="timeline" aria-label="Experience timeline">
            {experience.map((item) => (
              <article key={item.company} className="timeline-item">
                <div className="timeline-dot" aria-hidden="true" />
                <div className="timeline-body">
                  <div className="timeline-meta">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                  </div>
                  <h3>{item.title}</h3>
                  <p className="company-name">{item.company}</p>
                  <ul>
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="research" className="research-section">
          <div className="research-panel">
            <div className="research-graphic" aria-hidden="true">
              <span className="bar b1" />
              <span className="bar b2" />
              <span className="bar b3" />
              <span className="bar b4" />
              <span className="bar b5" />
            </div>

            <div className="research-copy">
              <p className="section-kicker">Research</p>
              <span className="status-chip">{researchSummary.status}</span>
              <h2>{researchSummary.title}</h2>
              <p className="authors">{researchSummary.authors}</p>
              <p className="conference">{researchSummary.conference}</p>
              <p>{researchSummary.summary}</p>
            </div>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="section-header narrow">
            <p className="section-kicker">About</p>
            <h2>People-centered software and practical decision-making.</h2>
          </div>

          <div className="about-grid">
            <p>
              Hi, I’m Aiym. I study computer science and economics at Pacific Lutheran University, and I love finding ways to make technology useful to real people. I’m happiest when I’m building something, learning from the people around me, and getting to share that excitement with someone else. I’m a people person—I love a good conversation, meeting new people, and making connections. I’ve been to more than 100 conferences, and I always come away with a new idea or a person I’m glad I met.
            </p>
            <p>
              Outside of school and engineering, I sing in choir, practice yoga, and learn languages. Right now, that means Spanish and Mandarin. Since August, I’ve also been working on an independent study that I know will focus on AI; I’m still narrowing down the question and shaping the project. My capstone is an interview-practice app meant to help people feel more prepared and confident. I like that both projects leave room to ask questions, try things, and keep learning as I go.
            </p>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
};

export default App;
