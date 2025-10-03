import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <div className="header-glow"></div>
          <h1>About Me</h1>
          <p className="intro-text">
            I'm a web developer focused on React and TypeScript, building clean,
            responsive, and accessible user interfaces. I enjoy turning complex
            problems into simple, beautiful solutions and following best
            practices for maintainable code.
          </p>
        </div>

        <div className="about-grid">
          <div className="grid-card">
            <div className="card-icon"></div>
            <h2>Skills</h2>
            <div className="skills-container">
              <span className="skill-item">React / Next.js</span>
              <span className="skill-item">TypeScript & JavaScript</span>
              <span className="skill-item">GO</span>
              <span className="skill-item">CSS & Tailwind</span>
              <span className="skill-item">Linux</span>
              <span className="skill-item">Node.js & Express</span>
              <span className="skill-item">MongoDB / SQL Server</span>
              <span className="skill-item">REST APIs</span>
              <span className="skill-item">Git & GitHub</span>
            </div>
          </div>

          <div className="grid-card">
            <div className="card-icon"></div>
            <h2>Experience</h2>
            <p>
              2+ years building SPAs and small full-stack projects. Experience in
              group projects, creating booking systems, real estate platforms, and
              admin dashboards with authentication, CRUD, and real-time updates.
            </p>
          </div>

          <div className="grid-card">
            <div className="card-icon"></div>
            <h2>Education</h2>
            <p>
              Bachelor's studies in Computer Science, with a focus on Web
              Development, Databases, and Software Engineering. Hands-on practice
              with modern frameworks and cloud technologies.
            </p>
          </div>

          <div className="grid-card">
            <div className="card-icon"></div>
            <h2>Projects</h2>
            <div className="projects-container">
              <div className="project-item">
                <div className="project-dot"></div>
                Flight Booking System
              </div>
              <div className="project-item">
                <div className="project-dot"></div>
                Real Estate Platform
              </div>
              <div className="project-item">
                <div className="project-dot"></div>
                ERP System 
              </div>
               <div className="project-item">
                <div className="project-dot"></div>
                Expense Tracker Application
              </div>
            </div>
          </div>

          <div className="grid-card">
            <div className="card-icon"></div>
            <h2>Goals</h2>
            <p>
              My goal is to grow as a full-stack developer, contribute to
              impactful projects, and continuously improve skills in React,
              TypeScript, and backend technologies.
            </p>
          </div>
          </div>
      </div>
    </section>
  );
}