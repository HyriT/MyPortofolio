import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I’m a web developer focused on React and TypeScript, building clean,
          responsive, and accessible user interfaces. I enjoy turning complex
          problems into simple, beautiful solutions and following best
          practices for maintainable code.
        </p>
      </div>

      <div className="about-content">
        {/* Skills */}
        <div className="about-card">
          <h4>Skills</h4>
          <ul>
            <li>React / Next.js</li>
            <li>TypeScript & JavaScript (ES6+)</li>
            <li>CSS (Flexbox, Grid, Tailwind)</li>
            <li>Node.js & Express</li>
            <li>MongoDB / Prisma</li>
            <li>REST APIs & Authentication</li>
            <li>Version Control (Git/GitHub)</li>
          </ul>
        </div>

        {/* Experience */}
        <div className="about-card">
          <h4>Experience</h4>
          <p>
            2+ years building SPAs and small full-stack projects. Experience in
            group projects, creating booking systems, real estate platforms, and
            admin dashboards with authentication, CRUD, and real-time updates.
          </p>
        </div>

        {/* Education */}
        <div className="about-card">
          <h4>Education</h4>
          <p>
            Bachelor’s studies in Computer Science, with a focus on Web
            Development, Databases, and Software Engineering. Hands-on practice
            with modern frameworks and cloud technologies.
          </p>
        </div>

        {/* Projects */}
        <div className="about-card">
          <h4>Projects</h4>
          <ul>
            <li>Flight Booking System (React + Node.js + MongoDB)</li>
            <li>Real Estate Website with Admin Dashboard</li>
            <li>Travel Booking Platform with Hotels & Flights</li>
          </ul>
        </div>

        {/* Goals */}
        <div className="about-card">
          <h4>Goals</h4>
          <p>
            My goal is to grow as a full-stack developer, contribute to
            impactful projects, and continuously improve skills in React,
            TypeScript, and backend technologies like Node.js & databases.
          </p>
        </div>
      </div>
    </section>
  );
}
