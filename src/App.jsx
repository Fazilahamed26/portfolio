import {
  profile, facts, projects, jobs, skills, education, certifications,
} from "./data.js";

const Tags = ({ items }) => (
  <div className="tags">{items.map((t) => <span key={t}>{t}</span>)}</div>
);

function Nav() {
  const links = ["projects", "experience", "skills", "education", "contact"];
  return (
    <header className="nav">
      <div className="wrap">
        <a className="brand" href="#top"><span className="mono">FA</span>{profile.name}</a>
        <nav aria-label="Sections">
          {links.map((l) => (
            <a key={l} href={`#${l}`}>{l[0].toUpperCase() + l.slice(1)}</a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="wrap hero">
      <div>
        <h1>{profile.name}</h1>
        <div className="role">{profile.role}</div>
        <p className="lead">{profile.summary}</p>
        <div className="btns">
          <a className="btn main" href="#projects">View projects</a>
          <a className="btn" href="#contact">Contact me</a>
          <a className="btn" href="/Fazil-Ahamed-S-Resume.pdf" download>Download résumé</a>
        </div>
      </div>
      <aside className="card profile" aria-label="Profile summary">
        <div className="top">
          <div className="avatar">FA</div>
          <div><b>{profile.location}</b><small>MCA student, St. Joseph’s College</small></div>
        </div>
        <div className="facts">
          {facts.map(([n, l]) => (
            <div key={l}><strong>{n}</strong><span>{l}</span></div>
          ))}
        </div>
      </aside>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className="alt">
      <div className="wrap">
        <h2>Projects</h2>
        <p className="sub">Full-stack and machine learning work, built from interface to data.</p>
        <div className="grid">
          {projects.map((p) => (
            <article key={p.title} className={`card proj${p.wide ? " wide" : ""}`}>
              <h3>{p.title}</h3>
              <div className="kind">{p.kind}</div>
              <ul>{p.points.map((x) => <li key={x}>{x}</li>)}</ul>
              <Tags items={p.tags} />
              {p.link && (
                <p style={{ margin: "16px 0 0" }}>
                  <a href={p.link} target="_blank" rel="noopener noreferrer">View project →</a>
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <h2>Experience</h2>
        <p className="sub">Two internships in data science and analytics.</p>
        <div className="tl">
          {jobs.map((j) => (
            <div className="job" key={j.title}>
              <h3>{j.title}</h3>
              <div className="meta">{j.org} · {j.when}</div>
              <ul>{j.points.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="alt">
      <div className="wrap">
        <h2>Skills</h2>
        <p className="sub">The tools I use across web development, data and machine learning.</p>
        <div className="skills">
          {skills.map(([title, items, wide]) => (
            <div key={title} className="card sk" style={wide ? { gridColumn: "span 2" } : undefined}>
              <h3>{title}</h3>
              <Tags items={items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education">
      <div className="wrap two">
        <div>
          <h2>Education</h2>
          {education.map(([deg, school, when]) => (
            <div className="item" key={deg}>
              <b>{deg}</b>
              <div className="meta">{school}<br />{when}</div>
            </div>
          ))}
        </div>
        <div>
          <h2>Certifications</h2>
          {certifications.map(([name, by]) => (
            <div className="item" key={name}>
              <b>{name}</b>
              <div className="meta">{by}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap">
        <h2>Let’s work together</h2>
        <p>I’m looking for a role on a collaborative development team. Send me an email or find me on LinkedIn and GitHub.</p>
        <div className="btns">
          <a className="btn main" href={`mailto:${profile.email}`}>{profile.email}</a>
          <a className="btn" href={`tel:+91${profile.phone}`}>{profile.phone}</a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="btn" href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <footer>© {profile.name} · {profile.location}</footer>
    </>
  );
}
